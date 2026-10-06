# PlaceTrack — Student Placement Management Dashboard

A modern and responsive React-based Student Placement Management Dashboard designed to help students manage their complete placement journey from one centralized platform.

## 🚀 Live Demo

🌐 **Live Website:**  
https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/

## 📂 GitHub Repository

💻 **Source Code:**  
https://github.com/abhinayakuchi-source/placetrack-student-placement-dashboard

---

## 📌 Project Overview

PlaceTrack is a modern Student Placement Management Dashboard developed using React.js.

The application provides students with a centralized platform to explore job opportunities, apply for positions, track application progress, manage interviews, receive placement notifications, update their profiles, and manage their resumes.

The project demonstrates practical implementation of React Router, Context API, React Hooks, reusable components, form validation, Local Storage, responsive UI design, and GitHub Pages deployment.

---

## 🎯 Objectives

- Provide a centralized student placement management platform.
- Simplify job discovery and application tracking.
- Help students monitor recruitment progress.
- Manage upcoming and completed interviews.
- Provide notifications for important placement activities.
- Allow students to maintain their profiles and resumes.
- Demonstrate real-world React application development.
- Build a responsive and user-friendly dashboard.

---

## ✨ Key Features

### 🔐 Authentication

- Student Login
- Student Registration
- Form validation
- User information management
- Logout functionality
- Persistent user information using Local Storage

### 📊 Dashboard

- Personalized welcome section
- Placement overview
- Available jobs statistics
- Application statistics
- Interview statistics
- Unread notification count
- Placement progress indicator
- Upcoming interview information
- Quick action navigation
- Career readiness section

### 💼 Job Openings

- View available job opportunities
- Search job openings
- Filter job listings
- View company information
- View job roles
- View locations
- View employment types
- View required skills
- Apply for jobs
- Application confirmation notification

### 📄 Applications

Students can:

- View submitted applications
- Track application status
- View company name
- View applied position
- View application date
- Monitor recruitment progress

Application statuses include:

- Applied
- Under Review
- Interview
- Selected
- Rejected

### 🎤 Interviews

- View upcoming interviews
- View completed interviews
- Track interview schedules
- View company information
- View role information
- View interview date and time
- View interview preparation information
- View interview details

### 🔔 Notifications

The application provides notifications for important placement activities.

Examples include:

- Application Submitted Successfully
- Profile Updated Successfully
- Resume Uploaded Successfully
- Resume Removed
- Interview Scheduled
- New Job Opening
- Application Under Review

Students can:

- View notifications
- Track unread notifications
- Mark notifications as read

### 👤 Student Profile

Students can:

- View personal information
- Update name
- Update email
- Update phone number
- Update department
- Update academic year
- View profile completion
- Upload resume
- Download resume
- Remove resume

Profile updates generate notification messages to provide immediate feedback.

### 📄 Resume Management

Students can:

- Upload PDF resumes
- Store resume information locally
- Download uploaded resumes
- Remove existing resumes
- Receive resume-related notifications

### 📱 Responsive Design

The application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 🧩 React Concepts Used

### React Components

The application uses reusable functional components such as:

- Navbar
- Sidebar
- Layout
- StatCard
- StatusBadge
- NotificationCard

### React Router

React Router is used for client-side navigation.

Available routes:

- `/`
- `/register`
- `/dashboard`
- `/jobs`
- `/applications`
- `/interviews`
- `/notifications`
- `/profile`

The deployed GitHub Pages version uses `HashRouter` for reliable client-side routing.

### React Hooks

The project uses:

- `useState`
- `useEffect`
- Custom Hooks

### Context API

React Context API is used for centralized application state management.

The application context manages:

- User information
- Applications
- Notifications
- Application actions
- Profile updates
- Logout functionality

### Local Storage

Local Storage is used to persist selected information such as:

- Student profile
- Resume information

### Form Validation

Forms include validation for:

- Required fields
- Email format
- Phone number
- Password
- Confirm password
- Resume file type
- Resume file size

---

