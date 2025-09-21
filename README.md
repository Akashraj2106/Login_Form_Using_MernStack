MERN Authentication App

This is a full-stack authentication system built with the MERN stack (MongoDB, Express.js, React, Node.js).
It includes user registration, login, password hashing, and JWT-based authentication.

✨ Features

🔒 User registration with password hashing (bcryptjs)

🔑 User login with JWT authentication

⚡ Secure backend API with Express & MongoDB

🎨 Frontend built with React + Vite

🔁 Full MERN stack integration

📂 Separate frontend/ and server/ folders

🛠 Tech Stack
Backend (Server)

Express.js – Server framework

MongoDB + Mongoose – Database

bcryptjs – Password hashing

jsonwebtoken – JWT authentication

dotenv – Environment variables

nodemon – Development auto-restart

Frontend (Client)

React (Vite) – UI framework

react-router-dom – Routing

axios – API calls

📂 Project Structure
mern-auth/
│── server/       # Backend
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── server.js
│   └── .env
│
│── frontend/     # Frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   └── main.jsx
│   └── vite.config.js

🚀 Getting Started
📌 Prerequisites

Node.js installed

MongoDB instance (local or Atlas)

🔧 Installation
1️⃣ Clone repo
git clone https://github.com/yourusername/mern-auth.git
cd mern-auth

2️⃣ Backend setup
cd server
npm install


Create .env file inside server/:

MONGO_URI="mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority"
JWT_SECRET="your_secret_key"
PORT=5000


Run backend:

npm run dev

3️⃣ Frontend setup
cd ../frontend
npm install
npm run dev

🌍 API Endpoints
Register User

POST /api/auth/register

{
  "name": "John Doe",
  "Email": "john@example.com",
  "Password": "mypassword"
}

Login User

POST /api/auth/login

{
  "Email": "john@example.com",
  "Password": "mypassword"
}


Response:

{
  "message": "Login successful",
  "token": "jwt_token_here"
}

🖼️ Screens

Register Page

Login Page

🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss.
