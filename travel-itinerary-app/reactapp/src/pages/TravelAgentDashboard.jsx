// import React, { useEffect, useState } from "react";
// import Itineraries from "./Itineraries";
// import Bookings from "./Bookings";
// import Expenses from "./Expenses";

// function TravelAgentDashboard() {
//   const [itineraries, setItineraries] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [expenses, setExpenses] = useState([]);

//   const token = localStorage.getItem("accessToken");
//   const headers = { Authorization: `Bearer ${token}` };

//   useEffect(() => {
//     fetch("http://localhost:8080/api/itineraries", { headers })
//       .then(res => res.json())
//       .then(setItineraries)
//       .catch(console.error);

//     fetch("http://localhost:8080/api/bookings", { headers })
//       .then(res => res.json())
//       .then(setBookings)
//       .catch(console.error);

//     fetch("http://localhost:8080/api/expenses", { headers })
//       .then(res => res.json())
//       .then(setExpenses)
//       .catch(console.error);
//   }, []);

//   return (
//     <div style={{ padding: "30px", fontFamily: "Arial" }}>
//       <h1>Welcome, Travel Agent 🧳</h1>

//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" }}>
//         <div style={{ padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
//           <h3>Total Itineraries</h3>
//           <p>{itineraries.length}</p>
//         </div>
//         <div style={{ padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
//           <h3>Total Bookings</h3>
//           <p>{bookings.length}</p>
//         </div>
//         <div style={{ padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
//           <h3>Total Expenses</h3>
//           <p>{expenses.length}</p>
//         </div>
//       </div>

//       <section style={{ marginTop: "30px" }}>
//         <h2>📌 All Itineraries</h2>
//         <Itineraries />
//       </section>

//       <section style={{ marginTop: "30px" }}>
//         <h2>📅 All Bookings</h2>
//         <Bookings />
//       </section>

//       <section style={{ marginTop: "30px" }}>
//         <h2>💰 All Expenses</h2>
//         <Expenses />
//       </section>
//     </div>
//   );
// }

// export default TravelAgentDashboard;


import React, { useEffect, useState } from "react";
import Itineraries from "./Itineraries";
import Bookings from "./Bookings";
import Expenses from "./Expenses";

function TravelAgentDashboard() {
  const [itineraries, setItineraries] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [showSummary, setShowSummary] = useState(true);

  const token = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    fetch("http://localhost:8080/api/itineraries", { headers })
      .then(res => res.json())
      .then(data => setItineraries(data.filter(i => i.userId === parseInt(userId))))
      .catch(console.error);

    fetch("http://localhost:8080/api/bookings", { headers })
      .then(res => res.json())
      .then(data => setBookings(data.filter(b => b.userId === parseInt(userId))))
      .catch(console.error);

    fetch("http://localhost:8080/api/expenses", { headers })
      .then(res => res.json())
      .then(data => setExpenses(data.filter(e => e.userId === parseInt(userId))))
      .catch(console.error);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowSummary(false);
  };

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <h2>Travel Agent Dashboard</h2>
        <ul>
          <li onClick={() => handleTabClick("itineraries")} className={activeTab === "itineraries" ? "active" : ""}>📌 Itineraries</li>
          <li onClick={() => handleTabClick("bookings")} className={activeTab === "bookings" ? "active" : ""}>📅 Bookings</li>
          <li onClick={() => handleTabClick("expenses")} className={activeTab === "expenses" ? "active" : ""}>💰 Expenses</li>
          <li onClick={() => alert("Logout clicked!")}>🚪 Logout</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        {showSummary && (
          <>
            <h1>Welcome, Travel Agent 🧳</h1>
            <div className="summary-cards">
              <div className="card"><h3>📌 Total Itineraries</h3><p>{itineraries.length}</p></div>
              <div className="card"><h3>📅 Total Bookings</h3><p>{bookings.length}</p></div>
              <div className="card"><h3>💰 Total Expenses</h3><p>{expenses.length}</p></div>
            </div>
          </>
        )}

        {activeTab && (
          <section className="dashboard-section">
            {activeTab === "itineraries" && <Itineraries />}
            {activeTab === "bookings" && <Bookings />}
            {activeTab === "expenses" && <Expenses />}
          </section>
        )}
      </main>

      <style>{`
        .dashboard-wrapper { display: flex; min-height: 100vh; font-family: Arial, sans-serif; background: #f0f4f8; }
        .sidebar { width: 250px; background: #1976d2; color: white; display: flex; flex-direction: column; padding: 30px 20px; }
        .sidebar h2 { margin-bottom: 30px; font-size: 20px; text-align: center; }
        .sidebar ul { list-style: none; padding: 0; }
        .sidebar ul li { padding: 12px 10px; margin-bottom: 10px; border-radius: 6px; cursor: pointer; transition: background 0.3s; }
        .sidebar ul li:hover, .sidebar ul li.active { background: #115293; }
        .dashboard-main { flex: 1; padding: 30px; }
        h1 { margin-bottom: 30px; }
        .summary-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 40px; }
        .card { padding: 20px; background: #fff; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center; transition: transform 0.2s; }
        .card:hover { transform: translateY(-4px); }
        .card h3 { margin-bottom: 10px; }
        .dashboard-section { width: 100%; background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); }
      `}</style>
    </div>
  );
}

export default TravelAgentDashboard;




// // import React from "react";
// // import { Link, Routes, Route } from "react-router-dom";
// // import Itineraries from "./Itineraries";

// // function TravelAgentDashboard() {
// //   const role = "BASIC"; // Travel Agent / Basic user

// //   return (
// //     <div className="dashboard-container">
// //       <aside className="sidebar">
// //         <h2>TRAVEL AGENT PANEL</h2>
// //         <ul>
// //           <li><Link to="itineraries">📌 ITINERARIES</Link></li>
// //           {/* Add other travel agent links if needed */}
// //         </ul>
// //       </aside>

// //       <main className="dashboard-content">
// //         <Routes>
// //           <Route path="" element={<h1>Welcome, Travel Agent 👤</h1>} />
// //           {/* <Route path="itineraries" element={<Itineraries role={role} />} /> */}
// //           <Route path="itineraries" element={<Itineraries role="TRAVELAGENT" />} />
// //         </Routes>
// //       </main>

// //       <style>{`
// //         .dashboard-container { display: flex; min-height: 100vh; font-family: Arial, sans-serif; }
// //         .sidebar { width: 220px; background: #4ab7bf; color: white; padding: 25px; }
// //         .sidebar h2 { text-align: center; margin-bottom: 30px; }
// //         .sidebar ul { list-style: none; padding: 0; }
// //         .sidebar ul li { margin: 20px 0; }
// //         .sidebar ul li a { color: white; text-decoration: none; display: block; padding: 12px; border-radius: 8px; font-weight: bold; }
// //         .sidebar ul li a:hover { background: #34495e; }
// //         .dashboard-content { flex: 1; padding: 40px; background: #ecf0f1; }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default TravelAgentDashboard;
