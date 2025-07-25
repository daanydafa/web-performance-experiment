# 🟦 React – Visibility-Based Rendering

This app implements **visibility-based rendering** where components (articles) are rendered **only after** entering the viewport. This reduces initial render work.

---

## ⚙️ Optimization Strategy: Visibility-Based Rendering

Components are conditionally rendered using viewport observation (`IntersectionObserver`) to reduce the initial DOM workload and scripting execution.

---

## 🧱 Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.4.17
- **Data Source**: Static mock API from `/mock-api/`

---

## 🚀 Running the App

```bash
npm install
npm run dev
