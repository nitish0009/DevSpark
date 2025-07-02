# ♻️ DevSpark — Plastic Packaging Impact Analyzer

> Scan. Search. Understand.  
A web app that empowers users to **scan barcodes of daily products** and instantly learn about the **environmental impact of their plastic packaging**.


## 🌟 Features

- 📷 **Live Barcode Scanning** (EAN-13, UPC-A, Code128, QR)
- 🔍 **Search by Product Name or Code**
- 🧠 **Loaded Impact Data** for brands
- 🌱 **Eco Score & Trust Score** for awareness
- 🎨 Light/Dark Mode toggle
- 🛠 Built with **React + Vite + Tailwind CSS**

---

## 📦 How It Works

1. **User scans barcode** via device camera
2. App compares it with a product database
3. If found: shows eco score, impact summary, and trust info
4. If not: displays `"Sorry, product not found"` gracefully

---


## 🚀 Getting Started

```bash
git clone https://github.com/nitish0009/DevSpark.git
cd DevSpark/client
npm install
npm run dev
```

---

## 📝 To Do / Future Enhancements

- 🔊 **Add success beep / vibration** on barcode scan
- 🧪 **Integrate camera switch** (front ↔ back)
- 📂 **Support scan history** (recent products scanned)
- 🌍 **Connect to real-time plastic database API**
- 💬 **Add product feedback or rating option**
- 🧭 **Show plastic reduction tips** per product
- 📱 **Make it PWA** (installable web app)
- 🧪 Add **unit tests** and accessibility improvements
- 🛡️ **Barcode scan timeout** fallback + retry button
- 🔐 Optional: **User login and cloud scan storage**

---

## 🛠 Tech Stack

| Tech              | Purpose                     |
|-------------------|-----------------------------|
| **React**         | Frontend framework          |
| **Vite**          | Fast dev server + build     |
| **Tailwind CSS**  | Styling (utility-first)     |
| **html5-qrcode**  | Camera + barcode scanner    |
| **React Router**  | Client-side routing         |

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Html5Scanner.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ResultCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductPage.jsx
│   └── About.jsx
├── data/
│   └── products.js
└── App.jsx
```

---

## 🤝 Team & Credits

Built during **Microsoft Hackathon 2025** by the **DevSpark Team**  

---

