import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import { useApp } from "../context/AppContext";

function Dashboard() {
  const {
    user,
    applications,
    unreadNotifications,
  } = useApp();

  const studentName = user?.name || "Student";

  const interviewCount = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  const selectedCount = applications.filter(
    (application) => application.status === "Selected"
  ).length;

  return (
    <div className="dashboard-page">

      {/* PAGE HEADER */}
      <div className="page-title">
        <div>
          <span className="page-eyebrow">
            PLACEMENT OVERVIEW
          </span>

          <h1>
            Welcome back, {studentName}
          </h1>

          <p>
            Track your placement journey, applications and
            upcoming opportunities.
          </p>
        </div>

        <Link to="/jobs" className="primary-btn">
          Explore Jobs →
        </Link>
      </div>

      {/* WELCOME CARD */}
      <div className="dashboard-hero-card">

        <div className="hero-card-content">
          <span className="hero-card-label">
            YOUR CAREER JOURNEY
          </span>

          <h2>
            Stay focused. Stay prepared. Get placed.
          </h2>

          <p>
            Keep your profile updated, explore new opportunities
            and stay on top of every placement activity.
          </p>

          <div className="hero-card-actions">
            <Link
              to="/jobs"
              className="hero-primary-btn"
            >
              Find Opportunities
            </Link>

            <Link
              to="/profile"
              className="hero-secondary-btn"
            >
              Complete Profile
            </Link>
          </div>
        </div>

        <div className="hero-stat-panel">
          <span>Placement readiness</span>

          <strong>85%</strong>

          <div className="hero-progress">
            <span style={{ width: "85%" }}></span>
          </div>

          <small>
            You're making strong progress
          </small>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="stats-grid">

        <StatCard
          icon="J"
          title="Available Jobs"
          value="48"
          subtitle="8 new opportunities"
          color="purple"
        />

        <StatCard
          icon="A"
          title="Applications"
          value={applications.length}
          subtitle="Active applications"
          color="blue"
        />

        <StatCard
          icon="I"
          title="Interviews"
          value={interviewCount + 2}
          subtitle="2 upcoming"
          color="green"
        />

        <StatCard
          icon="N"
          title="Notifications"
          value={unreadNotifications}
          subtitle="Unread updates"
          color="orange"
        />

      </div>

      {/* MAIN DASHBOARD GRID */}
      <div className="dashboard-content-grid">

        {/* PLACEMENT PROGRESS */}
        <div className="dashboard-card">

          <div className="section-heading">

            <div>
              <h2>Placement Progress</h2>

              <p>
                Your current recruitment journey.
              </p>
            </div>

            <span className="progress-percent">
              58%
            </span>

          </div>

          <div className="placement-progress-track">
            <span style={{ width: "58%" }}></span>
          </div>

          <div className="placement-steps">

            <div className="placement-step completed">
              <div className="step-number">1</div>

              <div>
                <strong>Profile</strong>
                <span>Completed</span>
              </div>
            </div>

            <div className="placement-step completed">
              <div className="step-number">2</div>

              <div>
                <strong>Applications</strong>
                <span>{applications.length} applied</span>
              </div>
            </div>

            <div className="placement-step active">
              <div className="step-number">3</div>

              <div>
                <strong>Interviews</strong>
                <span>
                  {interviewCount + 2} interviews
                </span>
              </div>
            </div>

            <div className="placement-step">
              <div className="step-number">4</div>

              <div>
                <strong>Selection</strong>
                <span>
                  {selectedCount} selected
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* UPCOMING INTERVIEWS */}
        <div className="dashboard-card">

          <div className="section-heading">

            <div>
              <h2>Upcoming Interviews</h2>

              <p>
                Stay prepared for your next rounds.
              </p>
            </div>

            <Link
              to="/interviews"
              className="section-link"
            >
              View all
            </Link>

          </div>

          <div className="dashboard-interview-list">

            <div className="dashboard-interview-item">

              <div className="company-mini-logo">
                A
              </div>

              <div className="interview-info">
                <strong>Accenture</strong>
                <span>Data Analyst</span>
                <small>10 Oct 2026 · 10:00 AM</small>
              </div>

              <span className="status-badge status-interview">
                Upcoming
              </span>

            </div>

            <div className="dashboard-interview-item">

              <div className="company-mini-logo">
                I
              </div>

              <div className="interview-info">
                <strong>Infosys</strong>
                <span>Systems Engineer</span>
                <small>14 Oct 2026 · 02:00 PM</small>
              </div>

              <span className="status-badge status-interview">
                Upcoming
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* QUICK ACTIONS */}
      <div className="dashboard-card quick-actions-card">

        <div className="section-heading">

          <div>
            <h2>Quick Actions</h2>

            <p>
              Manage your placement activities quickly.
            </p>
          </div>

        </div>

        <div className="quick-actions-grid">

          <Link
            to="/jobs"
            className="quick-action"
          >
            <div className="quick-action-icon purple">
              J
            </div>

            <div>
              <strong>Browse Jobs</strong>
              <span>
                Explore latest opportunities
              </span>
            </div>
          </Link>

          <Link
            to="/applications"
            className="quick-action"
          >
            <div className="quick-action-icon blue">
              A
            </div>

            <div>
              <strong>My Applications</strong>
              <span>
                Track application status
              </span>
            </div>
          </Link>

          <Link
            to="/interviews"
            className="quick-action"
          >
            <div className="quick-action-icon green">
              I
            </div>

            <div>
              <strong>Interviews</strong>
              <span>
                Prepare for upcoming rounds
              </span>
            </div>
          </Link>

          <Link
            to="/profile"
            className="quick-action"
          >
            <div className="quick-action-icon orange">
              P
            </div>

            <div>
              <strong>My Profile</strong>
              <span>
                Update your information
              </span>
            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;