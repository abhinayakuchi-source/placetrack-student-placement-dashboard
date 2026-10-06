# PlaceTrack — Student Placement Management Dashboard

<p align="center">

A modern and responsive React-based student placement management dashboard designed to help students discover job opportunities, manage applications, track interviews, maintain their profiles, and stay updated with placement activities.

</p>

---

## 🌐 Live Demo

🚀 **Live Application:**  

[**View PlaceTrack Live Demo**](https://abhinayakuchi-source.github.io/placetrack-student-placement-dashboard/)

---

## 📌 GitHub Repository

🔗 **Source Code:**  
https://github.com/abhinayakuchi-source/placetrack-student-placement-dashboard

---

## 📖 Project Overview

**PlaceTrack** is a modern Student Placement Management Dashboard built using React and Vite.

The application provides students with a centralized platform to manage their campus placement journey. Students can explore job openings, search and filter opportunities, submit applications, track application status, view upcoming interviews, manage their profile and resume, and receive placement-related notifications.

The project focuses on practical implementation of modern React concepts such as:

- React Functional Components
- React Hooks
- React Router
- Context API
- Reusable Components
- Form Validation
- Local Storage
- Responsive UI Design
- Dynamic Application State
- Mock / Local Data
- Notification Management
- Job Search and Filtering
- Application Tracking
- Resume Management

---

# ✨ Features

## 🔐 Authentication

- Student Login page
- Student Registration page
- Form validation
- Email and password fields
- Remember-me interface
- Professional split-screen authentication UI
- Navigation to the student dashboard
- User profile information stored using Context API and Local Storage

---

## 📊 Student Dashboard

The dashboard provides an overview of the student's placement journey.

### Dashboard includes:

- Placement overview
- Welcome section
- Placement readiness percentage
- Available jobs
- Total applications
- Interview count
- Unread notifications
- Placement progress tracker
- Upcoming interviews
- Quick actions
- Navigation to important placement sections

### Quick Actions

Students can quickly access:

- Browse Jobs
- My Applications
- Interviews
- My Profile

---

# 💼 Job Openings

The Job Openings page allows students to explore available placement opportunities.

### Features:

- Job listing cards
- Company information
- Job role
- Location
- Job type
- Experience requirements
- Skills
- Search functionality
- Location filtering
- Job type filtering
- Job details modal
- Apply button
- Application status tracking
- Prevents duplicate applications

### Sample companies included:

- TCS
- Infosys
- Accenture
- Wipro
- Deloitte
- Cognizant

---

# 📝 Application Tracking

The My Applications page allows students to track submitted applications.

### Application information:

- Company
- Position
- Applied date
- Current status

### Supported application statuses:

- Applied
- Under Review
- Interview
- Selected
- Rejected

### Application statistics:

- Total Applications
- Under Review
- Interviews
- Selected

---

# 🎤 Interview Tracking

The Interviews page provides information about upcoming and completed interviews.

### Features:

- Upcoming interview statistics
- Completed interview statistics
- Preparation progress
- Next interview information
- Company details
- Job role
- Interview date
- Interview time
- Interview history
- Interview details modal

---

# 🔔 Notifications

The notification system keeps students updated about important placement activities.

### Notification types:

- Job notifications
- Application notifications
- Interview notifications
- Profile notifications
- System notifications

### Notification features:

- Unread notification count
- Read/unread state
- Mark notification as read
- Mark all notifications as read
- New notifications appear at the top
- Notification timestamps

### Automatic notifications include:

- Application submitted successfully
- Profile updated successfully
- Resume uploaded successfully
- Resume removed
- New job updates
- Interview updates
- Application status updates

---

# 👤 Student Profile

The Profile page allows students to manage their placement information.

### Profile fields:

- Full Name
- Email
- Phone Number
- Department
- Academic Year

### Profile features:

- Update personal information
- Profile completion percentage
- Form validation
- Save profile information
- Local Storage persistence
- Profile update notification

---

# 📄 Resume Management

Students can manage their resume directly from the profile page.

### Features:

- Upload resume
- PDF resume support
- Maximum file size validation
- Resume information display
- Download resume
- Remove resume
- Resume stored locally
- Resume upload notification
- Resume removal notification

---

# 🔔 Notification Flow

The application uses the Context API to centrally manage notifications.

Example workflow:

```text
Student Action
      │
      ▼
React Component
      │
      ▼
AppContext
      │
      ▼
addNotification()
      │
      ▼
Notification State Updated
      │
      ▼
Notifications Page
      │
      ▼
New Notification Displayed
```

For example:

```text
Student updates profile
        ↓
Profile.jsx
        ↓
updateUser()
        ↓
addNotification()
        ↓
"Profile Updated Successfully"
        ↓
Notifications page
```

---

# 🧠 React Concepts Used

## Functional Components

The project is built using reusable React functional components.

Examples:

- Navbar
- Sidebar
- Layout
- StatCard
- StatusBadge
- NotificationCard
- Dashboard
- Jobs
- Applications
- Interviews
- Profile
- Login
- Register

---

## React Hooks

The project uses several React hooks.

### useState

Used for managing component state such as:

- Form data
- Search text
- Filters
- Selected job
- Modal visibility
- Resume information
- Notification state

### useEffect

Used for:

- Loading saved information
- Synchronizing profile data
- Managing local storage data

### useMemo

Used for optimizing filtered job results.

### Custom Hook

The project uses a custom Context hook:

```javascript
useApp()
```

This provides access to shared application state.

---

# 🌐 React Router

React Router is used for navigation between application pages.

### Routes

```text
/                  → Login
/register          → Registration
/dashboard         → Dashboard
/jobs              → Job Openings
/applications      → Applications
/interviews        → Interviews
/notifications     → Notifications
/profile           → Student Profile
```

---

# 🧩 Context API

The application uses React Context API for centralized state management.

The main context file is:

```text
src/context/AppContext.jsx
```

It manages:

- User information
- Applications
- Notifications
- Unread notification count
- Profile updates
- New applications
- Notification actions
- Logout

---

# 💾 Local Storage

Local Storage is used to maintain selected user information even after refreshing the page.

### Stored user data

```text
placetrack_user
```

### Stored resume data

```text
placetrack_resume
```

This allows the application to maintain profile and resume information during the user's browser session.

---

# 🗂️ Project Structure

```text
ReactHandson5/
│
├── public/
│
├── src/
│   │
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
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| Vite | Development and build tool |
| React Router | Application routing |
| JavaScript | Application logic |
| CSS3 | Styling and responsive design |
| Context API | Global state management |
| Local Storage | Client-side persistence |
| JSON / Mock Data | Local application data |
| Git | Version control |
| GitHub | Source code hosting |
| Vercel | Deployment |

---

# 📦 Dependencies

Main dependencies used in the project:

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.18.4"
}
```

Development tools:

```json
{
  "@vitejs/plugin-react": "^5.0.2",
  "vite": "^7.1.7"
}
```

---

# 🚀 Installation

## 1. Clone the repository

```bash
git clone https://github.com/abhinayakuchi-source/placetrack-student-placement-dashboard.git
```

## 2. Move into the project

```bash
cd placetrack-student-placement-dashboard
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173/
```

---

# 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

# 📱 Responsive Design

The application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

Responsive layouts are implemented using CSS media queries.

The dashboard, job cards, application tables, profile sections and quick actions adapt to smaller screen sizes.

---

# 🎨 UI / UX Design

PlaceTrack follows a modern SaaS-style dashboard design.

### Design characteristics:

- Professional navigation sidebar
- Dark navy / indigo navigation
- Clean white workspace
- Soft background colors
- Indigo and purple accents
- Colored statistics cards
- Rounded cards
- Status badges
- Responsive grids
- Clear typography
- Hover effects
- Consistent spacing
- Professional buttons
- Modal-based job and interview details

The design is intended to provide a professional college placement portal experience rather than a basic academic project interface.

---

# 🔄 Application Flow

```text
                    ┌───────────────┐
                    │     Login     │
                    └───────┬───────┘
                            │
                            ▼
                  ┌───────────────────┐
                  │     Dashboard     │
                  └─────────┬─────────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
     Job Openings      Applications      Interviews
          │                 │                 │
          │                 │                 │
          ▼                 ▼                 ▼
       Apply            Track Status       Track Rounds
          │                 │                 │
          └─────────────────┼─────────────────┘
                            │
                            ▼
                     Notifications
                            │
                            ▼
                         Profile
                            │
                            ▼
                    Resume Management
```

---

# 🧪 Testing Checklist

Before deployment, verify:

- [x] Login page opens
- [x] Registration page opens
- [x] Dashboard loads correctly
- [x] Sidebar navigation works
- [x] Job search works
- [x] Job filters work
- [x] Job details modal works
- [x] Job application works
- [x] Duplicate applications are prevented
- [x] Application appears in My Applications
- [x] Application statistics update
- [x] Interviews page works
- [x] Profile page works
- [x] Profile update works
- [x] Profile notification appears
- [x] Resume upload works
- [x] Resume download works
- [x] Resume removal works
- [x] Resume notifications appear
- [x] Notifications page works
- [x] Notifications can be marked as read
- [x] Unread notification count updates
- [x] Logout works
- [x] Responsive layout works
- [x] Production build works

---

# 🔔 Example Notification Messages

### Profile Update

```text
Profile Updated Successfully

Your student profile information has been updated successfully.
```

### Resume Upload

```text
Resume Uploaded Successfully

Your resume has been uploaded and saved to your profile.
```

### Resume Removal

```text
Resume Removed

Your resume has been removed from your profile.
```

### Application

```text
Application Submitted Successfully

Your application has been submitted successfully.
```

---

# 📌 Current Project Scope

This project currently uses local/mock data and browser Local Storage instead of a production backend.

It is designed as a frontend-focused React placement management application.

No external database or backend server is required to run the current version.

---

# 🔮 Future Enhancements

Possible future improvements include:

- Backend REST API
- MongoDB integration
- JWT authentication
- Admin / Placement Officer dashboard
- Real-time notifications
- Email notifications
- Cloud resume storage
- Job recommendation system
- AI-based resume analysis
- Interview preparation assistant
- Placement analytics
- Company-wise statistics
- Student eligibility checking
- Application deadline reminders
- Real-time application status updates

---

# 📈 Learning Outcomes

This project demonstrates practical knowledge of:

- React.js
- Component-based development
- React Router
- Context API
- React Hooks
- State management
- Form handling
- Form validation
- Local Storage
- Responsive CSS
- Reusable components
- UI/UX design
- Job filtering
- Application tracking
- Notification systems
- Git and GitHub
- Vite
- Production deployment

---

# 👩‍💻 Author

## Kuchi Abhinaya

**B.Tech — Artificial Intelligence & Data Science**

Prathyusha Engineering College  
Tamil Nadu, India

### Areas of Interest

- Data Analytics
- Artificial Intelligence
- Machine Learning
- Deep Learning
- Web Development
- React.js
- Data Visualization

### GitHub

https://github.com/abhinayakuchi-source

---

# 📄 License

This project is created for educational, portfolio and academic purposes.

---

## ⭐ Project Highlights

**PlaceTrack** combines React development, modern UI/UX design and placement workflow management into one practical student-focused application.

It demonstrates how a real-world placement portal can organize:

```text
Students
   ↓
Profiles
   ↓
Job Opportunities
   ↓
Applications
   ↓
Interviews
   ↓
Selection
   ↓
Notifications
```

---

<p align="center">

**Built with React + Vite**

**PlaceTrack — Student Placement Management Dashboard**

</p>
