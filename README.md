# React CRUD Dashboard

A lightweight React app with Redux Toolkit for managing users via JSONPlaceholder API.

## Overview

Complete CRUD application with:
- API data fetching with async thunks
- User management (Create, Read, Update, Delete)
- Form validation
- Loading & error states
- Responsive design

## Features

- **Redux Toolkit** state management
- **Async operations** with createAsyncThunk
- **Form validation** with error feedback
- **Dashboard table** with edit/delete actions
- **Mobile-friendly** responsive layout
- **Loading indicators** and error alerts

---

## Tech Stack

- React 18
- Redux Toolkit
- Axios
- CSS3
- JSONPlaceholder API

---

## Project Structure

```
src/
├── app/store.js                 # Redux store
├── features/users/usersSlice.js # Redux state & actions
├── components/
│   ├── UserForm.js/css          # Add/Edit user form
│   └── UserTable.js/css         # Users display
├── services/userApi.js          # API calls
└── App.js                       # Main component
```

## Setup & Run

```bash
npm install
npm start
```

Open `http://localhost:3000`

## CRUD Operations

- **Create:** Form adds new user to Redux state
- **Read:** Table displays API-fetched users  
- **Update:** Edit button loads form with user data
- **Delete:** Delete button removes user with confirmation
