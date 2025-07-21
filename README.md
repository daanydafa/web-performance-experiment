# 📊 Web Performance Experiment

**Comparative Benchmarking of React and Svelte Frameworks under Web Performance Optimization Techniques Based on User-Centric Metrics**

This project benchmarks the performance of two frontend frameworks — **React** and **Svelte** — using user-centric web performance metrics, both in **baseline** condition and after applying **individual optimization strategies**.

---

## 🎯 Objectives

- Measure and compare how React and Svelte perform in delivering fast and stable web experiences.
- Evaluate the effectiveness of **five optimization techniques** using real implementations.
- Use experimental design to isolate the impact of each strategy on key performance metrics.

---

## 📈 Metrics Evaluated

- **FCP** – First Contentful Paint  
- **LCP** – Largest Contentful Paint  
- **TBT** – Total Blocking Time  
- **CLS** – Cumulative Layout Shift  

These metrics follow [Core Web Vitals](https://web.dev/vitals/) recommended by Google.


# 📊 Web Performance Experiment

**Comparative Benchmarking of React and Svelte Frameworks under Web Performance Optimization Techniques Based on User-Centric Metrics**

This project benchmarks the performance of two frontend frameworks — **React** and **Svelte** — using user-centric web performance metrics, both in **baseline** condition and after applying **individual optimization strategies**.

---

## 🎯 Objectives

- Measure and compare how React and Svelte perform in delivering fast and stable web experiences.
- Evaluate the effectiveness of **five optimization techniques** using real implementations.
- Use experimental design to isolate the impact of each strategy on key performance metrics.

---

## 📈 Metrics Evaluated

- **FCP** – First Contentful Paint  
- **LCP** – Largest Contentful Paint  
- **TBT** – Total Blocking Time  
- **CLS** – Cumulative Layout Shift  

These metrics follow [Core Web Vitals](https://web.dev/vitals/) recommended by Google.

---

## 🗂️ Folder Structure

.
├── apps/ # React and Svelte app variations
├── benchmarking/ # Lighthouse CI config and performance result outputs
├── mock-api/ # Static JSON-based mock API
├── README.md
└── ...


- `apps/`: Contains individual projects for each optimization applied to both React and Svelte (e.g., `react-lazy-image`, `svelte-code-splitting`, etc.).
- `benchmarking/`: Scripts, configuration, and Lighthouse results from automated testing.
- `mock-api/`: Simulated backend API using static JSON files.
---

## 🚀 How to Run

Pick any implementation inside the `apps/` folder and run it locally:

```bash
cd apps/react-lazy-image     # or any other folder
npm install
npm run dev
