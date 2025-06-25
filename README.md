```markdown
# 🛍️ CloudX Assignment – Static Product Detail Page with Next.js App Router

This is a **Product listing interface** built using **Next.js App Router**. It displays a list of dummy products and uses dynamic routes like `/products/[id]` to show product details.

---

## 🚀 Features

- ✅ Next.js App Router (app directory)
- ✅ Static generation with `generateStaticParams()`
- ✅ Dummy product data 
- ✅ Responsive Product Card & Detail Pages
- ✅ TailwindCSS for UI
- ✅ Fully typed with TypeScript
- ✅ Optimized images via `next/image`

---

## 📁 Project Structure

```

cloudx-assignment/
├── src/
│   ├── app/
│   │   └── products/
│   │       ├── page.tsx              # Product listing
│   │       └── \[id]/                 # Dynamic product detail
│   │           └── page.tsx
│   ├── lib/
│   │   └── dummyProduct.ts           # Dummy products array
│   ├── types.ts                      # Product interface
│
├── public/
│   ├── Product1.jpg
│   ├── Product2.jpg
│   └── ...
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md

````

---

## 🧠 Technologies Used

- **Next.js 14+** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Lucide Icons**
- **next/image**
- Static Site Generation (SSG)

---

## 🛠️ Setup Instructions

### 1. Clone and install

```bash
git clone https://github.com/your-username/cloudx-assignment.git
cd cloudx-assignment
npm install
````

### 2. Run the dev server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)
---
## 📌 Routes

* `/products` → All products
* `/products/[id]` → Dynamic product page

---
