# 🧠 AI Study Assistant

An AI-powered fullstack web application that converts raw study notes into structured learning material such as summaries, key points, quizzes, and multi-level explanations.

---

## 🚀 Live Demo

🔗 https://ai-study-assistant-ytsb.onrender.com

## 💻 GitHub Repository

🔗 https://github.com/anupam311/AI_Study_Assistant

---

## 🛠️ Tech Stack

### 🎨 Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-264DE4?style=for-the-badge&logo=css3&logoColor=white)


### ⚙️ Backend
![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-Framework-000000?style=for-the-badge&logo=flask&logoColor=white)


### 🤖 AI Providers
![Google Gemini](https://img.shields.io/badge/Gemini-AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-LLaMA%20Models-F55036?style=for-the-badge)


### 🧰 Tools & Utilities
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-Editor-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge\&logo=render)

---

## 🚀 Key Features

- 🧠 **AI-Powered Study Assistant**
  - Generate summaries, key points, quizzes, and explanations from notes

- 🔁 **Multi-Provider AI Architecture**
  - Primary: Gemini
  - Fallback: Groq (LLaMA-based models)

- ⚡ **Automatic Fallback System**
  - If the primary AI fails (rate limit/server error), the system switches to a backup provider seamlessly

- ⏱️ **Smart Timeout Handling**
  - Dynamic request timeout based on input size
  - Prevents hanging requests

- 🧾 **Structured Output Formatting**
  - Clean, readable responses with headings and bullet points

- 🎯 **Multiple Explanation Levels**
  - Beginner, Intermediate, Advanced

- ⚠️ **Robust Error Handling**
  - Handles rate limits, server errors, network issues, and timeouts gracefully

- 🧩 **Component-Based React UI**
  - Modular, scalable frontend architecture

---

## 🏗️ System Architecture

Frontend → Flask API → AI Controller → AI Providers

---

## ⚙️ How It Works

1. User inputs notes in the frontend (React)
2. Frontend sends a POST request to Flask backend
3. Flask API processes the request
4. AI Controller builds the prompt
5. System tries:
   - Primary provider (Gemini)
   - If failed → automatically switches to Groq
6. Response is returned to frontend
7. Frontend renders the output dynamically

---

## 🔁 Fallback Mechanism

To ensure reliability and reduce downtime, the system implements an automatic fallback strategy:

- First attempts response generation using Gemini
- On failure (rate limits, API errors, or downtime):
  - Automatically switches to Groq (LLaMA-based models)
- User experience remains uninterrupted

This improves:
- Reliability
- Availability
- User experience under load

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

**Normal Response:**

```json
{
  "result": "AI generated output",
  "provider": "gemini",
  "fallback_used": false
}
```

**Fallback Response:**

```json
{
  "result": "AI generated output",
  "provider": "groq",
  "fallback_used": true
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
* 🤖 Model selection based on task
* 🔐 Authentication system

---

## 👨‍💻 Author

**Anupam Chaudhary**

---

## 📄 License

This project is built for learning and portfolio purposes.
