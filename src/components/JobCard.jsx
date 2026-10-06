import { useApp } from "../context/AppContext";

function JobCard({ job }) {

  const {
    applications,
    savedJobs,
    applyForJob,
    saveJob,
  } = useApp();

  const alreadyApplied =
    applications.some(
      (application) =>
        application.jobId === job.id
    );

  const isSaved =
    savedJobs.includes(job.id);

  const handleApply = () => {

    const success = applyForJob(job);

    if (success) {
      alert(
        `Application submitted for ${job.company}`
      );
    } else {
      alert(
        "You have already applied for this job."
      );
    }
  };

  return (
    <article className="job-card">

      <div className="job-card-header">

        <div className="company-logo">
          {job.company.charAt(0)}
        </div>

        <div className="job-title">

          <h3>{job.role}</h3>

          <p>{job.company}</p>

        </div>

        <button
          className={`save-job ${
            isSaved ? "saved" : ""
          }`}
          onClick={() => saveJob(job.id)}
        >
          {isSaved ? "★" : "☆"}
        </button>

      </div>

      <div className="job-details">

        <span>📍 {job.location}</span>

        <span>💰 {job.salary}</span>

        <span>💼 {job.type}</span>

      </div>

      <p className="job-description">
        {job.description}
      </p>

      <div className="skill-list">

        {job.skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}

      </div>

      <div className="job-footer">

        <div>
          <small>
            Application Deadline
          </small>

          <strong>
            {job.deadline}
          </strong>
        </div>

        <button
          className={
            alreadyApplied
              ? "apply-button applied"
              : "apply-button"
          }
          onClick={handleApply}
          disabled={alreadyApplied}
        >
          {alreadyApplied
            ? "Applied"
            : "Apply Now"}
        </button>

      </div>

    </article>
  );
}

export default JobCard;