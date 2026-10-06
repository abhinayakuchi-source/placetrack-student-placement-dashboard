import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

function Profile() {
 const {
  user,
  updateUser,
  addNotification,
} = useApp();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    department: user?.department || "",
    year: user?.year || "",
  });

  const [resume, setResume] = useState(null);
  const [savedResume, setSavedResume] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedResume = localStorage.getItem(
      "placetrack_resume"
    );

    if (storedResume) {
      setSavedResume(JSON.parse(storedResume));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    if (file.type !== "application/pdf") {
      setMessage("Please select a PDF resume.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("Resume size must be less than 5 MB.");
      return;
    }

    setResume(file);
    setMessage("");
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();

    updateUser({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      department: formData.department,
      year: formData.year,
    });

    setMessage("Profile information saved successfully.");
  };

  const handleSaveResume = () => {
    if (!resume) {
      setMessage("Please choose a PDF resume first.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const resumeData = {
        name: resume.name,
        size: resume.size,
        type: resume.type,
        data: reader.result,
        savedAt: new Date().toLocaleString(),
      };

      localStorage.setItem(
        "placetrack_resume",
        JSON.stringify(resumeData)
      );

      setSavedResume(resumeData);
      setResume(null);
      setMessage("Resume saved successfully.");
    };

    reader.readAsDataURL(resume);
  };

  const handleDownloadResume = () => {
    if (!savedResume?.data) {
      setMessage("No saved resume is available.");
      return;
    }

    const link = document.createElement("a");

    link.href = savedResume.data;
    link.download = savedResume.name || "PlaceTrack-Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRemoveResume = () => {
    localStorage.removeItem("placetrack_resume");

    setSavedResume(null);
    setResume(null);

    setMessage("Saved resume removed.");
  };

  const calculateCompletion = () => {
    const fields = [
      formData.name,
      formData.email,
      formData.phone,
      formData.department,
      formData.year,
      savedResume,
    ];

    const completed = fields.filter(Boolean).length;

    return Math.round((completed / fields.length) * 100);
  };

  const completion = calculateCompletion();

  return (
    <div className="profile-page">

      {/* Header */}
      <div className="page-title">
        <div>
          <h1>My Profile</h1>
          <p>
            Manage your personal information and placement profile.
          </p>
        </div>
      </div>

      {/* Profile Completion */}
      <div className="profile-completion-card">

        <div className="profile-completion-content">

          <div className="profile-avatar">
            {(formData.name || "S")
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>
            <h2>
              {formData.name || "Student"}
            </h2>

            <p>
              Keep your profile updated to improve your placement
              readiness.
            </p>
          </div>

        </div>

        <div className="completion-progress">

          <div className="completion-label">
            <span>Profile completion</span>
            <strong>{completion}%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${completion}%`,
              }}
            ></div>
          </div>

        </div>

      </div>

      {message && (
        <div className="profile-message">
          {message}
        </div>
      )}

      {/* Personal Information */}
      <div className="dashboard-card profile-card">

        <div className="section-heading">
          <div>
            <h2>Personal Information</h2>
            <p>
              Update your basic student information.
            </p>
          </div>
        </div>

        <form onSubmit={handleSaveProfile}>

          <div className="profile-form-grid">

            <div className="form-group">
              <label htmlFor="profile-name">
                Full name
              </label>

              <input
                id="profile-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="profile-email">
                Email address
              </label>

              <input
                id="profile-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="profile-phone">
                Phone number
              </label>

              <input
                id="profile-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="profile-year">
                Academic year
              </label>

              <select
                id="profile-year"
                name="year"
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">
                  Select year
                </option>
                <option value="1st Year">
                  1st Year
                </option>
                <option value="2nd Year">
                  2nd Year
                </option>
                <option value="3rd Year">
                  3rd Year
                </option>
                <option value="4th Year">
                  4th Year
                </option>
              </select>
            </div>

            <div className="form-group profile-full-width">
              <label htmlFor="profile-department">
                Department
              </label>

              <select
                id="profile-department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">
                  Select department
                </option>

                <option value="Artificial Intelligence & Data Science">
                  Artificial Intelligence & Data Science
                </option>

                <option value="Computer Science Engineering">
                  Computer Science Engineering
                </option>

                <option value="Information Technology">
                  Information Technology
                </option>

                <option value="Electronics & Communication Engineering">
                  Electronics & Communication Engineering
                </option>

                <option value="Electrical & Electronics Engineering">
                  Electrical & Electronics Engineering
                </option>
              </select>
            </div>

          </div>

          <button
            type="submit"
            className="primary-btn"
          >
            Save Profile
          </button>

        </form>

      </div>

      {/* Resume Section */}
      <div className="dashboard-card profile-card">

        <div className="section-heading">
          <div>
            <h2>Resume</h2>
            <p>
              Upload a PDF resume and keep it available for placement
              applications.
            </p>
          </div>
        </div>

        <div className="resume-upload-area">

          <label
            htmlFor="resume-upload"
            className="resume-upload-box"
          >
            <div className="resume-upload-icon">
              ↑
            </div>

            <strong>
              {resume
                ? resume.name
                : "Choose your resume"}
            </strong>

            <span>
              PDF format • Maximum 5 MB
            </span>

            <input
              id="resume-upload"
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleResumeChange}
            />
          </label>

          {resume && (
            <button
              className="primary-btn"
              type="button"
              onClick={handleSaveResume}
            >
              Save Resume
            </button>
          )}

        </div>

        {/* Saved Resume */}
        {savedResume && (

          <div className="saved-resume">

            <div className="saved-resume-info">

              <div className="resume-file-icon">
                PDF
              </div>

              <div>
                <strong>
                  {savedResume.name}
                </strong>

                <span>
                  Saved on {savedResume.savedAt}
                </span>
              </div>

            </div>

            <div className="resume-actions">

              <button
                type="button"
                className="primary-btn"
                onClick={handleDownloadResume}
              >
                Download
              </button>

              <button
                type="button"
                className="secondary-btn"
                onClick={handleRemoveResume}
              >
                Remove
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Profile;