# Rubitech (روبیتک) — Educational Platform

<p align="center">
  <img src="public/images/logo.png" alt="Rubitech Logo" width="100" />
</p>

<p align="center">
  <strong>هر لپ‌تاپ، یک مدرسه در حرکت!</strong><br />
  A pixel-perfect, responsive web application clone of <a href="https://www.rubitech.school/">Rubitech School</a> built with Next.js, React 19, TypeScript, Bun, and Tailwind CSS.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#license">License</a>
</p>

---

## ✨ Features

- **Full RTL & Typography Parity**: Complete right-to-left layout integration using the authentic Persian **Ravi** font family across all weights (100–800) alongside InterVariable.
- **Dedicated Route Architecture**:
  - `/` — Homepage featuring hero section, problem overview, rotation model, impact metrics, team, and FAQ accordion.
  - `/about` — Our Story page featuring the mission statement, interactive scroll-linked milestone timeline, and animated statistics counters.
  - `/contact` — Controlled contact form with real-time field validation and interactive modal subjects.
  - `404` — Custom not-found error page matching the original design.
- **Multi-Step "ساخت مدرسه" Modal**:
  - Payment method selection (PayPal & Zelle).
  - Step 1: Recipient email, dynamic memo code generation (`RUBI-XXXXXXXX`), and one-click clipboard copying.
  - Step 2: Form validation for payer credentials and transaction confirmation numbers.
  - Step 3: Supporter attribution information and notification preferences.
- **Fluid Scroll Animations**: Powered by Framer Motion (`useScroll`, `useSpring`, progress line interpolation, and Persian number count-up animations).
- **Responsive Navigation**: Adaptive desktop header and fluid mobile slide-down menu drawer.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Runtime & Package Manager** | [Bun](https://bun.sh/) (v1.4+) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS design tokens |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/parsanaderidev/rubiteh.git
   cd rubiteh
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

### Running Locally

Start the local development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To validate and create an optimized production build:

```bash
bun run build
bun run start
```

---

## 📁 Project Structure

```text
├── app/
│   ├── about/
│   │   └── page.tsx        # "قصه ما" - Mission & scroll timeline
│   ├── contact/
│   │   └── page.tsx        # "ارتباط با ما" - Reactive contact form
│   ├── globals.css         # Tailwind tokens & Ravi @font-face rules
│   ├── layout.tsx          # Root RTL layout with header, footer & modals
│   ├── not-found.tsx       # Custom 404 page
│   └── page.tsx            # Landing page sections
├── components/
│   ├── DonationModal.tsx   # 4-stage build school / donation dialog
│   ├── Footer.tsx          # Footer with social links & attribution
│   └── Header.tsx          # Sticky RTL navbar & mobile menu
├── context/
│   └── ModalContext.tsx    # Global modal state provider
├── public/
│   ├── fonts/              # Ravi and Inter font files
│   └── images/             # Extracted original assets
├── package.json
└── tsconfig.json
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

Developed and cloned by [Parsa Naderi](https://parsanaderi-dev.vercel.app).
