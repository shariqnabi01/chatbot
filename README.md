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

You can register this via /auth/signup:

json
Copy
Edit
{
  "email": "testuser@example.com",
  "password": "test1234"
}
Once signed up, use /auth/login to get the JWT token.

🔐 Test JWT Token (if you skip login for now)
If you want to skip signup/login temporarily and use a hardcoded token, you can use this sample generated with:

js
Copy
Edit
jwt.sign({ id: 1, email: "testuser@example.com" }, "your_jwt_secret")
Sample JWT (for testing only):

Copy
Edit
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0dXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTY5MDAwMDAwMH0.3kEZNaR5e_kefLUv1ZtB6ka8_Azz9FEpi1RBCuy6svs
🔒 Replace "your_jwt_secret" with your actual JWT_SECRET in .env or Docker env.

🧪 You can create more users:
json
Copy
Edit
{
  "email": "demo@example.com",
  "password": "demo123"
}

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
