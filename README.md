Login Form using MERN Stack
This is a full-stack login and registration application built using the MERN stack (MongoDB, Express.js, React, and Node.js).

Features
User registration with password hashing.

User login with JSON Web Tokens (JWT) for authentication.

Separate frontend and backend applications.

Tech Stack
Backend (Server)
Framework: Express.js

Database: MongoDB via Mongoose

Authentication: bcryptjs for password hashing and jsonwebtoken for creating secure tokens.

Environment Variables: dotenv

Development: nodemon for automatic server restarts.

Frontend
Framework: React

Build Tool: Vite

Routing: react-router-dom

API Calls: axios

Project Structure
The project is divided into two main folders: frontend and server.

server/: Contains the backend logic.

frontend/: Contains the React application.

Getting Started
Prerequisites
Node.js installed on your machine.

MongoDB instance running (local or cloud-based).

Installation
Clone the repository:

Bash

git clone <repository-url>
cd <repository-name>
Navigate to the server directory and install dependencies:

Bash

cd server
npm install
Create a .env file in the server directory with your MongoDB URI and a JWT secret.

Code snippet

# .env file inside server/
MONGO_URI="mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database>?retryWrites=true&w=majority"
JWT_SECRET="your_secret_key"
Run the backend server in development mode:

Bash

npm run dev
In a new terminal, navigate to the frontend directory and install dependencies:

Bash

cd ../frontend
npm install
Run the frontend application in development mode:

Bash

npm run dev
The application will be accessible at http://localhost:5173.
