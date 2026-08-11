# Your Name — Portfolio

A full-stack developer portfolio built with **React (Vite) + Tailwind CSS** on the frontend and **Node.js + Express** on the backend (contact form + a projects API that's ready to grow into a real CMS).

Design direction: a clean, professional "technical spec-sheet" look — navy/paper palette, monospace section labels, a live-status hero panel — meant to read as engineering precision rather than a generic template.

```
portfolio/
├── frontend/     React app (Vite + Tailwind + Framer Motion)
└── backend/      Express API (contact form email + projects endpoint)
```

## 1. Personalize your content (do this first)

Almost everything on the site is driven from one file:

```
frontend/src/data/content.js
```

Edit `profile`, `about`, `skills`, `experience`, and `testimonials` there with your real info.

Your **projects** live in the backend instead, so you can update them without redeploying the frontend:

```
backend/data/projects.json
```

Edit that file with your real projects (name, description, stack, live/repo links, status). `fallbackProjects` in `content.js` is only shown if the backend is unreachable — keep it in sync or leave it minimal.

Also update the page title/description in `frontend/index.html`, and drop a `resume.pdf` into `frontend/public/` if you want the resume link to work.

### Adding your photo
Drop a headshot into `frontend/public/profile.jpg` and it'll appear automatically in the hero's ID-badge card, cropped to a passport-photo ratio (roughly 35×45mm / 0.78 aspect). If the file is missing, your initials show instead as a graceful fallback — nothing breaks either way.
- Use a plain background, front-facing, well-lit — a real passport/ID-style photo, not a casual selfie
- Minimum ~400×515px works well; the image is auto-cropped with `object-fit: cover`
- Must be named exactly `profile.jpg` (or change the filename referenced in `Hero.jsx`)

## 2. Run it locally

**Backend:**
```bash
cd backend
cp .env.example .env      # then fill in SMTP details if you want the contact form to email you
npm install
npm run dev                # runs on http://localhost:5000
```

**Frontend** (in a second terminal):
```bash
cd frontend
cp .env.example .env       # points VITE_API_URL at your backend
npm install
npm run dev                # runs on http://localhost:5173
```

Open http://localhost:5173 — the projects section and contact form will talk to your local backend automatically.

### Contact form email setup
The `/api/contact` route works out of the box even without SMTP configured — it just logs the message to the console instead of emailing you, so nothing breaks during setup. To actually receive emails:
- If using Gmail: enable 2-Step Verification, then create an **App Password** (not your normal password) at myaccount.google.com/apppasswords
- Fill `SMTP_USER`, `SMTP_PASS`, and `CONTACT_RECEIVER` in `backend/.env`

## 3. Deploy it

**Frontend → Vercel** (recommended, free, great for Vite/React):
1. Push this repo to GitHub
2. Import it in Vercel, set the root directory to `frontend`
3. Add an environment variable `VITE_API_URL` pointing to your deployed backend URL
4. Deploy — Vercel auto-detects the Vite build

**Backend → Render or Railway** (both have free tiers):
1. Create a new Web Service, root directory `backend`
2. Build command: `npm install` — Start command: `npm start`
3. Add the environment variables from `.env.example` in the dashboard
4. Once deployed, copy its URL into the frontend's `VITE_API_URL`

**Custom domain:** buy `yourname.dev` or `yourname.com` (Namecheap, Google Domains, etc.) and point it at Vercel — takes about 10 minutes and instantly looks more professional than a `.vercel.app` link.

## 4. Before you share it with anyone

- [ ] Replace every placeholder in `content.js` and `projects.json` with real info
- [ ] Make sure every project's live link and repo link actually work
- [ ] Test the contact form end-to-end (send yourself a real message)
- [ ] Check mobile responsiveness on an actual phone
- [ ] Add real Open Graph text in `index.html` so link previews look good when shared
- [ ] Run `npm run build` in `frontend/` once more to confirm a clean production build

## Tech stack
React 18 · Vite · Tailwind CSS · Framer Motion · Node.js · Express · Nodemailer
