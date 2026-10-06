import { Link } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import { useApp } from "../context/AppContext";

function Applications() {
  const { applications } = useApp();

  const totalApplications = applications.length;

  const underReview = applications.filter(
    (application) => application.status === "Under Review"
  ).length;

  const interviews = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  const selected = applications.filter(
    (application) => application.status === "Selected"
  ).length;

  return (
    <div className="applications-page">

      {/* Header */}
      <div className="page-title">
        <div>
          <h1>My Applications</h1>
          <p>
            Track and manage all your placement applications.
          </p>
        </div>

        <Link
          to="/jobs"
          className="primary-btn"
        >
          Browse Jobs
        </Link>
      </div>

      {/* Application Statistics */}
      <div className="stats-grid">

        <div className="stat-card stat-purple">
          <div className="stat-icon">A</div>

          <div className="stat-content">
            <p>Total Applications</p>
            <h2>{totalApplications}</h2>
            <span>Jobs applied for</span>
          </div>
        </div>

        <div className="stat-card stat-blue">
          <div className="stat-icon">R</div>

          <div className="stat-content">
            <p>Under Review</p>
            <h2>{underReview}</h2>
            <span>Applications being reviewed</span>
          </div>
        </div>

        <div className="stat-card stat-green">
          <div className="stat-icon">I</div>

          <div className="stat-content">
            <p>Interviews</p>
            <h2>{interviews}</h2>
            <span>Interview stage</span>
          </div>
        </div>

        <div className="stat-card stat-orange">
          <div className="stat-icon">S</div>

          <div className="stat-content">
            <p>Selected</p>
            <h2>{selected}</h2>
            <span>Successful applications</span>
          </div>
        </div>

      </div>

      {/* Applications Table */}
      <div className="dashboard-card applications-card">

        <div className="section-heading">
          <div>
            <h2>Application History</h2>
            <p>
              Review the current status of your applications.
            </p>
          </div>

          <span className="jobs-count">
            {totalApplications} Applications
          </span>
        </div>

        {applications.length > 0 ? (

          <div className="applications-table-wrapper">

            <table className="applications-table">

              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Applied Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {applications.map((application) => (

                  <tr key={application.id}>

                    <td>
                      <div className="company-cell">
                        <div className="company-mini-logo">
                          {application.company
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <strong>
                          {application.company}
                        </strong>
                      </div>
                    </td>

                    <td>
                      {application.role}
                    </td>

                    <td>
                      {application.appliedDate}
                    </td>

                    <td>
                      <StatusBadge
                        status={application.status}
                      />
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        ) : (

          <div className="empty-state">

            <div className="empty-state-icon">
              A
            </div>

            <h3>No applications yet</h3>

            <p>
              You haven't applied for any placement opportunities.
            </p>

            <Link
              to="/jobs"
              className="primary-btn"
            >
              Explore Job Opportunities
            </Link>

          </div>

        )}

      </div>

    </div>
  );
}

export default Applications;