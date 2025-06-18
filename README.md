# 🧠 Real-Time Chat Bot

A simple real-time chat application using **Node.js**, **Express**, **Socket.IO**, and **PostgreSQL**, with user authentication using JWT.

---

## 🚀 Features

- User signup and login with hashed passwords
- JWT-based authentication
- Real-time chat using Socket.IO
- Messages stored in PostgreSQL
- Frontend using plain HTML + JS

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: HTML, Vanilla JavaScript
- **WebSockets**: Socket.IO
- **Database**: PostgreSQL
- **Authentication**: JWT, bcrypt

---

## 📂 Project Structure

real-time-chat-bot/
├── config/
│ └── db.js
├── controllers/
│ └── authController.js
├── routes/
│ ├── authRoutes.js
│ └── messageRoutes.js
├── socket/
│ └── index.js
├── public/
│ └── index.html
├── server.js
├── .env
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/real-time-chat-bot.git
cd real-time-chat-bot
2. Install Dependencies
bash
Copy
Edit
npm install
