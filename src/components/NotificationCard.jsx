import { useApp } from "../context/AppContext";

function NotificationCard({
  notification,
}) {

  const {
    markNotificationRead,
  } = useApp();

  return (
    <div
      className={`notification-card ${
        notification.read
          ? "read"
          : "unread"
      }`}
      onClick={() =>
        markNotificationRead(
          notification.id
        )
      }
    >

      <div className="notification-card-icon">
        {notification.type === "Interview"
          ? "📅"
          : notification.type === "Job"
          ? "💼"
          : notification.type === "Success"
          ? "✅"
          : "📢"}
      </div>

      <div className="notification-content">

        <div className="notification-title-row">

          <h3>
            {notification.title}
          </h3>

          {!notification.read && (
            <span className="unread-dot"></span>
          )}

        </div>

        <p>
          {notification.message}
        </p>

        <small>
          {notification.date}
        </small>

      </div>

    </div>
  );
}

export default NotificationCard;