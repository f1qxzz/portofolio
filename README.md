<div align="center">
  <img src="https://img.shields.io/badge/Next.js%2016-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</div>

<br />

<h1 align="center">✦ f1qxzz — Portfolio ✦</h1>

<p align="center">
  <b>Personal website</b> — dibangun pake Next.js 16 + Tailwind v4 + Framer Motion.
  <br />
  Cepet, responsif, dan penuh animasi.
</p>

<div align="center">
  <a href="https://f1q.vercel.app" target="_blank">🚀 Live Demo</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/f1qxzz/portofolio" target="_blank">📦 GitHub</a>
</div>

<br />

---

## 📋 Daftar Isi

- [Tech Stack](#-tech-stack)
- [Fitur](#-fitur)
- [Mulai](#-mulai)
- [Environment Variables](#-environment-variables)
- [Struktur Project](#-struktur-project)
- [Deploy](#-deploy)

---

## ⚡ Tech Stack

| Layer | Tech |
|-------|------|
| **Framework** | Next.js 16.2.6 (App Router) |
| **Bahasa** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animasi** | Framer Motion 12.40 |
| **Auth** | NextAuth v5 (Google + GitHub) |
| **Font** | Plus Jakarta Sans |
| **Storage** | Vercel KV (Redis) |
| **Hosting** | Vercel (Edge Network) |

---

## ✨ Fitur

- **Hero** — Terminal typing effect + custom cursor + mouse glow
- **Skills** — Marquee animation buat skill badges
- **Projects** — Galeri project + certificate viewer
- **Comments** — Blog-style comments with OAuth (Google/GitHub login)
- **Dark Theme** — Full dark mode dari ujung ke ujung
- **Animasi** — Scroll progress, counter animation, loading screen
- **Responsive** — Works on desktop & mobile

---

## 🚀 Mulai

```bash
# Clone
git clone https://github.com/f1qxzz/portofolio.git
cd portofolio

# Install
npm install

# Dev
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

---

## 🔐 Environment Variables

Buat file `.env` di root:

```env
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
AUTH_SECRET=
KV_URL=
KV_REST_API_URL=
KV_REST_API_TOKEN=
KV_API_URL=
```

> **Catatan:** Auth & KV cuma dipake kalo mau fitur comments-nya jalan.

---

## 📁 Struktur Project

```
src/
├── app/              # App Router pages & layout
│   ├── layout.tsx    # Root layout + metadata
│   ├── page.tsx      # Homepage
│   ├── globals.css   # Tailwind + custom styles
│   └── api/          # API routes (auth, comments)
├── components/       # UI components
│   ├── Hero.tsx      # Hero section
│   ├── About.tsx
│   ├── SkillsMarquee.tsx
│   ├── Projects.tsx
│   ├── Comments.tsx  # Comment system
│   ├── Navbar.tsx
│   └── ...
├── lib/              # Utilities, context, translations
├── auth.ts           # NextAuth config
data/
├── comments.json     # Comments data
public/               # Static assets (images, icons)
```

---

## 🌐 Deploy

Push ke `main` → auto-deploy ke Vercel.

Atau deploy manual:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

<div align="center">
  <sub>Built with ❤️ by <b>f1qxzz</b></sub>
</div>
