import { useState } from "react";

function Interviews() {
  const [selectedInterview, setSelectedInterview] = useState(null);

  const interviews = [
    {
      id: 1,
      company: "Accenture",
      role: "Data Analyst",
      date: "10 Oct 2026",
      time: "10:30 AM",
      mode: "Online",
      round: "Technical Interview",
      interviewer: "Accenture Hiring Team",
      status: "Upcoming",
      meeting: "Online Meeting",
    },
    {
      id: 2,
      company: "Infosys",
      role: "Systems Engineer",
      date: "14 Oct 2026",
      time: "2:00 PM",
      mode: "Online",
      round: "Technical Round",
      interviewer: "Infosys Recruitment Team",
      status: "Upcoming",
      meeting: "Online Meeting",
    },
    {
      id: 3,
      company: "TCS",
      role: "Graduate Engineer Trainee",
      date: "05 Oct 2026",
      time: "11:00 AM",
      mode: "Online",
      round: "HR Interview",
      interviewer: "TCS Talent Acquisition",
      status: "Completed",
      meeting: "Interview Completed",
    },
  ];

  const upcomingInterviews = interviews.filter(
    (interview) => interview.status === "Upcoming"
  );

  const completedInterviews = interviews.filter(
    (interview) => interview.status === "Completed"
  );

  return (
    <div className="interviews-page">

      {/* Header */}
      <div className="page-title">
        <div>
          <h1>Interviews</h1>
          <p>
            Stay prepared and keep track of your upcoming placement
            interviews.
          </p>
        </div>

        <div className="jobs-count">
          <strong>{upcomingInterviews.length}</strong>
          <span>Upcoming</span>
        </div>
      </div>

      {/* Interview Summary */}
      <div className="stats-grid">

        <div className="stat-card stat-purple">
          <div className="stat-icon">U</div>

          <div className="stat-content">
            <p>Upcoming</p>
            <h2>{upcomingInterviews.length}</h2>
            <span>Interviews scheduled</span>
          </div>
        </div>

        <div className="stat-card stat-blue">
          <div className="stat-icon">C</div>

          <div className="stat-content">
            <p>Completed</p>
            <h2>{completedInterviews.length}</h2>
            <span>Interviews completed</span>
          </div>
        </div>

        <div className="stat-card stat-green">
          <div className="stat-icon">P</div>

          <div className="stat-content">
            <p>Preparation</p>
            <h2>85%</h2>
            <span>Profile readiness</span>
          </div>
        </div>

        <div className="stat-card stat-orange">
          <div className="stat-icon">N</div>

          <div className="stat-content">
            <p>Next Interview</p>
            <h2>10 Oct</h2>
            <span>Accenture</span>
          </div>
        </div>

      </div>

      {/* Upcoming Interviews */}
      <div className="dashboard-card interview-section">

        <div className="section-heading">
          <div>
            <h2>Upcoming Interviews</h2>
            <p>
              Your next placement activities.
            </p>
          </div>
        </div>

        <div className="interview-cards">

          {upcomingInterviews.map((interview) => (

            <div
              className="interview-card"
              key={interview.id}
            >

              <div className="interview-company">

                <div className="company-mini-logo">
                  {interview.company.charAt(0)}
                </div>

                <div>
                  <h3>{interview.company}</h3>
                  <p>{interview.role}</p>
                </div>

              </div>

              <div className="interview-details">

                <div>
                  <span>Date</span>
                  <strong>{interview.date}</strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>{interview.time}</strong>
                </div>

                <div>
                  <span>Mode</span>
                  <strong>{interview.mode}</strong>
                </div>

                <div>
                  <span>Round</span>
                  <strong>{interview.round}</strong>
                </div>

              </div>

              <div className="interview-footer">

                <span className="interview-status">
                  {interview.status}
                </span>

                <button
                  className="primary-btn"
                  onClick={() =>
                    setSelectedInterview(interview)
                  }
                >
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Completed Interviews */}
      <div className="dashboard-card interview-section">

        <div className="section-heading">
          <div>
            <h2>Interview History</h2>
            <p>
              Previously completed interviews.
            </p>
          </div>
        </div>

        <div className="interview-history">

          {completedInterviews.map((interview) => (

            <div
              className="history-row"
              key={interview.id}
            >

              <div className="company-mini-logo">
                {interview.company.charAt(0)}
              </div>

              <div className="history-main">
                <strong>{interview.company}</strong>
                <span>{interview.role}</span>
              </div>

              <div className="history-date">
                {interview.date}
              </div>

              <span className="history-status">
                Completed
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Interview Details Modal */}
      {selectedInterview && (

        <div
          className="job-modal-overlay"
          onClick={() => setSelectedInterview(null)}
        >

          <div
            className="job-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedInterview(null)}
            >
              ×
            </button>

            <div className="company-logo">
              {selectedInterview.company.charAt(0)}
            </div>

            <h2>
              {selectedInterview.company}
            </h2>

            <p className="job-company">
              {selectedInterview.role}
            </p>

            <div className="modal-details">

              <div>
                <span>Date</span>
                <strong>
                  {selectedInterview.date}
                </strong>
              </div>

              <div>
                <span>Time</span>
                <strong>
                  {selectedInterview.time}
                </strong>
              </div>

              <div>
                <span>Mode</span>
                <strong>
                  {selectedInterview.mode}
                </strong>
              </div>

              <div>
                <span>Round</span>
                <strong>
                  {selectedInterview.round}
                </strong>
              </div>

              <div>
                <span>Interviewer</span>
                <strong>
                  {selectedInterview.interviewer}
                </strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {selectedInterview.status}
                </strong>
              </div>

            </div>

            <button
              className="apply-btn"
              style={{ marginTop: "24px" }}
              onClick={() => setSelectedInterview(null)}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Interviews;