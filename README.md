  # Blood Bank Management

## Description
The Blood Bank Management system is a comprehensive application designed to streamline blood donation and inventory management. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform supports multiple user roles including Data Admins, Hospitals, and Organizations, with tailored functionalities for each role.

## Features
- Role-Based Access: Different functionalities and views based on user roles (Data Admin, Hospital, Organization).
- Blood Inventory Management: Manage and track blood donations, transactions, and stock levels.
- Graphical Data Representation: Visualize blood data through graphs and charts.
- Admin Dashboard: Centralized control for managing donors, hospitals, and organizations.
- Secure Authentication: User authentication and authorization using JWT (JSON Web Tokens).

## Technologies Used
- Frontend: React.js, Redux, Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)

## Setup and Installation

### Prerequisites
- Node.js: Make sure Node.js and npm (Node Package Manager) are installed on your system.

### Installation
1. Clone the Repository
   ```bash
   git clone https://github.com/your-username/blood-bank-management.git

 ### Navigate to the Project Directory
bash
Copy code
cd blood-bank-management

### Install Dependencies for Frontend and Backend

### Navigate to the frontend directory and install dependencies:
bash
Copy code
cd frontend
npm install

### Navigate to the backend directory and install dependencies:
bash
Copy code
cd ../backend
npm install
Running the Project

### Start the Backend Server

bash
Copy code
cd backend
npm start
The backend server will run on http://localhost:8080.

### Start the Frontend Server

bash
Copy code
cd ../frontend
npm start
The frontend application will run on http://localhost:3000.

### Usage
Access the application via http://localhost:3000 for the frontend.
Interact with the backend API at http://localhost:8080.
Screenshots


### API Documentation
GET /api/donors - Retrieve a list of all donors.
POST /api/donors - Add a new donor.
GET /api/hospitals - Retrieve a list of all hospitals.
POST /api/hospitals - Add a new hospital.
GET /api/organizations - Retrieve a list of all organizations.
POST /api/organizations - Add a new organization.