# 🐾 WarmPaws — Pet Care & Services Platform

## 🌐 Live Demo

🔗 [...](#)

---

## 📖 Overview

**WarmPaws** is a modern pet care and services web application where users can explore various **pet-related services** such as grooming, veterinary care, and paw care.

The app is built using **React**, **TailwindCSS**, and **DaisyUI**, with features like **Firebase Authentication**, **Theme Toggle**, and **Toast Notifications** for a smooth user experience.

---

## 🚀 Features

✅ **Responsive Navbar** — Dynamic links, theme toggle, and user profile tooltip  
✅ **User Authentication** — Login, Register, and Logout system using Firebase  
✅ **Dynamic Services** — View details of each service dynamically  
✅ **Booking System** — “Book Now” button with toast notifications  
✅ **LocalStorage Support** — Stores service data locally for faster access  
✅ **Light/Dark Theme Toggle** — Customizable user experience  
✅ **Loading States** — Smooth loading experience  
✅ **Clean UI** — Modern design built with DaisyUI and TailwindCSS

---

## 🛠️ Tech Stack

| Category           | Technologies                              |
| ------------------ | ----------------------------------------- |
| **Frontend**       | React, React Router, DaisyUI, TailwindCSS |
| **Authentication** | Firebase Authentication                   |
| **Icons**          | Lucide React, React Icons                 |
| **Notifications**  | react-hot-toast                           |
| **Styling**        | TailwindCSS + DaisyUI Themes              |

---

## ⚙️ Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/warmpaws.git

# 2️⃣ Go into the project directory
cd warmpaws

# 3️⃣ Install dependencies
npm install

# 4️⃣ Create a .env file in the root directory and add your Firebase configuration
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id

# 5️⃣ Start the development server
npm run dev
```

---

## 📁 Folder Structure

```
src/
├── assets/                 # Images, icons, and banners
├── Components/             # Reusable UI components (Navbar, Footer, Cards)
├── Pages/                  # Page-level components (Home, Services, Profile, etc.)
├── Providers/              # Context providers (AuthContext, ThemeContext)
├── CustomHooks/            # Reusable hooks (useService, useNews, etc.)
├── Layouts/                # Layouts for app and auth routes
├── main.jsx                # App entry point
└── App.jsx                 # Main route configuration
```

---

## 🔐 Authentication

- Email/Password-based Sign Up and Login
- Secure Logout system with toast feedback
- User profile picture with hover tooltip for displaying name
- Protected routes accessible only to logged-in users

---

## 💅 Styling

- Fully responsive using **TailwindCSS Flex and Grid**
- **DaisyUI** components for modern, clean design
- Gradient backgrounds and custom color themes
- Light/Dark theme toggle implemented across all pages

---

## ⚡ Additional Functionalities

- Dynamic routing with `react-router`
- Service details displayed using `location.state` or `localStorage`
- Toast notifications for login/logout and booking events
- Smooth loader animation while fetching data

---

## 🧠 Future Improvements

- Add backend API for real-time service data
- Integrate online payment gateway for bookings
- Implement review and rating system
- Add search, filters, and pagination for better UX

---
