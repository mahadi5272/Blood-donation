# 🩸 Blood Donation Management System

A full-stack MERN-based Blood Donation Management System where users can request blood, donors can respond, volunteers can manage requests, and admins can control the system.

---

## 🚀 Live Links
- Client: https://willowy-semolina-f77345.netlify.app/
- Server: https://blood-donation-server-ivory.vercel.app/

---

## 🧩 Features Overview

### 🔐 Authentication
- Email & Password login
- Role-based access control
- Roles:
  - User
  - Volunteer
  - Admin

---

## 👤 User Features
- Create blood donation requests
- View own donation requests
- See request status (pending / inprogress / done)
- Cannot change donation status

---

## 🧑‍⚕️ Volunteer Features
- View all blood donation requests
- Update donation status:
  - pending → inprogress → done
- Cannot delete or edit requests
- Cannot manage users

---

## 🛡️ Admin Features
- View all donation requests
- Update donation status
- Manage users
  - Change role (user / volunteer / admin)
  - Activate / deactivate users
- Dashboard statistics

---

## 🩸 Donation Status Flow


---

## 📄 Pages & Routes

### Public Routes
- `/` → Home
- `/login`
- `/register`
- `/search-donor`

### Private Routes
- `/dashboard`
- `/dashboard/add-request`
- `/dashboard/my-requests`
- `/dashboard/request/:id` (Donation Details Page)

### Role Based Routes
- `/dashboard/all-requests` → Admin & Volunteer
- `/dashboard/users` → Admin only

---

## 📌 Donation Request Details Page (Private 🔒)

### Description
This page displays **all information provided during donation request creation**.

### UI Flow
1. Show request details
2. Show **Donate Button**
3. Clicking button opens a modal
4. Modal contains a form
5. Confirming donation updates status

### Modal Form Fields
- Donor Name (Read Only – logged in user)
- Donor Email (Read Only – logged in user)

### On Confirm
- donationStatus changes from `pending` → `inprogress`
- donorName and donorEmail are saved

---

## 🗃️ Database Collections

### Users Collection
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "avatar": "string",
  "bloodGroup": "string",
  "district": "string",
  "upazila": "string",
  "role": "user | volunteer | admin",
  "status": "Active | Blocked",
  "createdAt": "date"
}
{
  "_id": "ObjectId",
  "requesterName": "string",
  "requesterEmail": "string",
  "recipientName": "string",
  "recipientDistrict": "string",
  "recipientUpazila": "string",
  "hospitalName": "string",
  "fullAddress": "string",
  "bloodGroup": "string",
  "donationDate": "string",
  "donationTime": "string",
  "requestMessage": "string",
  "donationStatus": "pending | inprogress | done",
  "donorName": "string",
  "donorEmail": "string",
  "createdAt": "date"
}
### Technology Stack
Client

React

React Router

Tailwind CSS

Axios

Firebase Authentication

Server

Node.js

Express.js

MongoDB

JWT

CORS

dotenv

🔐 Security

JWT protected routes

Role-based middleware

Private & Admin routes secured
