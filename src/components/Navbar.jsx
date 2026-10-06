import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";

function Navbar() {

  const {
    user,
    unreadNotifications,
  } = useApp();

  return (
    <header className="navbar">

      <div className="mobile-brand">
        PlaceTrack
      </div>

      <div className="navbar-right">

        <Link
          to="/notifications"
          className="notification-link"
        >
          <span className="notification-icon">
            🔔
          </span>

          {unreadNotifications > 0 && (
            <span className="notification-count">
              {unreadNotifications}
            </span>
          )}
        </Link>

        <Link
          to="/profile"
          className="profile-link"
        >
          <span className="profile-avatar">
            {user?.name?.charAt(0) || "S"}
          </span>

          <span>
            {user?.name || "Student"}
          </span>
        </Link>

      </div>

    </header>
  );
}

export default Navbar;