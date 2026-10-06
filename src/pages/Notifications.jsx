import { useApp } from "../context/AppContext";

function Notifications() {
  const {
    notifications,
    markNotificationAsRead,
  } = useApp();

  return (
    <div className="notifications-page">

      {/* Page Header */}
      <div className="page-title">
        <div>
          <h1>Notifications</h1>
          <p>Stay updated with your placement activities.</p>
        </div>
      </div>

      {/* Notifications Card */}
      <div className="dashboard-card notifications-card">

        <div className="section-heading">
          <div>
            <h2>All Notifications</h2>
            <p>Recent updates related to jobs, applications and interviews.</p>
          </div>
        </div>

        {notifications.length === 0 ? (
          <div className="empty-state">
            <h3>No notifications</h3>
            <p>You're all caught up.</p>
          </div>
        ) : (
          <div className="notification-list">

            {notifications.map((notification) => (

              <div
                key={notification.id}
                className={`notification-item ${
                  notification.read ? "notification-read" : "notification-unread"
                }`}
              >

                {/* Notification Icon */}
                <div className="notification-icon">
                  {notification.type === "Interview"
                    ? "I"
                    : notification.type === "Job"
                    ? "J"
                    : "A"}
                </div>

                {/* Notification Content */}
                <div className="notification-content">

                  <div className="notification-top">
                    <h3>{notification.title}</h3>

                    {!notification.read && (
                      <span className="unread-dot"></span>
                    )}
                  </div>

                  <p>{notification.message}</p>

                  <div className="notification-bottom">
                    <span>{notification.type}</span>
                    <span>{notification.time}</span>
                  </div>

                </div>

                {/* Mark as Read */}
                {!notification.read && (
                  <button
                    className="mark-read-btn"
                    onClick={() =>
                      markNotificationAsRead(notification.id)
                    }
                  >
                    Mark as read
                  </button>
                )}

                {notification.read && (
                  <span className="read-label">
                    Read
                  </span>
                )}

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Notifications;