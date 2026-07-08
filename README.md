# Amir Katzir — Blog & College Path

- **Blog** — personal writing  
- **College Path** — Bay Area / UC advising at **$40 per 45-minute session**

Contact: **amir.katzir.email@gmail.com**  
Live: https://katziramir.github.io

## Quick start (local)

```powershell
cd "$env:USERPROFILE\Documents\Grok\blog"
python -m http.server 8000
```

Open http://localhost:8000  
(Use a local server — `file://` will not load Markdown guides/posts.)

## Site map

| View | Content |
|------|---------|
| Home | Landing |
| College Path | Positioning |
| Services | $40 / 45 min |
| Guides | Deep Markdown guides in `/guides` |
| Blog | Posts in `/posts/<slug>/post.md` |
| About | Bio |
| Contact | Google Form intake + Calendly |

## Config (in `index.html`)

```js
const CONTACT_EMAIL = 'amir.katzir.email@gmail.com';
const CALENDLY_URL = 'https://calendly.com/amir-katzir-email/30min'; // 45-min session
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfz5crCMJiG4oHEZLbnzl8clBfOPikkrQ_5DbyNY6DR_mUbKA/viewform';
```

- **Book:** https://calendly.com/amir-katzir-email/30min  
- **Intake form:** https://docs.google.com/forms/d/e/1FAIpQLSfz5crCMJiG4oHEZLbnzl8clBfOPikkrQ_5DbyNY6DR_mUbKA/viewform

## Guides included

- Freshman (first-year) UC admission  
- Transfer admission  
- IGETC  
- Dual enrollment  
- UC cost (2026–27 figures from UC)  
- TAG  
- Services  

## Adding a blog post

1. `posts/your-slug/post.md`  
2. Add entry to `POSTS` in `index.html`  

## Deploy

GitHub Pages: `katziramir.github.io` → branch `main` → `/ (root)`
