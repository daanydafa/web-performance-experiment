# 🟦 React – Code Splitting

This is a React-based news web app that implements **code splitting** using `React.lazy` and `Suspense`. The purpose is to optimize web performance by deferring the loading of certain components until they are needed

---

## ⚙️ Optimization Strategy: Code Splitting

The `ArticleDetail` page is dynamically imported only when a user navigates to an article detail route (e.g., `#/article/1`). This reduces the size of the initial JavaScript bundle.

---

## 🧱 Stack

- Framework: React 18 
- Build Tool: Vite
- Styling: Tailwind CSS 3.4.17
- Data Source: Static mock API from `/mock-api/`

---

## 🚀 Running the App

```bash
npm install
npm run dev
