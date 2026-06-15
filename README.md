# Amir Katzir's Blog

Modern, fast, left-sidebar personal blog. Hosted on GitHub Pages at https://katziramir.github.io

## Tech

- Single `index.html` (Tailwind via CDN + Tailwind config + marked.js for Markdown)
- Pure client-side SPA-like navigation (no reloads between Home / Posts / About)
- Posts are plain Markdown files in `/posts/`
- Left sidebar is fixed and beautiful on desktop; collapses to a clean mobile drawer
- Dark/light theme with persistence
- Zero build step. Sub-second loads on GitHub Pages CDN.

## Adding Posts

Copy `posts/template.md`, fill frontmatter + Markdown, add the entry to the `POSTS` array in `index.html`, then push the files (or ask me to help push via Grok tools).

The `blog site/` folder contains the Notion-sourced material (guides, plans, prompts) that was used for the college post.

## Philosophy

Fast. Smooth. Sleek. No heavy static site generators unless we decide we want Quarto-powered technical posts later (content is portable Markdown either way).

Enjoy.

— Amir
