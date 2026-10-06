import { useMemo } from "react";

import { useApp } from "../context/AppContext";

export function useApplications() {

  const { applications } = useApp();

  const statistics = useMemo(() => {

    const total = applications.length;

    const applied = applications.filter(
      (application) =>
        application.status === "Applied"
    ).length;

    const underReview = applications.filter(
      (application) =>
        application.status === "Under Review"
    ).length;

    const interviews = applications.filter(
      (application) =>
        application.status === "Interview"
    ).length;

    const selected = applications.filter(
      (application) =>
        application.status === "Selected"
    ).length;

    const rejected = applications.filter(
      (application) =>
        application.status === "Rejected"
    ).length;

    return {
      total,
      applied,
      underReview,
      interviews,
      selected,
      rejected,
    };

  }, [applications]);

  return {
    applications,
    statistics,
  };
}