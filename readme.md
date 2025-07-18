
# LearningExpress – JWT Authentication Demo

This project demonstrates how to build a secure authentication system in Node.js using Express and JSON Web Tokens (JWT).

## 🚀 Features

- User login with username/password
- JSON Web Token (JWT) generation
- Protected routes using JWT
- Role-based access control (e.g., admin route)
- Simple in-memory user database

## 🛠 Tech Stack

- Node.js
- Express
- JSON Web Token (`jsonwebtoken`)
- Body-parser

## 📂 Project Structure

/LearningExpress
│
├── readme.md
├── app.js (or sessions.js)
├── package.json



## 📥 Installation

```bash

npm install
▶ Running the App
node app.js
# or
node sessions.js
Server runs on: http://localhost:8080

🔑 API Endpoints
Login
POST /login
Request Body:

json

{
  "username": "user1",
  "password": "password1"
}
Returns a JWT token.

Profile (Protected)

GET /profile
Headers:
Authorization: Bearer <your_token>
Admin (Role-Based)

GET /admin
Only accessible if user's role is "admin".

🧠 How It Works
JWT is issued at login and stored on the client side.

On each request to a protected route, the token must be passed in the Authorization header.

Middleware verifies the token before giving access.

🧑 Author
Shanice Naliaka – @shanicenaliakanyongesa

