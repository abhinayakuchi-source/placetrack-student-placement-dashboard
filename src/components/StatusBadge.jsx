function StatusBadge({ status }) {
  const getStatusClass = () => {
    switch (status) {
      case "Applied":
        return "status-applied";

      case "Under Review":
        return "status-review";

      case "Interview":
        return "status-interview";

      case "Selected":
        return "status-selected";

      case "Rejected":
        return "status-rejected";

      default:
        return "status-default";
    }
  };

  return (
    <span className={`status-badge ${getStatusClass()}`}>
      {status}
    </span>
  );
}

export default StatusBadge;