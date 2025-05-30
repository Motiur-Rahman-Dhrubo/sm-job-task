# 🥬 Fresh Harvest - Next.js Web App

This is a modern e-commerce frontend built with **Next.js**, designed to showcase fresh produce like fruits, vegetables, and salads.

---

## 📦 Project Setup

### ✅ Requirements

- Node.js v18 or higher
- npm or yarn

---

## 🧑‍💻 How to Run the Project Locally

1. **Clone the repository**

```bash
git clone https://github.com/Motiur-Rahman-Dhrubo/sm-job-task
cd sm-job-task
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser and go to http://localhost:3000**


## 🛠️ Build and Deployment Steps

### 📦 Production Build

**To create an optimized production build:**

```bash
npm run build
```

**To preview the production build locally:**

```bash
npm start
```

## 🚀 Deployment on Netlify

1. **Push the project to a GitHub repository**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/fresh-harvest.git
git push -u origin main
```

2. **Go to Netlify**

- Click "Add new site" → "Import from Git"

- Connect your GitHub account and select the repository

3. **Configure Build Settings**

- Build Command: npm run build

- Publish Directory: .next

- Add environment variables if needed (e.g. NODE_VERSION)

4. **Install Netlify Adapter (if using App Router)**

```bash
npm install @netlify/next
```

**Update next.config.js:**

```bash
const withNetlify = require("@netlify/next");

module.exports = withNetlify({
  reactStrictMode: true,
});
```

5. **Deploy**

- Netlify will auto-deploy on every push to the main branch.