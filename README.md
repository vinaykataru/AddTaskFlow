# Mini SaaS Task Management App

This is a basic full-stack task management application built as part of an assessment.
The application allows users to register, log in, and manage their own tasks.

---

## What I Implemented

* User Signup and Login
* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes
* Create tasks
* View only logged-in user's tasks
* Delete tasks
* Backend API using Node.js and Express
* Database using PostgreSQL with Sequelize
* Frontend using React (Create React App)
* API integration between frontend and backend

---

## Tech Stack

Backend:

* Node.js
* Express.js
* PostgreSQL
* Sequelize
* bcrypt
* jsonwebtoken

Frontend:

* React
* Axios

---

## Project Structure

```
mini-saas-task-app/
├── backend/
├── frontend/
```

---

## How to Run

### Backend

```
cd backend
npm install
npx nodemon server.js
```

Create a `.env` file:

```
PORT=5000
JWT_SECRET=your_secret_key
DB_URI=postgres://postgres:yourpassword@localhost:5432/tasksdb
```

---

### Frontend

```
cd frontend
npm install
npm start
```

---

## API Endpoints

Auth:

* POST /api/auth/signup
* POST /api/auth/login

Tasks:

* GET /api/tasks
* POST /api/tasks
* DELETE /api/tasks/:id

---

## Current Status

The core functionality is working:

* Authentication is implemented
* Users can manage their own tasks
* Backend and frontend are connected

---

## Limitations / Not Completed

* Task update (mark as completed) not implemented
* UI is basic (no advanced styling)
* No validation or error handling improvements
* No deployment done yet

---

## Conclusion

This project demonstrates my understanding of building a full-stack application with authentication, API development, and database integration.
