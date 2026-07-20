"""Check external and local links used by the blog site."""
import re
import urllib.error
import urllib.request
from pathlib import Path

root = Path(__file__).resolve().parents[2]
urls = set()
html = (root / "index.html").read_text(encoding="utf-8")
for m in re.findall(r"https?://[^\s\"'<>]+", html):
    urls.add(m.rstrip(").,;"))
for p in (root / "guides").glob("*.md"):
    for m in re.findall(r"https?://[^\s)\]>\"']+", p.read_text(encoding="utf-8")):
        urls.add(m.rstrip(").,;"))
for p in (root / "posts").rglob("*.md"):
    for m in re.findall(r"https?://[^\s)\]>\"']+", p.read_text(encoding="utf-8")):
        urls.add(m.rstrip(").,;"))

# skip CDN noise we know works / fonts
skip_prefixes = (
    "https://cdn.tailwindcss.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://cdn.jsdelivr.net",
)

assets = []
for m in re.findall(r"""(?:href|src)=["']([^"']+)["']""", html):
    if m.startswith(("http", "#", "data:", "mailto:", "javascript:")):
        continue
    assets.append(m)

print("=== LOCAL ASSETS ===")
for a in sorted(set(assets)):
    ok = (root / a).exists()
    print(("OK" if ok else "MISSING"), a)

print("\n=== EXTERNAL URLS ===")
headers = {"User-Agent": "Mozilla/5.0 (compatible; link-check/1.0)"}
for u in sorted(urls):
    if any(u.startswith(p) for p in skip_prefixes):
        print("SKIP", u)
        continue
    try:
        req = urllib.request.Request(u, headers=headers, method="HEAD")
        with urllib.request.urlopen(req, timeout=20) as r:
            print(r.status, u)
    except urllib.error.HTTPError as e:
        # some sites block HEAD
        if e.code in (403, 405, 501):
            try:
                req = urllib.request.Request(u, headers=headers, method="GET")
                with urllib.request.urlopen(req, timeout=20) as r:
                    print(r.status, "(GET)", u)
            except Exception as e2:
                print("FAIL", u, e2)
        else:
            print("FAIL", e.code, u)
    except Exception as e:
        # retry GET
        try:
            req = urllib.request.Request(u, headers=headers, method="GET")
            with urllib.request.urlopen(req, timeout=20) as r:
                print(r.status, "(GET)", u)
        except Exception as e2:
            print("FAIL", u, e2)