## 🏗️ Project Structure

    ReactHandson5/
    │
    ├── public/
    │
    ├── src/
    │   ├── assets/
    │   │
    │   ├── components/
    │   │   ├── Layout.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Sidebar.jsx
    │   │   ├── StatCard.jsx
    │   │   ├── StatusBadge.jsx
    │   │   └── NotificationCard.jsx
    │   │
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Jobs.jsx
    │   │   ├── Applications.jsx
    │   │   ├── Interviews.jsx
    │   │   ├── Notifications.jsx
    │   │   └── Profile.jsx
    │   │
    │   ├── context/
    │   │   └── AppContext.jsx
    │   │
    │   ├── hooks/
    │   │   └── useApplications.js
    │   │
    │   ├── services/
    │   │   └── api.js
    │   │
    │   ├── data/
    │   │   ├── jobs.json
    │   │   ├── applications.json
    │   │   └── notifications.json
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml
    │
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── .gitignore
    └── README.md

---

## 🛠️ Technologies Used

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3

### React Technologies

- React Router
- Context API
- React Hooks
- Functional Components
- Custom Hooks

### Build Tool

- Vite

### Storage

- Browser Local Storage

### Deployment

- GitHub Pages
- GitHub Actions

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm
- Command Prompt
- Git Bash

---

## 📦 Main Dependencies

- React `19.1.1`
- React DOM `19.1.1`
- React Router DOM `7.18.4`
- Vite
- Vite React Plugin

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

    git clone https://github.com/abhinayakuchi-source/placetrack-student-placement-dashboard.git

### 2. Navigate to the Project

    cd placetrack-student-placement-dashboard

### 3. Install Dependencies

    npm install

### 4. Start the Development Server

    npm run dev

The application will normally be available at:

    http://localhost:5173/

---

## 🏭 Production Build

Create an optimized production build:

    npm run build

The production files are generated inside:

    dist/

Preview the production build:

    npm run preview

---

## 🌐 GitHub Pages Deployment

PlaceTrack is deployed using GitHub Pages with GitHub Actions.

The deployment workflow is located at:

    .github/workflows/deploy.yml

The workflow automatically builds and deploys the application when changes are pushed to the `main` branch.

It can also be manually triggered through GitHub Actions.

### Deployment Flow

    Developer
        ↓
    Git Push
        ↓
    GitHub Repository
        ↓
    GitHub Actions
        ↓
    Install Dependencies
        ↓
    Build React Application
        ↓
    Generate dist/
        ↓
    Upload Production Artifact
        ↓
    GitHub Pages
        ↓
    Live Website

---

## 🔗 Deployment URL

https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/

Because the application uses `HashRouter`, deployed routes use the following format:

    https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/#/
    https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/#/dashboard
    https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/#/jobs
    https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/#/applications
    https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/#/interviews
    https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/#/notifications
    https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/#/profile

---

## 🔄 Application Flow

    Login
      ↓
    Dashboard
      ↓
    ┌─────────────────┬─────────────────┬─────────────────┐
    │                 │                 │                 │
    ▼                 ▼                 ▼                 │
    Job Openings   Applications     Interviews           │
    │                 │                 │                 │
    └─────────────────┴─────────────────┘                 │
                      │                                   │
                      ▼                                   │
                Notifications                             │
                      │                                   │
                      ▼                                   │
                   Profile                                │
                      │                                   │
                      ▼                                   │
              Resume Management                           │

---

## 📊 Placement Journey

    Profile
       ↓
    Job Discovery
       ↓
    Application
       ↓
    Application Review
       ↓
    Interview
       ↓
    Selection

---

## 🔔 Notification Flow

    Student Action
          ↓
    Application / Profile / Resume Update
          ↓
    AppContext
          ↓
    addNotification()
          ↓
    Notification State
          ↓
    Notifications Page
          ↓
    Unread Notification Count

---

## 🎨 UI/UX Design

The application follows a modern SaaS-style dashboard design.

### Design Characteristics

- Professional dashboard layout
- Dark navy sidebar
- Clean white workspace
- Indigo and purple accent colors
- Soft background colors
- Responsive cards
- Status badges
- Progress indicators
- Consistent typography
- Rounded UI components
- Subtle hover animations
- Mobile-friendly layouts
- Clear navigation

