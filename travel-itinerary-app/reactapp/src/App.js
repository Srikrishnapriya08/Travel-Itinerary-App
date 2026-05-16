// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Dashboard routes */}
//         <Route path="/dashboard/*" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Dashboards
import AdminDashboard from "./pages/Dashboard";
import BasicTravelerDashboard from "./pages/BasicDashboard";
import PremiumTravelerDashboard from "./pages/PremiumDashboard";
import TravelAgentDashboard from "./pages/TravelAgentDashboard";

function App() {
  // Optional: protect dashboard routes
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("accessToken");
    if (!token) return <Navigate to="/login" />;
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* All dashboards */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/basic/*"
          element={
            <ProtectedRoute>
              <BasicTravelerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/premium/*"
          element={
            <ProtectedRoute>
              <PremiumTravelerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/travelagent/*"
          element={
            <ProtectedRoute>
              <TravelAgentDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
