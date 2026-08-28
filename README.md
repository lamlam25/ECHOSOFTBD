# ECHOSOFTBD — Company Website

A modern, dark-themed company website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Deploy to Vercel

### Option 1: Via GitHub (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repo
4. Vercel auto-detects Next.js — just click **"Deploy"**
5. Your site will be live at `your-project.vercel.app`

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

## 🎨 Customization

### Update Social Links
Edit `src/components/Contact.tsx` — replace the placeholder `href` values with your actual GitHub, LinkedIn, and Facebook URLs.

### Update Contact Email
Edit `src/components/Contact.tsx` — replace `contact@echosoftbd.com` with your real email address.

### Add a Favicon
Replace `public/favicon.ico` with your own favicon file.

### Add a Custom Domain
In your Vercel dashboard → Settings → Domains → Add your domain (e.g., `echosoftbd.com`).

## 🗂️ Project Structure

```
echosoftbd/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & utility classes
│   │   ├── layout.tsx        # Root layout with SEO metadata
│   │   └── page.tsx          # Main page (all sections)
│   └── components/
│       ├── Navbar.tsx         # Fixed navigation bar
│       ├── Hero.tsx           # Full-screen hero section
│       ├── About.tsx          # Company info & vision
│       ├── Services.tsx       # 6 service cards
│       ├── Technologies.tsx   # Tech stack by category
│       ├── Projects.tsx       # Project portfolio
│       ├── Research.tsx       # Research interests
│       ├── Experience.tsx     # Achievements & experience
│       ├── Contact.tsx        # Contact form & info
│       └── Footer.tsx         # Site footer
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 📋 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Home** | Hero with company name and tagline |
| 02 | **About** | Company story, founder, and vision |
| 03 | **Services** | AI, Software, Web, Research, Database, Problem Solving |
| 04 | **Technologies** | Tech stack organized by category |
| 05 | **Projects** | 6 featured projects with descriptions |
| 06 | **Research** | Research interests + ongoing work |
| 07 | **Experience** | Hackathon, awards, competitions |
| 08 | **Contact** | Email, location, social links, contact form |

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel
