const notifications = [
  {
    id: 1,
    title: "Interview Reminder",
    message:
      "Your Accenture interview is scheduled for October 10 at 10:30 AM.",
    type: "Interview",
    date: "Today",
    read: false,
  },

  {
    id: 2,
    title: "New Job Opening",
    message:
      "A new Software Developer opportunity is available at Zoho.",
    type: "Job",
    date: "Yesterday",
    read: false,
  },

  {
    id: 3,
    title: "Application Update",
    message:
      "Your Accenture application has been marked as Selected.",
    type: "Success",
    date: "2 days ago",
    read: true,
  },

  {
    id: 4,
    title: "Placement Announcement",
    message:
      "Campus placement preparation sessions will begin soon.",
    type: "Announcement",
    date: "3 days ago",
    read: true,
  },
];

export default notifications;