# PS3-Inspired Portfolio

An interactive portfolio inspired by the PlayStation 3 XMB, featuring WebGL waves, user selection, keyboard and mouse navigation, project demos, visitor settings, and a release log.

## Run locally

```powershell
cd "PlayStation-3-XMB"
npm install
npm run dev
```

Open the local address printed by the development server. The portfolio now loads directly at `/`, matching its Vercel deployment path.

## Deploy on Vercel

- Import `Anderiscool-hash/ps3-portfolio`.
- Set **Framework Preset** to `Other`.
- Keep **Root Directory** at the repository root (`./`).
- Leave **Build Command** and **Output Directory** empty.

## Log a website update

```powershell
npm run log-update -- "Update title" "First change" "Second change"
```
