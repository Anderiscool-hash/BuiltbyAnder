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

## Open-source credits

- [linkev/PlayStation-3-XMB](https://github.com/linkev/PlayStation-3-XMB) — MIT License; WebGL XMB wave and particle foundation.
- [libretro/retroarch-assets](https://github.com/libretro/retroarch-assets) — CC BY 4.0; Systematic icons, font, and menu sounds.
- [baxysquare/baxy-retroarch-themes](https://github.com/baxysquare/baxy-retroarch-themes) — source artwork referenced by the RetroArch Systematic theme.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for details.
