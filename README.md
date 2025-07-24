
# 📊 MERN Business Tracker

A full-stack business tracking application built using the MERN stack. The app allows users to manage clients, transactions, and view key business analytics on a modern dashboard.

---

## 🚀 Features

- 🔐 JWT Authentication (Register/Login)
- 👤 Client Management
- 💸 Transaction Tracking
- 📈 Business Analytics Dashboard (with charts)
- ⚙️ Protected Routes with React Router
- 🌐 RESTful API with Express + MongoDB
- 🎨 Clean UI built with React, Vite, and Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend:
- React (Vite + TypeScript)
- Tailwind CSS
- React Router
- Axios

### Backend:
- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- dotenv, helmet, morgan, cors

### Deployment:
- 🌐 Frontend: [Vercel](https://mn-mf6d.vercel.com/)
  - 🌐 Backend: [Render](https://mn-m9ag.onrender.com)

---

## ⚙️ Environment Variables

### 🔐 Create a `.env` file in `/server` with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:5173
