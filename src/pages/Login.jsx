import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Login() {
  const navigate = useNavigate();

  const { updateUser } = useApp();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      setError(
        "Please enter your email address and password."
      );

      return;
    }

    if (!formData.email.includes("@")) {
      setError(
        "Please enter a valid email address."
      );

      return;
    }

    /*
      IMPORTANT:
      We DO NOT set the student's name here.

      The profile name is managed through Profile.jsx.
      This prevents the name from becoming "Rahul"
      every time the user logs in.
    */

    updateUser({
      email: formData.email,
    });

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      {/* LEFT SIDE */}

      <section className="auth-hero">

        <div className="auth-brand">
          PlaceTrack
        </div>

        <div className="auth-hero-content">

          <span className="auth-hero-label">
            SMART PLACEMENT TRACKER
          </span>

          <h1>
            Your career journey,
            <br />
            organized.
          </h1>

          <p>
            Manage job opportunities, applications,
            interviews and placement progress from
            one professional dashboard.
          </p>

          <div className="auth-feature-list">

            <div className="auth-feature">
              <span className="auth-feature-icon">
                J
              </span>

              <div>
                <strong>
                  Discover Opportunities
                </strong>

                <span>
                  Find relevant placement openings.
                </span>
              </div>
            </div>

            <div className="auth-feature">
              <span className="auth-feature-icon">
                A
              </span>

              <div>
                <strong>
                  Track Applications
                </strong>

                <span>
                  Monitor every application stage.
                </span>
              </div>
            </div>

            <div className="auth-feature">
              <span className="auth-feature-icon">
                I
              </span>

              <div>
                <strong>
                  Stay Interview Ready
                </strong>

                <span>
                  Never miss an upcoming interview.
                </span>
              </div>
            </div>

          </div>

        </div>

        <div className="auth-hero-footer">
          Built for students. Designed for career success.
        </div>

      </section>

      {/* RIGHT SIDE */}

      <section className="auth-login-section">

        <div className="auth-login-card">

          <div className="login-heading">

            <span className="login-eyebrow">
              WELCOME BACK
            </span>

            <h2>
              Sign in to PlaceTrack
            </h2>

            <p>
              Continue managing your placement journey.
            </p>

          </div>

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

            </div>

            {/* PASSWORD */}

            <div className="form-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="password-wrapper">

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

            </div>

            {/* ERROR */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* OPTIONS */}

            <div className="login-options">

              <label className="remember-option">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(
                      event.target.checked
                    )
                  }
                />

                <span>
                  Remember me
                </span>

              </label>

              <span className="forgot-password">
                Forgot password?
              </span>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="login-submit"
            >
              Sign In
            </button>

          </form>

          {/* REGISTER */}

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="create-account-section">

            <p>
              Don't have an account?
            </p>

            <Link
              to="/register"
              className="create-account-button"
            >
              Create Account
            </Link>

          </div>

          <div className="login-security">
            Your information is securely managed
            within your placement portal.
          </div>

        </div>

      </section>

    </div>
  );
}

export default Login;