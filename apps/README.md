# Apps – Framework Implementations

This folder contains all experimental implementations of React and Svelte web applications used for performance benchmarking. Each subfolder corresponds to a specific optimization strategy applied to the base version of each framework.

---
## 📌 Description

Each folder contains a standalone frontend app that represents one of the following:

- **Baseline App**: Unoptimized version of the framework (React/Svelte).
- **Optimized App**: A version with a single applied performance optimization.

The apps are built using **Vite**, with each project structured independently to preserve the integrity of the experiment.

---

##  Optimization Strategies Applied

| Strategy Name                 | Description                                                   |
|-------------------------------|---------------------------------------------------------------|
| `lazy-image`                  | Loads images lazily as they enter the viewport                |
| `code-splitting`              | Lazily loads non-critical components                          |
| `compressed-image`            | Converts images to WebP to reduce size                        |
| `defined-dimensions`          | Explicitly defines width and height to prevent layout shift   |
| `visibility-based-rendering`  | Only renders content when visible in viewport                 |

Each React and Svelte variant follows the same optimization logic to ensure fairness.

---

## 🚀 How to Run

To run any app:

```bash
cd [folder-name]
npm install
npm run dev
