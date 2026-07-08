# Amir Katzir — Blog & College Path

- **Blog** — personal writing  
- **College Path** — Bay Area / UC advising at **$40 per 45-minute session**

Contact: **amir.katzir.email@gmail.com**  
Live (when deployed): https://katziramir.github.io

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
| Contact | Intake form + Calendly embed hooks |

## Config (in `index.html`)

```js
const CONTACT_EMAIL = 'amir.katzir.email@gmail.com';
const CALENDLY_URL = 'https://calendly.com/amir-katzir-email/30min'; // 45-min session
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfz5crCMJiG4oHEZLbnzl8clBfOPikkrQ_5DbyNY6DR_mUbKA/viewform';
```

- **Book:** https://calendly.com/amir-katzir-email/30min  
- **Intake form:** https://docs.google.com/forms/d/e/1FAIpQLSfz5crCMJiG4oHEZLbnzl8clBfOPikkrQ_5DbyNY6DR_mUbKA/viewform

## Setup Calendly + Google Form / Drive

See:

1. [`setup/CALENDLY_AND_FORM_SETUP.md`](setup/CALENDLY_AND_FORM_SETUP.md) — full checklist  
2. [`setup/CreateCollegePathForm.gs`](setup/CreateCollegePathForm.gs) — run in [script.google.com](https://script.google.com) while logged into **amir.katzir.email@gmail.com**

That script creates:

- Drive folder **College Path — Business**  
- Subfolder **Intake Form & Responses**  
- Google Form **College Path: Interest Request**  
- Linked responses spreadsheet  

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

GitHub Pages from `katziramir.github.io` → branch `main` → `/ (root)`  
(Copy or sync this `blog/` tree to the Pages repo root as you usually do.)
