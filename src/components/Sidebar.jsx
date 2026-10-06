import { NavLink, useNavigate } from "react-router-dom";

import { useApp } from "../context/AppContext";

function Sidebar() {

  const navigate = useNavigate();

  const {
    logout,
    unreadNotifications,
  } = useApp();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">

        <div className="brand-logo">
          P
        </div>

        <div>
          <h2>PlaceTrack</h2>
          <p>Placement Portal</p>
        </div>

      </div>

      <nav className="sidebar-menu">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <span>🏠</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <span>💼</span>
          Job Openings
        </NavLink>

        <NavLink
          to="/applications"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <span>📋</span>
          My Applications
        </NavLink>

        <NavLink
          to="/interviews"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <span>📅</span>
          Interviews
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <span>🔔</span>
          Notifications

          {unreadNotifications > 0 && (
            <span className="sidebar-badge">
              {unreadNotifications}
            </span>
          )}
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <span>👤</span>
          Profile
        </NavLink>

      </nav>

      <div className="sidebar-bottom">

        <button
          onClick={handleLogout}
          className="logout-button"
        >
          <span>🚪</span>
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;