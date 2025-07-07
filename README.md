# 🏨 Hotel Booking MERN App

This is a full-stack Hotel Booking web application built using the **MERN** stack (**MongoDB**, **Express**, **React**, **Node.js**). It supports user authentication, hotel listings, filtering, and hotel management (add/edit).

🔗 **Live Project (Deployed Link):**  
[LIVE LINK](https://ethnus-mern-course.vercel.app/)

---

## 🚀 Features

- ✅ User registration and login (with JWT)
- ✅ Add hotels (only after login)
- ✅ View all hotel listings
- ✅ Search/filter hotels by city and price range
- ✅ Edit hotel details
- ✅ RESTful API with protected routes

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- React Router
- Axios
- Tailwind CSS (optional or replace with basic CSS)

### Backend:
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JSON Web Token (JWT)
- Bcrypt.js

---

## 📁 Folder Structure
EthnusMERNCourse/
├── client/ # React frontend
│ ├── src/
│ │ ├── pages/ # Home, Login, Register, AddHotel, EditHotel, Intro
│ │ └── App.js
│ └── public/
├── server/ # Node.js + Express backend
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes (auth, hotels, edit)
│ ├── server.js # Entry point for backend
└── README.md # This file

