import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import Interviews from "./pages/Interviews";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>

      {/* =========================
          AUTHENTICATION PAGES
      ========================== */}

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />


      {/* =========================
          MAIN APPLICATION
      ========================== */}

      <Route element={<Layout />}>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Job Openings */}
        <Route
          path="/jobs"
          element={<Jobs />}
        />

        {/* Applications */}
        <Route
          path="/applications"
          element={<Applications />}
        />

        {/* Interviews */}
        <Route
          path="/interviews"
          element={<Interviews />}
        />

        {/* Notifications */}
        <Route
          path="/notifications"
          element={<Notifications />}
        />

        {/* Student Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

      </Route>

    </Routes>
  );
}

export default App;