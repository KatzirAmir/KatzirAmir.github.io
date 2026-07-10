# Calendly + Google Form setup (College Path)

Contact email: **amir.katzir.email@gmail.com**  
Session: **$40 · 30 minutes**

The website reads two constants in `index.html`:

```js
const CONTACT_EMAIL = 'amir.katzir.email@gmail.com';
// Live links (session is 30 min; Calendly URL slug may still say 30min):
const CALENDLY_URL = 'https://calendly.com/amir-katzir-email/30min';
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfz5crCMJiG4oHEZLbnzl8clBfOPikkrQ_5DbyNY6DR_mUbKA/viewform';
```

### Live booking links

| Tool | URL |
|------|-----|
| Calendly (45-min session) | https://calendly.com/amir-katzir-email/30min |
| Google intake form | https://docs.google.com/forms/d/e/1FAIpQLSfz5crCMJiG4oHEZLbnzl8clBfOPikkrQ_5DbyNY6DR_mUbKA/viewform |

---

## Part A — Calendly (linked to Gmail + Google Calendar)

### 1. Create account
1. Open [https://calendly.com/signup](https://calendly.com/signup)
2. Sign up with **amir.katzir.email@gmail.com** (Google sign-in is easiest)

### 2. Connect calendar
1. **Account → Calendar connections** (or onboarding prompt)
2. Connect **Google Calendar** for that Gmail
3. Choose which calendar checks busy times (usually primary)
4. Choose which calendar receives Calendly events

### 3. Create event type
1. **Event types → New event type → One-host**
2. Recommended settings:

| Field | Value |
|--------|--------|
| Name | College Path Session |
| Duration | **30 min** |
| Location | Google Meet (Calendly can auto-create) |
| Description | 30-minute college path advising session with Amir Katzir. Fee: $40. Please submit the intake form on the website before the call when possible. Educational only — no admission guarantees. |
| Date range | Rolling 60 days (or whatever you prefer) |
| Availability | e.g. weeknights + weekend blocks you actually want |
| Buffer | 5–10 min after events |
| Min notice | 24 hours (recommended) |

### 4. Collect payment ($40)
Calendly free tier may not include payments. Options:

**Option A — Calendly + Stripe/PayPal (paid Calendly plans)**  
- Event type → Payments → charge **$40 USD**

**Option B — Free Calendly + Venmo/Zelle/PayPal note (simplest to start)**  
- In event description: “Please send $40 via Venmo/Zelle to … before the session (or immediately after booking).”  
- Add a question: “Payment method / confirmation note”

**Option C — Stripe Payment Link**  
- Create a $40 Payment Link in Stripe  
- Put the link in the Calendly confirmation email + website

### 5. Intake questions inside Calendly (optional short version)
Add invitee questions:
- Student grade / stage  
- School name  
- Top question for this session  
- Link: “I submitted the Google intake form” (Yes/No)

### 6. Copy your link
Example shapes:
- `https://calendly.com/amir-katzir/college-path-45`
- `https://calendly.com/amirkatzir/45min`

Paste into `CALENDLY_URL` in `index.html`.

### 7. Embed (already supported on site)
The Contact page embeds Calendly via iframe when `CALENDLY_URL` is set and not a placeholder. You can also use Calendly’s inline embed script later if you want their full widget.

---

## Part B — Google Drive folder + Intake Form

### Automated (recommended)
1. Sign into Google as **amir.katzir.email@gmail.com**
2. Open [https://script.google.com](https://script.google.com) → **New project**
3. Paste contents of `CreateCollegePathForm.gs`
4. Run `createCollegePathIntake`
5. Approve **Drive**, **Forms**, **Spreadsheets**, **Gmail** (for the log email)
6. Copy **Public form URL** from Executions → Logs (or the email to yourself)

Creates:
- Drive folder: **College Path — Business**
- Subfolder: **Intake Form & Responses**
- Google Form: **College Path: Interest Request**
- Linked responses spreadsheet

### Form fields (already in the script)
- Full name *
- Email *
- Phone optional
- Current school *
- City / district
- Academic stage *
- Intended major
- Academic + activities bio *
- Support areas (checkbox multi) *
- Who is filling form *
- Anything specific?
- How did you hear about us?

### After creation
1. Open the form → **Send** → copy link  
2. Set `GOOGLE_FORM_URL` in `index.html`  
3. Optional: Form → Responses → toggle email notifications for each response  

---

## Recommended client flow
1. Read a guide on the site  
2. Submit **Google intake form**  
3. Book **Calendly 45-min / $40**  
4. Session  

---

## Checklist
- [x] Calendly account on amir.katzir.email@gmail.com  
- [x] Google Calendar connected (assumed with Calendly)  
- [x] Event type live: https://calendly.com/amir-katzir-email/30min (45-min session)  
- [ ] Payment method decided ($40 later)  
- [x] Apps Script ran; form live  
- [x] `CALENDLY_URL` and `GOOGLE_FORM_URL` updated in `index.html`  
- [ ] Test booking + form submit on phone  
