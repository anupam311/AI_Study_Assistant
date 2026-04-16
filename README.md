# 🧠 AI Study Assistant

An AI-powered fullstack web application that converts raw study notes into structured learning material such as summaries, key points, quizzes, and multi-level explanations.

---

## 🚀 Live Demo

🔗 https://ai-study-assistant-ytsb.onrender.com

## 💻 GitHub Repository

🔗 https://github.com/anupam311/AI_Study_Assistant

---

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-orange?style=for-the-badge\&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-blue?style=for-the-badge\&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge\&logo=javascript)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react)
![Flask](https://img.shields.io/badge/Flask-black?style=for-the-badge\&logo=flask)
![Python](https://img.shields.io/badge/Python-blue?style=for-the-badge\&logo=python)
![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge\&logo=mysql)
![Git](https://img.shields.io/badge/Git-orange?style=for-the-badge\&logo=git)
![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge\&logo=github)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge\&logo=render)

---

## ✨ Features

* 📄 Generate **Summaries**
* 🔑 Extract **Key Points**
* 🧪 Create **Quizzes**
* 📚 Get **Explanations** at:

  * Beginner
  * Intermediate
  * Advanced levels
* ⚠️ **Stale Output Detection** (prevents data loss)
* ⏳ Loading indicators for better UX
* 🚨 Error handling (network, timeout, server)
* 📋 Copy-to-clipboard functionality
* 🌐 Fullstack deployment on a single domain

---

## ⚙️ How It Works

1. User inputs notes in the frontend (React)
2. Frontend sends a POST request to Flask backend
3. Backend processes the request using Gemini AI API
4. AI-generated response is returned as JSON
5. Frontend renders the output dynamically

---

## 🧩 Project Structure

```
AI_Study_Assistant/
│
├── Backend/
│   ├── app.py
│   ├── AI_control.py
│   └── requirements.txt
│
├── frontend/
│   ├── dist/
│   ├── src/
│   │   ├── components/
│   │   │   ├── feedback/
│   │   │   │   ├── ErrorToast.jsx
│   │   │   │   └── LoadingMessage.jsx
│   │   │   │   
│   │   │   ├── input/
│   │   │   │   ├── ActionButton.jsx
│   │   │   │   └── Inputbox.jsx
│   │   │   │ 
│   │   │   └── output/
│   │   │       ├── Outputbox.jsx
│   │   │       ├── OutputBoxHeading.jsx
│   │   │       ├── StoragePanel.jsx
│   │   │       └── StorageTab.jsx
│   │   │
│   │   ├── services/
│   │   │   └── aiService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── index.html
│
├── .gitignore
└── README.md
```

---

## 🔌 API Endpoint

### POST `/generate-output`

**Request:**

```json
{
  "text": "your notes",
  "type": "summary | keypoints | quiz | beginner | intermediate | advanced"
}
```

**Response:**

```json
{
  "result": "AI generated output"
}
```

---

## 🚀 Deployment

* Built React frontend using Vite
* Served frontend via Flask backend
* Used **Gunicorn** for production server
* Deployed on **Render**

---

## 🧠 Key Learnings

* Fullstack integration using React & Flask
* Handling API latency and timeouts
* Designing better UX with **stale output approach**
* Debugging deployment issues (paths, imports, build configs)

---

## 🔮 Future Improvements

* 📂 File upload support (TXT/PDF)
* ⚡ Streaming responses (real-time output)
* 💾 Save/export notes
* 🔐 Authentication system

---

## 👨‍💻 Author

**Anupam Chaudhary**

---

## 📄 License

This project is built for learning and portfolio purposes.
