# NickelEquip - Heavy Machinery Mining Company Profile

A modern, high-performance corporate website and product catalog for a heavy machinery mining company (nickel extraction & EV supply chain), built with React 19, Vite, TypeScript, and Tailwind CSS 4.

## Features

- **Full corporate pages** - Home, About, Catalog, Services, Gallery, and Contact, organized as a clean multi-page SPA with no page-reload navigation (React Router DOM 7).
- **Product catalog** - dedicated catalog page showcasing heavy machinery and equipment for nickel mining operations.
- **Industrial design system** - dark industrial palette with orange accents, gradient overlays, and backdrop filters for premium readability.
- **Shared layout** - consistent header and footer across pages via a single `Layout` component.
- **Fully responsive** - layouts adapt smoothly across mobile, tablet, and wide desktop screens.
- **AI-ready** - Gemini API dependency (`@google/genai`) and `GEMINI_API_KEY` environment template included for future AI-powered features.

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI Library | React 19 |
| Language | TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Routing | React Router DOM 7 |
| Icons | Material Symbols & lucide-react |
| AI (prepared) | Gemini API (`@google/genai`) |

## Getting Started

**Prerequisite:** Node.js

```bash
git clone https://github.com/indraaryaLabs/react-mining-company-profile.git
cd react-mining-company-profile
npm install
```

Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` if you plan to use Gemini-powered features, then run:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Other commands:

```bash
npm run build # production build to dist/
npm run preview # preview the production build
npm run lint # type-check (tsc --noEmit)
npm run clean # remove dist/
```

## Project Structure

```
src/
├── components/
│ ├── Layout.tsx # Shared shell: Header + Footer + Outlet
│ ├── Header.tsx # Top navigation
│ └── Footer.tsx
├── pages/
│ ├── Home.tsx # Hero & highlights
│ ├── About.tsx # Company profile
│ ├── Catalog.tsx # Machinery & equipment catalog
│ ├── Services.tsx # Specialist services
│ ├── Gallery.tsx
│ └── Contact.tsx # Global offices & inquiry
├── App.tsx # Router setup
└── main.tsx # Entry point
.env.example # Environment variable template (GEMINI_API_KEY, APP_URL)
```

## License

This project is licensed under the [MIT License](LICENSE).
