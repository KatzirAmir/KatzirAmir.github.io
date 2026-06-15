# Amir Katzir's Blog

Modern, fast, left-sidebar personal blog. Hosted on GitHub Pages at https://katziramir.github.io

## Tech

- Single `index.html` (Tailwind via CDN + Tailwind config + marked.js for Markdown)
- Pure client-side SPA-like navigation (no reloads between Home / Posts / About)
- Posts are plain Markdown files in `/posts/`
- Left sidebar is fixed and beautiful on desktop; collapses to a clean mobile drawer
- Dark/light theme with persistence
- Zero build step. Sub-second loads on GitHub Pages CDN.

## Adding a new post (takes < 2 minutes)

1. Copy `posts/template.md` → `posts/your-slug-here.md`
2. Fill in the frontmatter:
   ```yaml
   ---
   title: "Your Title"
   date: "2026-06-14"
   tags: ["data-science", "career"]
   excerpt: "Short description for cards and search."
   readTime: "6 min"
   ---
   ```
3. Write your Markdown below the frontmatter. Use normal `#`, `##`, lists, blockquotes, etc.
4. Open `index.html` and add an entry to the `POSTS` array near the top of the `<script>`:

   ```js
   {
     slug: "your-slug-here",
     title: "Your Title",
     date: "2026-06-14",
     tags: ["data-science", "career"],
     excerpt: "...",
     readTime: "6 min"
   },
   ```

5. Commit and push (or ask me to help push via the Grok MCP tools).

The site will pick it up instantly on refresh.

## Local development

From inside the `blog/` folder:

```powershell
# PowerShell / CMD
python -m http.server 8000
# or
npx serve
```

Then open http://localhost:8000

## Deployment (GitHub Pages)

This repo is published as **katziramir.github.io**.

After pushing changes:

1. Go to the repo: https://github.com/KatzirAmir/KatzirAmir.github.io
2. Settings → Pages
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
4. Save. Wait ~30–90 seconds. Your site is live at https://katziramir.github.io

## Philosophy

Fast. Smooth. Sleek. No heavy static site generators unless we decide we want Quarto-powered technical posts later (content is portable Markdown either way).

Enjoy.

— Amir
