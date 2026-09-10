# Thegretia — Developer Portfolio Web Application

Production-ready developer portfolio for **Patrick Thomas MBONJO ETIA (Thegretia / thegreatia)**: Data Engineer, AI & Machine Learning Engineer, and Python Software Architect.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: TypeScript (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Minimalist Dark Tech Linear/Vercel Aesthetic)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility**: `clsx` & `tailwind-merge`
- **Deployment**: Zero-configuration deployment on [Vercel](https://vercel.com/)

---

## 📐 Architecture & Pages

- `/` — **Hero & Engineering Matrix**: Impact pitch, tech competency breakdown, featured case studies, and latest architecture insights.
- `/projects` — **Projects & Systems Directory**: Interactive category filtering (`All`, `Data Engineering`, `AI & ML`, `Software Engineering`).
- `/projects/[slug]` — **Deep Dive Case Studies**:
  - *Akilang Speech & Translation Engine* (ASR/NLP, PyTorch, LoRA, INT8 ONNX, FastAPI)
  - *Cloud-Scale Lakehouse ETL Pipeline* (Azure Databricks, PySpark, Delta Lake, dbt)
  - *Real-Time Streaming Fraud Detection Engine* (Kafka, PySpark Streaming, Redis, XGBoost)
  - *Distributed Python Async Task Engine* (Asyncio, Redis Streams, OpenTelemetry)
- `/blog` & `/blog/[slug]` — **Technical Blog**: In-depth articles covering Lakehouse partition tuning, low-latency ONNX model serving, and fault-tolerant Python microservices.
- `/about` — **Background & Track Record**: Engineering philosophy, timeline milestones, and categorized skill matrix.
- `/contact` — **Interactive Contact Channel**: Validated contact form and direct channels.
- `/api/newsletter` — **Newsletter API**: Validated email subscription endpoint ready for Supabase / Resend / Brevo.
- `/api/contact` — **Contact Form API**: Asynchronous message dispatch handler.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🌐 Deployment to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production-ready thegretia developer portfolio"
   git remote add origin https://github.com/thegreatia/portfolio.git
   git push -u origin main
   ```
2. Import the repository into [Vercel](https://vercel.com/new).
3. The framework preset will automatically detect Next.js with zero manual configuration required.
4. Click **Deploy**.

---

## 📜 License

Copyright © Patrick Thomas MBONJO ETIA (Thegretia). All rights reserved.
