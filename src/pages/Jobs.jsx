import { useMemo, useState } from "react";
import { useApp } from "../context/AppContext";

function Jobs() {
  const {
    applications,
    addApplication,
  } = useApp();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      company: "TCS",
      logo: "T",
      role: "Graduate Engineer Trainee",
      location: "Chennai",
      type: "Full Time",
      salary: "₹4.5 – ₹6 LPA",
      skills: ["Java", "Python", "SQL"],
      deadline: "12 Oct 2026",
      description:
        "Start your technology career by working on enterprise software and digital transformation projects.",
    },
    {
      id: 2,
      company: "Infosys",
      logo: "I",
      role: "Systems Engineer",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹5 – ₹7 LPA",
      skills: ["Java", "React", "SQL"],
      deadline: "15 Oct 2026",
      description:
        "Work with technology teams to build scalable solutions for global business clients.",
    },
    {
      id: 3,
      company: "Accenture",
      logo: "A",
      role: "Data Analyst",
      location: "Chennai",
      type: "Full Time",
      salary: "₹5.5 – ₹8 LPA",
      skills: ["Python", "Power BI", "Excel"],
      deadline: "18 Oct 2026",
      description:
        "Use data analytics and business intelligence skills to solve real-world business problems.",
    },
    {
      id: 4,
      company: "Wipro",
      logo: "W",
      role: "Project Engineer",
      location: "Hyderabad",
      type: "Full Time",
      salary: "₹4 – ₹6 LPA",
      skills: ["Python", "Cloud", "SQL"],
      deadline: "20 Oct 2026",
      description:
        "Join technology teams and contribute to innovative enterprise software projects.",
    },
    {
      id: 5,
      company: "Deloitte",
      logo: "D",
      role: "Technology Analyst",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹6 – ₹9 LPA",
      skills: ["Python", "Data Analytics", "SQL"],
      deadline: "22 Oct 2026",
      description:
        "Use analytical thinking and technology skills to support business and consulting projects.",
    },
    {
      id: 6,
      company: "Cognizant",
      logo: "C",
      role: "Programmer Analyst",
      location: "Chennai",
      type: "Full Time",
      salary: "₹4.5 – ₹7 LPA",
      skills: ["Java", "Python", "Web"],
      deadline: "25 Oct 2026",
      description:
        "Build software solutions and develop your career through real-world technology projects.",
    },
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchText = search
        .toLowerCase()
        .trim();

      const matchesSearch =
        !searchText ||
        job.company
          .toLowerCase()
          .includes(searchText) ||
        job.role
          .toLowerCase()
          .includes(searchText) ||
        job.skills.some((skill) =>
          skill
            .toLowerCase()
            .includes(searchText)
        );

      const matchesLocation =
        location === "All" ||
        job.location === location;

      const matchesType =
        jobType === "All" ||
        job.type === jobType;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType
      );
    });
  }, [search, location, jobType]);

  const isApplied = (jobId) => {
    return applications.some(
      (application) =>
        application.jobId === jobId
    );
  };

  const handleApply = (job) => {
    if (isApplied(job.id)) {
      return;
    }

    addApplication({
      id: Date.now(),
      jobId: job.id,
      company: job.company,
      role: job.role,
      status: "Applied",
      appliedDate: "06 Oct 2026",
    });

    setSelectedJob(null);
  };

  const resetFilters = () => {
    setSearch("");
    setLocation("All");
    setJobType("All");
  };

  return (
    <div className="jobs-page">

      {/* =========================================
          HEADER
      ========================================== */}

      <div className="page-title jobs-page-title">

        <div>

          <span className="jobs-eyebrow">
            CAREER OPPORTUNITIES
          </span>

          <h1>
            Job Openings
          </h1>

          <p>
            Discover placement opportunities that
            match your skills and career goals.
          </p>

        </div>

        <div className="jobs-summary">

          <strong>
            {filteredJobs.length}
          </strong>

          <span>
            Open Positions
          </span>

        </div>

      </div>

      {/* =========================================
          SEARCH PANEL
      ========================================== */}

      <div className="jobs-search-panel">

        <div className="jobs-search-box">

          <div className="jobs-search-icon">
            S
          </div>

          <input
            type="text"
            placeholder="Search company, role or skill..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="jobs-filter-select">

          <label>
            Location
          </label>

          <select
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
          >
            <option value="All">
              All locations
            </option>

            <option value="Chennai">
              Chennai
            </option>

            <option value="Bangalore">
              Bangalore
            </option>

            <option value="Hyderabad">
              Hyderabad
            </option>
          </select>

        </div>

        <div className="jobs-filter-select">

          <label>
            Job Type
          </label>

          <select
            value={jobType}
            onChange={(e) =>
              setJobType(e.target.value)
            }
          >
            <option value="All">
              All types
            </option>

            <option value="Full Time">
              Full Time
            </option>
          </select>

        </div>

      </div>

      {/* =========================================
          CATEGORY FILTERS
      ========================================== */}

      <div className="job-category-bar">

        <span className="category-title">
          Popular Skills
        </span>

        <button
          className={
            !search
              ? "job-category active"
              : "job-category"
          }
          onClick={() => setSearch("")}
        >
          All Jobs
        </button>

        <button
          className={
            search === "Data"
              ? "job-category active"
              : "job-category"
          }
          onClick={() => setSearch("Data")}
        >
          Data & Analytics
        </button>

        <button
          className={
            search === "Python"
              ? "job-category active"
              : "job-category"
          }
          onClick={() => setSearch("Python")}
        >
          Python
        </button>

        <button
          className={
            search === "Java"
              ? "job-category active"
              : "job-category"
          }
          onClick={() => setSearch("Java")}
        >
          Java
        </button>

        <button
          className={
            search === "React"
              ? "job-category active"
              : "job-category"
          }
          onClick={() => setSearch("React")}
        >
          React
        </button>

      </div>

      {/* =========================================
          JOB RESULTS HEADER
      ========================================== */}

      <div className="jobs-results-header">

        <div>

          <h2>
            Recommended Opportunities
          </h2>

          <p>
            {filteredJobs.length} positions available
            for your career journey.
          </p>

        </div>

        {(search ||
          location !== "All" ||
          jobType !== "All") && (
          <button
            className="clear-filters-btn"
            onClick={resetFilters}
          >
            Clear Filters
          </button>
        )}

      </div>

      {/* =========================================
          JOB CARDS
      ========================================== */}

      {filteredJobs.length > 0 ? (

        <div className="jobs-grid">

          {filteredJobs.map((job) => {

            const applied =
              isApplied(job.id);

            return (
              <div
                className="professional-job-card"
                key={job.id}
              >

                {/* Card Header */}

                <div className="professional-job-header">

                  <div className="professional-company">

                    <div className="professional-company-logo">
                      {job.logo}
                    </div>

                    <div>

                      <strong>
                        {job.company}
                      </strong>

                      <span>
                        Verified Company
                      </span>

                    </div>

                  </div>

                  <span className="job-type-badge">
                    {job.type}
                  </span>

                </div>

                {/* Role */}

                <h3 className="professional-job-title">
                  {job.role}
                </h3>

                {/* Location */}

                <div className="professional-job-location">

                  <span>
                    Location
                  </span>

                  <strong>
                    {job.location}
                  </strong>

                </div>

                {/* Salary */}

                <div className="professional-job-salary">

                  <span>
                    Package
                  </span>

                  <strong>
                    {job.salary}
                  </strong>

                </div>

                {/* Skills */}

                <div className="professional-job-skills">

                  {job.skills.map(
                    (skill) => (
                      <span
                        key={skill}
                      >
                        {skill}
                      </span>
                    )
                  )}

                </div>

                {/* Deadline */}

                <div className="professional-job-deadline">

                  <span>
                    Application deadline
                  </span>

                  <strong>
                    {job.deadline}
                  </strong>

                </div>

                {/* Buttons */}

                <div className="professional-job-actions">

                  <button
                    className="job-details-btn"
                    onClick={() =>
                      setSelectedJob(job)
                    }
                  >
                    View Details
                  </button>

                  <button
                    className={
                      applied
                        ? "job-apply-btn applied"
                        : "job-apply-btn"
                    }
                    disabled={applied}
                    onClick={() =>
                      handleApply(job)
                    }
                  >
                    {applied
                      ? "Applied"
                      : "Apply Now"}
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      ) : (

        <div className="jobs-empty-state">

          <div className="jobs-empty-icon">
            S
          </div>

          <h2>
            No opportunities found
          </h2>

          <p>
            Try changing your search or filter
            options.
          </p>

          <button
            className="primary-btn"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

        </div>

      )}

      {/* =========================================
          JOB DETAILS MODAL
      ========================================== */}

      {selectedJob && (

        <div
          className="job-modal-overlay"
          onClick={() =>
            setSelectedJob(null)
          }
        >

          <div
            className="job-modal professional-job-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedJob(null)
              }
            >
              ×
            </button>

            <div className="modal-company-header">

              <div className="professional-company-logo modal-logo">
                {selectedJob.logo}
              </div>

              <div>

                <span className="modal-company-name">
                  {selectedJob.company}
                </span>

                <h2>
                  {selectedJob.role}
                </h2>

              </div>

            </div>

            <div className="modal-details">

              <div>
                <span>
                  Location
                </span>

                <strong>
                  {selectedJob.location}
                </strong>
              </div>

              <div>
                <span>
                  Salary
                </span>

                <strong>
                  {selectedJob.salary}
                </strong>
              </div>

              <div>
                <span>
                  Job Type
                </span>

                <strong>
                  {selectedJob.type}
                </strong>
              </div>

              <div>
                <span>
                  Deadline
                </span>

                <strong>
                  {selectedJob.deadline}
                </strong>
              </div>

            </div>

            <div className="modal-section">

              <h3>
                About this opportunity
              </h3>

              <p>
                {selectedJob.description}
              </p>

            </div>

            <div className="modal-section">

              <h3>
                Required Skills
              </h3>

              <div className="professional-job-skills">

                {selectedJob.skills.map(
                  (skill) => (
                    <span
                      key={skill}
                    >
                      {skill}
                    </span>
                  )
                )}

              </div>

            </div>

            <button
              className={
                isApplied(selectedJob.id)
                  ? "job-apply-btn applied modal-apply-btn"
                  : "job-apply-btn modal-apply-btn"
              }
              disabled={isApplied(
                selectedJob.id
              )}
              onClick={() =>
                handleApply(selectedJob)
              }
            >
              {isApplied(selectedJob.id)
                ? "Application Submitted"
                : "Apply for this Position"}
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Jobs;