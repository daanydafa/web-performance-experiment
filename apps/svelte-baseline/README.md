# 🟥 Svelte – Baseline

This is the baseline version of the Svelte-based news web application. It serves as a **control group** in the web performance benchmarking experiment and does **not apply any optimization techniques**.

---

## ⚙️ Optimization Strategy: Baseline

- Static homepage with list of news articles
- Image assets loaded normally (no lazy loading or compression)
- All components rendered immediately (no code splitting or visibility deferral)

---

## 🧱 Stack

- Framework: Svelte 4
- Build Tool: Vite
- Styling: Tailwind CSS 3.4.17
- Data Source: Static mock API from `/mock-api/`

---

## 🚀 Running the App

```bash
npm install
npm run dev