The design focuses on usability, readability, and a professional student placement experience.

---

## 📱 Responsive Design

The application adapts to:

- Desktop
- Laptop
- Tablet
- Mobile

The dashboard, job cards, application tables, profile sections, navigation, and other UI components are designed to remain usable across different screen sizes.

---

## 🧪 Testing Checklist

- [x] Login page works
- [x] Registration works
- [x] Dashboard works
- [x] Job listings are displayed
- [x] Job search/filter functionality
- [x] Job application functionality
- [x] Application status tracking
- [x] Interviews page
- [x] Notifications page
- [x] Mark notification as read
- [x] Profile update functionality
- [x] Profile update notification
- [x] Resume upload
- [x] Resume download
- [x] Resume removal
- [x] Resume notifications
- [x] Responsive design
- [x] Production build
- [x] GitHub Pages deployment
- [x] GitHub Actions deployment

---

## 🔒 Current Data Handling

This version primarily uses local/mock data and browser Local Storage.

Therefore:

- No production backend is required.
- Student profile information is stored locally.
- Resume information is handled locally.
- Application state is managed through React Context.
- Notification state is managed through React Context.
- The project is suitable as a frontend React portfolio project.

For a production system, a secure backend, database, authentication system, and cloud storage would be integrated.

---

## 🚀 Future Enhancements

Possible future improvements include:

- Backend API integration
- MongoDB database
- JWT authentication
- Admin placement dashboard
- Recruiter dashboard
- Real-time notifications
- Email notifications
- AI-based job recommendations
- Resume analysis
- Interview preparation assistant
- Placement analytics
- Company-wise statistics
- Application deadline reminders
- Cloud resume storage
- Advanced data visualization
- Role-based authentication

---

## 📚 Learning Outcomes

This project demonstrates practical knowledge of:

- React.js
- Component-based architecture
- Functional components
- React Hooks
- Custom Hooks
- React Router
- Context API
- State management
- Form validation
- Local Storage
- Responsive CSS
- Reusable UI components
- Client-side routing
- Git and GitHub
- GitHub Actions
- GitHub Pages
- Vite
- Production deployment
- Project organization
- Technical documentation

---

## 💡 Why PlaceTrack?

Student placement activities usually involve multiple processes such as:

- Finding job opportunities
- Applying for jobs
- Tracking application status
- Preparing for interviews
- Managing resumes
- Receiving placement updates

PlaceTrack brings these activities together into one centralized platform, making it easier for students to organize and monitor their placement journey.

---

## 👩‍💻 Developer

**KUCHI ABHINAYA**

**B.Tech — Artificial Intelligence & Data Science**

**Prathyusha Engineering College**  
Thiruvallur, Tamil Nadu, India

### Areas of Interest

- Data Analytics
- Artificial Intelligence
- Machine Learning
- Web Development
- React Development
- Data Visualization

### GitHub

https://github.com/abhinayakuchi-source

---

## 📌 Project Information

| Category | Details |
|---|---|
| Project Name | PlaceTrack |
| Project Type | Student Placement Management Dashboard |
| Frontend | React.js |
| Programming Language | JavaScript |
| Build Tool | Vite |
| Routing | React Router |
| State Management | Context API |
| Styling | CSS3 |
| Storage | Local Storage |
| Deployment | GitHub Pages |
| CI/CD | GitHub Actions |
| Responsive | Yes |
| Status | Completed |

---

## 🏷️ Recommended GitHub Topics

react, reactjs, javascript, react-router, context-api, react-hooks, vite, html, css, responsive-design, form-validation, local-storage, github-pages, github-actions, student-placement, placement-management, student-dashboard, job-portal, career-dashboard

---

## 📄 License

This project is developed for educational, portfolio, and demonstration purposes.

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 🔗 Quick Links

**Live Demo:**  
https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/

**GitHub Repository:**  
https://github.com/abhinayakuchi-source/placetrack-student-placement-dashboard

---

# PlaceTrack

### Track Opportunities. Manage Applications. Prepare for Success.
