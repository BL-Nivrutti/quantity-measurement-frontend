# Quantity Measurement Frontend

A responsive web application for performing quantity measurement operations such as unit conversion, comparison, arithmetic operations, and user-specific history tracking.

This frontend interacts with the Quantity Measurement Backend through REST APIs and provides an intuitive user experience for measurement calculations across different quantity categories.

---

## Project Overview

The Quantity Measurement System enables users to:

* Convert measurements between supported units
* Compare equivalent quantities
* Perform arithmetic operations on quantities
* View operation history associated with authenticated users
* Interact with backend services through RESTful APIs

This project is being developed incrementally following use-case-driven implementation.

---

## Features

### Implemented

* Project structure setup
* GitHub repository integration
* GitHub Actions CI workflow
* Static frontend hosting through Live Server
* Backend API integration configuration

### In Progress

* Unit Conversion UI
* Quantity Comparison UI
* Addition & Subtraction Operations
* AJAX-based API communication
* Responsive Dashboard Design

### Planned

* React-based Frontend (UC20)
* Authentication Integration
* Session Management
* Microservices Integration (UC21)
* CI/CD & Cloud Deployment (UC22)

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API (AJAX)

### Version Control

* Git
* GitHub

### CI/CD

* GitHub Actions

### Backend Integration

* Spring Boot
* REST APIs
* OAuth2 Authentication
* MySQL Database

---

## Project Structure

```text
quantity-measurement-frontend

├── .github
│   └── workflows
│       └── frontend-ci.yml
│
├── assets
│
├── css
│   └── style.css
│
├── js
│   ├── api.js
│   └── app.js
│
├── index.html
│
└── .gitignore
```

---

## Prerequisites

Before running the frontend application, ensure the following are available:

* Git
* Visual Studio Code
* Live Server Extension
* Quantity Measurement Backend Application Running

---

## Backend Configuration

Default backend endpoint:

```text
http://localhost:8080
```

API base URL configuration:

```javascript
const BASE_URL =
    "http://localhost:8080/api/measurements";
```

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/BL-Nivrutti/quantity-measurement-frontend.git
```

### Navigate to Project

```bash
cd quantity-measurement-frontend
```

### Open in VS Code

```bash
code .
```

### Run Application

1. Open `index.html`
2. Right-click
3. Select **Open With Live Server**

Application launches at:

```text
http://127.0.0.1:5500
```

---

## Development Workflow

### Create Feature Branch

```bash
git checkout -b feature/feature-name
```

### Commit Changes

```bash
git add .
git commit -m "Meaningful commit message"
```

### Push Changes

```bash
git push origin feature/feature-name
```

---

## Continuous Integration

This repository includes a GitHub Actions workflow that automatically validates changes pushed to the `main` branch.

Workflow Location:

```text
.github/workflows/frontend-ci.yml
```

---

## Roadmap

### UC19

* HTML/CSS/JavaScript Frontend
* AJAX Integration
* Responsive UI

### UC20

* React Frontend
* Component-Based Architecture
* State Management
* Authentication Integration

### UC21

* Microservices Architecture
* API Gateway
* Service Communication

### UC22

* Docker Containerization
* Jenkins CI/CD Pipeline
* AWS Deployment

---

## Author

**Nivrutti Wagh**

Java Backend Developer

Focused on building scalable backend systems using Java, Spring Boot, Microservices, REST APIs, Security, and Cloud-Native development practices.

---

## License

This project is intended for educational and learning purposes.
