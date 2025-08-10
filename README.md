# 📝 Form Management System (Django + React)

A full-stack form management application built with **Django REST Framework** (backend) and **React.js** (frontend).  
It allows creating, managing, filling, and exporting forms with a clean UI.

---

## 🚀 Features

- **Form Management Dashboard** — View, create, and delete forms.
- **Form Builder** — Add different field types (Text, Number, Multiple Choice, etc.).
- **Form Filling** — Users can fill out and submit responses.
- **Submissions Viewer** — View all submissions for each form.
- **Export to Excel** — Download submissions in `.xlsx` format.
- **REST API** — Django REST Framework backend.

---

## 🛠 Tech Stack

**Backend:**
- Django 5.x
- Django REST Framework (DRF)
- django-cors-headers
- SQLite (default)

**Frontend:**
- React.js (Create React App)
- Axios
- React Router
- Material UI
- XLSX.js

---


## 📂 Project Structure

Form-Management-System/
├── backend/ # Django backend
│ ├── api/ # DRF API endpoints
│ ├── forms/ # Models for forms & submissions
│ ├── manage.py
│ └── backend/ # Django project settings
└── frontend/ # React frontend
├── src/
├── public/
└── package.json



---

## ⚙️ Installation

### 1️⃣ Clone the repository

- git clone https://github.com/your-username/form-management-system.git
- cd form-management-system

---

## 2️⃣ Backend Setup (Django)

- cd backend
- python -m venv .venv
- .venv\Scripts\activate    # Windows PowerShell
- pip install --upgrade pip
- pip install django djangorestframework django-cors-headers
- python manage.py migrate
- python manage.py createsuperuser
- python manage.py runserver

- Backend runs at: http://127.0.0.1:8000/

