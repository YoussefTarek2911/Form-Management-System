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
```bash
git clone https://github.com/your-username/form-management-system.git
cd form-management-system

---

2️⃣ Backend Setup (Django)
bash
Copy
Edit
cd backend
python -m venv .venv
.venv\Scripts\activate    # Windows PowerShell
pip install --upgrade pip
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
Backend runs at: http://127.0.0.1:8000/

---

3️⃣ Frontend Setup (React)
bash
Copy
Edit
cd ../frontend
npm install
npm start
Frontend runs at: http://localhost:3000/

---
📡 API Endpoints
Method	Endpoint	Description
GET	/api/forms/	List all forms
POST	/api/forms/	Create new form
GET	/api/forms/<id>/	Retrieve specific form
POST	/api/forms/<id>/submit/	Submit form response
GET	/api/forms/<id>/submissions/	List submissions for a form

✅ Testing the System
Backend check

python manage.py runserver → No errors.

Visit http://127.0.0.1:8000/api/forms/ → should return [] or existing forms.

Frontend check

npm start in frontend/.

Open http://localhost:3000/ → dashboard visible.

End-to-End test

Create form → Fill form → View submissions → Export to Excel.



