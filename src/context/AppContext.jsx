import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const defaultUser = {
  name: "",
  email: "",
  phone: "",
  department: "",
  year: "",
};

// LOAD SAVED USER FROM LOCAL STORAGE
const getSavedUser = () => {
  try {
    const savedUser = localStorage.getItem("placetrack_user");

    if (savedUser) {
      return JSON.parse(savedUser);
    }
  } catch (error) {
    console.error("Error loading saved user:", error);
  }

  return defaultUser;
};

export function AppProvider({ children }) {
  // USER
  const [user, setUser] = useState(getSavedUser);

  // NOTIFICATIONS
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Interview Scheduled",
      message:
        "Your Accenture interview is scheduled for October 10.",
      type: "Interview",
      read: false,
      time: "Today",
    },
    {
      id: 2,
      title: "New Job Opening",
      message:
        "A new Data Analyst position is available at Accenture.",
      type: "Job",
      read: false,
      time: "Today",
    },
    {
      id: 3,
      title: "Application Under Review",
      message:
        "Your TCS application is currently under review.",
      type: "Application",
      read: true,
      time: "Yesterday",
    },
  ]);

  // APPLICATIONS
  const [applications, setApplications] = useState([
    {
      id: 1,
      company: "TCS",
      role: "Graduate Engineer Trainee",
      status: "Under Review",
      appliedDate: "05 Oct 2026",
    },
    {
      id: 2,
      company: "Accenture",
      role: "Data Analyst",
      status: "Interview",
      appliedDate: "03 Oct 2026",
    },
  ]);

  // UPDATE USER PROFILE
  const updateUser = (updatedUser) => {
    setUser((previousUser) => {
      const newUser = {
        ...previousUser,
        ...updatedUser,
      };

      // Save updated profile to local storage
      localStorage.setItem(
        "placetrack_user",
        JSON.stringify(newUser)
      );

      return newUser;
    });
  };

  // ADD NEW APPLICATION
  const addApplication = (application) => {
    setApplications((previousApplications) => [
      ...previousApplications,
      application,
    ]);
  };

  // ADD NEW NOTIFICATION
  const addNotification = ({
    title,
    message,
    type = "System",
  }) => {
    const newNotification = {
      id: Date.now(),
      title,
      message,
      type,
      read: false,
      time: "Just now",
    };

    setNotifications((previousNotifications) => [
      newNotification,
      ...previousNotifications,
    ]);
  };

  // MARK ONE NOTIFICATION AS READ
  const markNotificationAsRead = (id) => {
    setNotifications((previousNotifications) =>
      previousNotifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );
  };

  // MARK ALL NOTIFICATIONS AS READ
  const markAllNotificationsAsRead = () => {
    setNotifications((previousNotifications) =>
      previousNotifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  // COUNT UNREAD NOTIFICATIONS
  const unreadNotifications = notifications.filter(
    (notification) => !notification.read
  ).length;

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("placetrack_user");
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        // USER
        user,
        setUser,
        updateUser,

        // APPLICATIONS
        applications,
        setApplications,
        addApplication,

        // NOTIFICATIONS
        notifications,
        setNotifications,
        addNotification,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        unreadNotifications,

        // LOGOUT
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// CUSTOM HOOK
export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useApp must be used inside AppProvider"
    );
  }

  return context;
}