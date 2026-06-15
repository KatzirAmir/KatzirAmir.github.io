# Amir Katzir's Blog

Modern, fast, left-sidebar personal blog. Hosted on GitHub Pages at https://katziramir.github.io

## Tech

- Single `index.html` (Tailwind via CDN + Tailwind config + marked.js for Markdown)
- Pure client-side SPA-like navigation (no reloads between Home / Posts / About)
- Posts are plain Markdown files in `/posts/` (now organized as subfolders: posts/slug/post.md for easy editing)
- Left sidebar is fixed and beautiful on desktop; collapses to a clean mobile drawer
- Dark/light theme with persistence (improved with additional CSS rules for full bg/text/border switching)
- Zero build step. Sub-second loads on GitHub Pages CDN.

## Adding Posts (new subfolder structure)

1. Create folder `posts/your-slug/` (e.g. `posts/credit-cards/`)
2. Create `posts/your-slug/post.md` inside it. Use the frontmatter + Markdown format (copy from `posts/template.md` as starting point if helpful).
3. Add matching entry to the `POSTS` constant in `index.html` (slug must match the folder name).
4. Commit/push the changes (or ask me to push the updates to the live site via tools).

The site will pick up the new post automatically (fetches `posts/slug/post.md`).

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

The `blog site/` folder contains the Notion-sourced material (guides, plans, prompts) that was used for the college post.

## Philosophy

Fast. Smooth. Sleek. No heavy static site generators unless we decide we want Quarto-powered technical posts later (content is portable Markdown either way).

Enjoy.

— Amir
