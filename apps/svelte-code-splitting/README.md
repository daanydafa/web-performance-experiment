# 🟥 Svelte – Code Splitting

This is a Svelte-based news web app that implements **manual code splitting** via `dynamic import()`. The `ArticleDetail.svelte` component is only loaded when the user navigates to a specific article route

---

## ⚙️ Optimization Strategy: Code Splitting

Dynamic import and component injection are used to conditionally load the detail view only when needed.

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
