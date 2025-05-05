# 🚀 CLS Demo – Cumulative Layout Shift Optimization Example

This project demonstrates the difference between **poorly implemented layout rendering** that causes layout shifts (CLS issues) and **well-optimized rendering** using modern frontend practices.

Built with **Next.js App Router** and **React**, this example visually compares a `bad` page with layout instability and a `good` page where CLS is eliminated.

---

## 📖 What is CLS?

**CLS (Cumulative Layout Shift)** is a Core Web Vitals metric that measures visual stability. It tracks how much content moves unexpectedly on the screen — typically due to missing image dimensions, late-loaded ads, or dynamic content injection.

> 🎯 A good CLS score is **below 0.1**. Scores above 0.25 are considered poor.

Learn more: [enesergun/cls]([https://web.dev/cls](https://enesergun.medium.com/gerçek-hayattan-örneklerle-cumulative-layout-shift-optimizasyonu-2713ff1fe0de))

---

## 🧪 Pages

- 🔴 [`/bad`](https://cls-demo.vercel.app/bad):  
  Triggers layout shift via:
  - Late-loaded image (no width/height)
  - Dynamically injected ad block
  - No reserved space

- ✅ [`/good`](https://cls-demo.vercel.app/good):  
  Prevents CLS by:
  - Using `width`, `height`, and `aspect-ratio`
  - Reserving space for content with `min-height`
  - Smooth transitions with no visual jumps

---
## 🌐 Live Demo

- 🔴 **Bad Page:** [https://cls-demo.vercel.app/bad](https://cls-demo.vercel.app/bad)  
- ✅ **Good Page:** [https://cls-demo.vercel.app/good](https://cls-demo.vercel.app/good)

> 💡 **Tip:** Use Chrome DevTools with **"Disable Cache"** enabled and refresh the page using different query parameters like `?v=2`, `?v=3`, etc., to simulate fresh image loading and accurately observe CLS behavior.
