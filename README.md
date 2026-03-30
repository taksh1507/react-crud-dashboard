# React CRUD Dashboard

> Lightweight React dashboard for managing users with full CRUD operations, Redux Toolkit state management, and real-time API integration.

![Status](https://img.shields.io/badge/status-complete-green)
![Type](https://img.shields.io/badge/type-frontend%20project-blue)
![Tech](https://img.shields.io/badge/tech-React%20%7C%20Redux%20Toolkit%20%7C%20Axios-blueviolet)

---

## Overview

A simple and efficient CRUD dashboard that allows users to manage data with real-time updates and clean state management.

- Fetch data from API using async thunks  
- Perform Create, Read, Update, Delete operations  
- Manage global state with Redux Toolkit  
- Handle loading and error states  
- Responsive UI for all devices  

---

## Features

- **CRUD Operations** (Create, Read, Update, Delete)
- **Redux Toolkit State Management**
- **Async API Handling** using `createAsyncThunk`
- **Form Validation** with user feedback
- **Responsive Dashboard UI**
- **Loading Indicators & Error Handling**

---

## CRUD Functionality

- **Create**: Add new users via form  
- **Read**: Display users in table  
- **Update**: Edit user details  
- **Delete**: Remove users with confirmation  

---

## Tech Stack

- **Frontend**: React 18  
- **State Management**: Redux Toolkit  
- **API Handling**: Axios  
- **Styling**: CSS3  
- **API Source**: JSONPlaceholder  

---

## Project Structure


src/
├── app/
│ └── store.js
├── features/
│ └── users/
│ └── usersSlice.js
├── components/
│ ├── UserForm.js
│ ├── UserForm.css
│ ├── UserTable.js
│ └── UserTable.css
├── services/
│ └── userApi.js
└── App.js


---

## Setup & Run

1. Install dependencies
```bash
npm install
Start the application
npm start
Open in browser
http://localhost:3000

---


##Highlights
Clean and scalable folder structure
Efficient state management using Redux Toolkit
Optimized API handling with async logic
Beginner-friendly yet production-ready architecture

Status: Complete


---
