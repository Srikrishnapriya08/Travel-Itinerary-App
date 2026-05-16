// // // // // import React from "react";

// // // // // function Dashboard() {
// // // // //   return (
// // // // //     <div className="dashboard-container">
// // // // //       {/* Sidebar */}
// // // // //       <aside className="sidebar">
// // // // //         <h2>TRAVELMATE ✈️</h2>
// // // // //         <ul>
// // // // //           <li><a href="/profile">👤 PROFILE</a></li>
// // // // //           <li><a href="/itineraries">📌 ITINERARIES</a></li>
// // // // //           <li><a href="/bookings">🛒 BOOKINGS</a></li>
// // // // //           <li><a href="/expenses">💰 EXPENSES</a></li>
// // // // //           <li><a href="/logout">🚪 LOGOUT</a></li>
// // // // //         </ul>
// // // // //       </aside>

// // // // //       {/* Main Content */}
// // // // //       <main className="dashboard-content">
// // // // //         <h1>Welcome Back, Traveler 🌍</h1>
// // // // //         <p>Plan, manage, and track your trips with ease.</p>

// // // // //         {/* Summary Cards */}
// // // // //         <div className="cards">
// // // // //           <div className="card">📌 Total Itineraries: 5</div>
// // // // //           <div className="card">📅 Upcoming Trip: Paris</div>
// // // // //           <div className="card">💰 Expenses Tracked: ₹25,000</div>
// // // // //           <div className="card">🛒 Active Bookings: 3</div>
// // // // //         </div>

// // // // //         {/* Travel Tips Section */}
// // // // //         <section className="tips">
// // // // //           <h2>💡 TRAVEL TIPS</h2>
// // // // //           <ul>
// // // // //             <li>Always carry both digital and paper copies of important documents.</li>
// // // // //             <li>Track your daily expenses to avoid overspending.</li>
// // // // //             <li>Pack light and keep essentials in your carry-on.</li>
// // // // //             <li>Learn basic local phrases for smoother communication.</li>
// // // // //           </ul>
// // // // //         </section>

// // // // //         {/* Notifications Section */}
// // // // //         <section className="notifications">
// // // // //           <h2>🔔 NOTIFICATIONS</h2>
// // // // //           <ul>
// // // // //             <li>Your booking for Paris is confirmed ✅</li>
// // // // //             <li>3 days left to update your itinerary 🕒</li>
// // // // //             <li>New travel deals available for Europe 🌍</li>
// // // // //           </ul>
// // // // //         </section>
// // // // //       </main>

// // // // //       {/* Internal CSS */}
// // // // //       <style>{`
// // // // //         .dashboard-container {
// // // // //           display: flex;
// // // // //           min-height: 100vh;
// // // // //           font-family: Arial, sans-serif;
// // // // //         }
// // // // //         .sidebar {
// // // // //           width: 220px;
// // // // //           background: #4ab7bf;
// // // // //           color: white;
// // // // //           padding: 25px;
// // // // //         }
// // // // //         .sidebar h2 {
// // // // //           margin-bottom: 30px;
// // // // //           text-align: center;
// // // // //           font-size: 24px;
// // // // //           letter-spacing: 1px;
// // // // //         }
// // // // //         .sidebar ul {
// // // // //           list-style: none;
// // // // //           padding: 0;
// // // // //         }
// // // // //         .sidebar ul li {
// // // // //           margin: 20px 0;
// // // // //         }
// // // // //         .sidebar ul li a {
// // // // //           color: white;
// // // // //           text-decoration: none;
// // // // //           font-weight: bold;
// // // // //           display: block;
// // // // //           padding: 12px;
// // // // //           border-radius: 8px;
// // // // //           transition: background 0.3s;
// // // // //           font-size: 16px;
// // // // //           text-transform: uppercase; /* ✅ Only sidebar links in capitals */
// // // // //         }
// // // // //         .sidebar ul li a:hover {
// // // // //           background: #399aa6;
// // // // //         }
// // // // //         .dashboard-content {
// // // // //           flex: 1;
// // // // //           padding: 40px;
// // // // //           background: #f5fafa;
// // // // //         }
// // // // //         .dashboard-content h1 {
// // // // //           margin-bottom: 15px;
// // // // //           font-size: 28px;
// // // // //         }
// // // // //         .dashboard-content p {
// // // // //           font-size: 16px;
// // // // //           color: #555;
// // // // //         }
// // // // //         .cards {
// // // // //           display: grid;
// // // // //           grid-template-columns: repeat(2, 1fr);
// // // // //           gap: 20px;
// // // // //           margin-top: 25px;
// // // // //         }
// // // // //         .card {
// // // // //           background: white;
// // // // //           padding: 20px;
// // // // //           border-radius: 12px;
// // // // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // // // //           text-align: center;
// // // // //           font-size: 18px;
// // // // //           font-weight: bold;
// // // // //           color: #333;
// // // // //         }
// // // // //         section {
// // // // //           background: white;
// // // // //           padding: 20px;
// // // // //           margin-top: 25px;
// // // // //           border-radius: 12px;
// // // // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // // // //         }
// // // // //         section h2 {
// // // // //           margin-bottom: 15px;
// // // // //           font-size: 20px;
// // // // //           color: #333;
// // // // //         }
// // // // //         section ul {
// // // // //           list-style: disc inside;
// // // // //           padding-left: 10px;
// // // // //         }
// // // // //         section ul li {
// // // // //           margin: 8px 0;
// // // // //           font-size: 15px;
// // // // //           color: #444;
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Dashboard;



// // // // import React from "react";

// // // // function Dashboard() {
// // // //   return (
// // // //     <div className="dashboard-container">
// // // //       {/* Sidebar */}
// // // //       <aside className="sidebar">
// // // //         <h2>TRAVELMATE ✈️</h2>
// // // //         <ul>
// // // //           <li><a href="/profile">👤 PROFILE</a></li>
// // // //           <li><a href="/itineraries">📌 ITINERARIES</a></li>
// // // //           <li><a href="/bookings">🛒 BOOKINGS</a></li>
// // // //           <li><a href="/expenses">💰 EXPENSES</a></li>
// // // //           <li><a href="/logout">🚪 LOGOUT</a></li>
// // // //         </ul>
// // // //       </aside>

// // // //       {/* Main Content */}
// // // //       <main className="dashboard-content">
// // // //         <h1>Welcome Back, Traveler 🌍</h1>
// // // //         <p>Plan, manage, and track your trips with ease.</p>

// // // //         {/* Summary Cards */}
// // // //         <div className="cards">
// // // //           <div className="card">📌 Total Itineraries: 5</div>
// // // //           <div className="card">📅 Upcoming Trip: Paris</div>
// // // //           <div className="card">💰 Expenses Tracked: ₹25,000</div>
// // // //           <div className="card">🛒 Active Bookings: 3</div>
// // // //         </div>
// // // //       </main>

// // // //       {/* Internal CSS */}
// // // //       <style>{`
// // // //         .dashboard-container {
// // // //           display: flex;
// // // //           min-height: 100vh;
// // // //           font-family: Arial, sans-serif;
// // // //         }
// // // //         .sidebar {
// // // //           width: 220px;
// // // //           background: #4ab7bf;
// // // //           color: white;
// // // //           padding: 25px;
// // // //         }
// // // //         .sidebar h2 {
// // // //           margin-bottom: 30px;
// // // //           text-align: center;
// // // //           font-size: 24px;
// // // //           letter-spacing: 1px;
// // // //         }
// // // //         .sidebar ul {
// // // //           list-style: none;
// // // //           padding: 0;
// // // //         }
// // // //         .sidebar ul li {
// // // //           margin: 20px 0;
// // // //         }
// // // //         .sidebar ul li a {
// // // //           color: white;
// // // //           text-decoration: none;
// // // //           font-weight: bold;
// // // //           display: block;
// // // //           padding: 12px;
// // // //           border-radius: 8px;
// // // //           transition: background 0.3s;
// // // //           font-size: 16px;
// // // //           text-transform: uppercase; /* ✅ Only sidebar links in capitals */
// // // //         }
// // // //         .sidebar ul li a:hover {
// // // //           background: #399aa6;
// // // //         }
// // // //         .dashboard-content {
// // // //           flex: 1;
// // // //           padding: 40px;
// // // //           background: #f5fafa;
// // // //         }
// // // //         .dashboard-content h1 {
// // // //           margin-bottom: 15px;
// // // //           font-size: 28px;
// // // //         }
// // // //         .dashboard-content p {
// // // //           font-size: 16px;
// // // //           color: #555;
// // // //         }
// // // //         .cards {
// // // //           display: grid;
// // // //           grid-template-columns: repeat(2, 1fr);
// // // //           gap: 20px;
// // // //           margin-top: 25px;
// // // //         }
// // // //         .card {
// // // //           background: white;
// // // //           padding: 20px;
// // // //           border-radius: 12px;
// // // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // // //           text-align: center;
// // // //           font-size: 18px;
// // // //           font-weight: bold;
// // // //           color: #333;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Dashboard;
// // // import React from "react";

// // // function Dashboard() {
// // //   return (
// // //     <div className="dashboard-container">
// // //       {/* Sidebar */}
// // //       <aside className="sidebar">
// // //         <h2>TRAVELMATE ✈️</h2>
// // //         <ul>
// // //           <li><a href="/profile">👤 PROFILE</a></li>
// // //           <li><a href="/itineraries">📌 ITINERARIES</a></li>
// // //           <li><a href="/destinations">🌍 DESTINATIONS</a></li>
// // //           <li><a href="/bookings">🛒 BOOKINGS</a></li>
// // //           <li><a href="/expenses">💰 EXPENSES</a></li>
// // //           <li><a href="/activities">🎯 ACTIVITIES</a></li>
// // //           <li><a href="/logout">🚪 LOGOUT</a></li>
// // //         </ul>
// // //       </aside>

// // //       {/* Main Content */}
// // //       <main className="dashboard-content">
// // //         <h1>Welcome Back, Traveler 🌍</h1>
// // //         <p>Plan, manage, and track your trips with ease.</p>

// // //         {/* Summary Cards */}
// // //         <div className="cards">
// // //           <div className="card">📌 Total Itineraries: 5</div>
// // //           <div className="card">📅 Upcoming Trip: Paris</div>
// // //           <div className="card">💰 Expenses Tracked: ₹25,000</div>
// // //           <div className="card">🛒 Active Bookings: 3</div>
// // //         </div>

// // //         {/* Travel Tips Section */}
// // //         <section className="tips">
// // //           <h2>💡 TRAVEL TIPS</h2>
// // //           <ul>
// // //             <li>Always carry both digital and paper copies of important documents.</li>
// // //             <li>Track your daily expenses to avoid overspending.</li>
// // //             <li>Pack light and keep essentials in your carry-on.</li>
// // //             <li>Learn basic local phrases for smoother communication.</li>
// // //           </ul>
// // //         </section>

// // //         {/* Notifications Section */}
// // //         <section className="notifications">
// // //           <h2>🔔 NOTIFICATIONS</h2>
// // //           <ul>
// // //             <li>Your booking for Paris is confirmed ✅</li>
// // //             <li>3 days left to update your itinerary 🕒</li>
// // //             <li>New travel deals available for Europe 🌍</li>
// // //           </ul>
// // //         </section>
// // //       </main>

// // //       {/* Internal CSS */}
// // //       <style>{`
// // //         .dashboard-container {
// // //           display: flex;
// // //           min-height: 100vh;
// // //           font-family: Arial, sans-serif;
// // //         }
// // //         .sidebar {
// // //           width: 220px;
// // //           background: #4ab7bf;
// // //           color: white;
// // //           padding: 25px;
// // //         }
// // //         .sidebar h2 {
// // //           margin-bottom: 30px;
// // //           text-align: center;
// // //           font-size: 24px;
// // //           letter-spacing: 1px;
// // //         }
// // //         .sidebar ul {
// // //           list-style: none;
// // //           padding: 0;
// // //         }
// // //         .sidebar ul li {
// // //           margin: 20px 0;
// // //         }
// // //         .sidebar ul li a {
// // //           color: white;
// // //           text-decoration: none;
// // //           font-weight: bold;
// // //           display: block;
// // //           padding: 12px;
// // //           border-radius: 8px;
// // //           transition: background 0.3s;
// // //           font-size: 16px;
// // //           text-transform: uppercase;
// // //         }
// // //         .sidebar ul li a:hover {
// // //           background: #399aa6;
// // //         }
// // //         .dashboard-content {
// // //           flex: 1;
// // //           padding: 40px;
// // //           background: #f5fafa;
// // //         }
// // //         .dashboard-content h1 {
// // //           margin-bottom: 15px;
// // //           font-size: 28px;
// // //         }
// // //         .dashboard-content p {
// // //           font-size: 16px;
// // //           color: #555;
// // //         }
// // //         .cards {
// // //           display: grid;
// // //           grid-template-columns: repeat(2, 1fr);
// // //           gap: 20px;
// // //           margin-top: 25px;
// // //         }
// // //         .card {
// // //           background: white;
// // //           padding: 20px;
// // //           border-radius: 12px;
// // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // //           text-align: center;
// // //           font-size: 18px;
// // //           font-weight: bold;
// // //           color: #333;
// // //         }
// // //         section {
// // //           background: white;
// // //           padding: 20px;
// // //           margin-top: 25px;
// // //           border-radius: 12px;
// // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // //         }
// // //         section h2 {
// // //           margin-bottom: 15px;
// // //           font-size: 20px;
// // //           color: #333;
// // //         }
// // //         section ul {
// // //           list-style: disc inside;
// // //           padding-left: 10px;
// // //         }
// // //         section ul li {
// // //           margin: 8px 0;
// // //           font-size: 15px;
// // //           color: #444;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;
// // import React from "react";
// // import { Link, Routes, Route } from "react-router-dom";

// // // Import your pages
// // import Itineraries from "./Itineraries";
// // // You can create similar placeholders for other pages
// // import Profile from "./Profile";
// // import Destinations from "./Destinations";
// // import Bookings from "./Bookings";
// // import Expenses from "./Expenses";
// // import Activities from "./Activities";
// // import Logout from "./Logout";

// // function Dashboard() {
// //   return (
// //     <div className="dashboard-container">
// //       {/* Sidebar */}
// //       <aside className="sidebar">
// //         <h2>TRAVELMATE ✈️</h2>
// //         <ul>
// //           <li><Link to="profile">👤 PROFILE</Link></li>
// //           <li><Link to="itineraries">📌 ITINERARIES</Link></li>
// //           <li><Link to="destinations">🌍 DESTINATIONS</Link></li>
// //           <li><Link to="bookings">🛒 BOOKINGS</Link></li>
// //           <li><Link to="expenses">💰 EXPENSES</Link></li>
// //           <li><Link to="activities">🎯 ACTIVITIES</Link></li>
// //           <li><Link to="logout">🚪 LOGOUT</Link></li>
// //         </ul>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="dashboard-content">
// //         <Routes>
// //           {/* Dashboard Home */}
// //           <Route
// //             path=""
// //             element={
// //               <>
// //                 <h1>Welcome Back, Traveler 🌍</h1>
// //                 <p>Plan, manage, and track your trips with ease.</p>

// //                 {/* Summary Cards */}
// //                 <div className="cards">
// //                   <div className="card">📌 Total Itineraries: 5</div>
// //                   <div className="card">📅 Upcoming Trip: Paris</div>
// //                   <div className="card">💰 Expenses Tracked: ₹25,000</div>
// //                   <div className="card">🛒 Active Bookings: 3</div>
// //                 </div>

// //                 {/* Travel Tips Section */}
// //                 <section className="tips">
// //                   <h2>💡 TRAVEL TIPS</h2>
// //                   <ul>
// //                     <li>Always carry both digital and paper copies of important documents.</li>
// //                     <li>Track your daily expenses to avoid overspending.</li>
// //                     <li>Pack light and keep essentials in your carry-on.</li>
// //                     <li>Learn basic local phrases for smoother communication.</li>
// //                   </ul>
// //                 </section>

// //                 {/* Notifications Section */}
// //                 <section className="notifications">
// //                   <h2>🔔 NOTIFICATIONS</h2>
// //                   <ul>
// //                     <li>Your booking for Paris is confirmed ✅</li>
// //                     <li>3 days left to update your itinerary 🕒</li>
// //                     <li>New travel deals available for Europe 🌍</li>
// //                   </ul>
// //                 </section>
// //               </>
// //             }
// //           />

// //           {/* Itineraries Page */}
// //           <Route path="itineraries" element={<Itineraries />} />

// //           {/* You can add other nested routes here */}
// //           <Route path="profile" element={<Profile />} />
// //           <Route path="destinations" element={<Destinations />} />
// //           <Route path="bookings" element={<Bookings />} />
// //           <Route path="expenses" element={<Expenses />} />
// //           <Route path="activities" element={<Activities />} />
// //           <Route path="logout" element={<Logout />} />
// //         </Routes>
// //       </main>

// //       {/* Internal CSS */}
// //       <style>{`
// //         .dashboard-container {
// //           display: flex;
// //           min-height: 100vh;
// //           font-family: Arial, sans-serif;
// //         }
// //         .sidebar {
// //           width: 220px;
// //           background: #4ab7bf;
// //           color: white;
// //           padding: 25px;
// //         }
// //         .sidebar h2 {
// //           margin-bottom: 30px;
// //           text-align: center;
// //           font-size: 24px;
// //           letter-spacing: 1px;
// //         }
// //         .sidebar ul {
// //           list-style: none;
// //           padding: 0;
// //         }
// //         .sidebar ul li {
// //           margin: 20px 0;
// //         }
// //         .sidebar ul li a {
// //           color: white;
// //           text-decoration: none;
// //           font-weight: bold;
// //           display: block;
// //           padding: 12px;
// //           border-radius: 8px;
// //           transition: background 0.3s;
// //           font-size: 16px;
// //           text-transform: uppercase;
// //         }
// //         .sidebar ul li a:hover {
// //           background: #399aa6;
// //         }
// //         .dashboard-content {
// //           flex: 1;
// //           padding: 40px;
// //           background: #f5fafa;
// //         }
// //         .dashboard-content h1 {
// //           margin-bottom: 15px;
// //           font-size: 28px;
// //         }
// //         .dashboard-content p {
// //           font-size: 16px;
// //           color: #555;
// //         }
// //         .cards {
// //           display: grid;
// //           grid-template-columns: repeat(2, 1fr);
// //           gap: 20px;
// //           margin-top: 25px;
// //         }
// //         .card {
// //           background: white;
// //           padding: 20px;
// //           border-radius: 12px;
// //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// //           text-align: center;
// //           font-size: 18px;
// //           font-weight: bold;
// //           color: #333;
// //         }
// //         section {
// //           background: white;
// //           padding: 20px;
// //           margin-top: 25px;
// //           border-radius: 12px;
// //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// //         }
// //         section h2 {
// //           margin-bottom: 15px;
// //           font-size: 20px;
// //           color: #333;
// //         }
// //         section ul {
// //           list-style: disc inside;
// //           padding-left: 10px;
// //         }
// //         section ul li {
// //           margin: 8px 0;
// //           font-size: 15px;
// //           color: #444;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default Dashboard;



// import React, { useEffect, useState } from "react";
// import { Link, Routes, Route } from "react-router-dom";

// // Placeholder components for admin routes
// import Profile from "./Profile";
// import Itineraries from "./Itineraries";
// import Bookings from "./Bookings";
// import Destinations from "./Destinations";
// import Expenses from "./Expenses";
// import Activities from "./Activities";
// import Logout from "./Logout";

// function AdminDashboard() {
//   const [users, setUsers] = useState([]);
//   const [itineraries, setItineraries] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [destinations, setDestinations] = useState([]);
//   const [activities, setActivities] = useState([]);
//   const [expenses, setExpenses] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     const headers = { "Authorization": `Bearer ${token}` };

//     fetch("http://localhost:8080/api/users", { headers }).then(res => res.json()).then(setUsers).catch(console.error);
//     fetch("http://localhost:8080/api/itineraries", { headers }).then(res => res.json()).then(setItineraries).catch(console.error);
//     fetch("http://localhost:8080/api/bookings", { headers }).then(res => res.json()).then(setBookings).catch(console.error);
//     fetch("http://localhost:8080/api/destinations", { headers }).then(res => res.json()).then(setDestinations).catch(console.error);
//     fetch("http://localhost:8080/api/activities", { headers }).then(res => res.json()).then(setActivities).catch(console.error);
//     fetch("http://localhost:8080/api/expenses", { headers }).then(res => res.json()).then(setExpenses).catch(console.error);
//   }, []);

//   const Card = ({ title, children }) => (
//     <div className="card">
//       <h3>{title}</h3>
//       <p>{children}</p>
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>ADMIN PANEL</h2>
//         <ul>
//           <li><Link to="users">👥 USERS</Link></li>
//           <li><Link to="itineraries">📌 ITINERARIES</Link></li>
//           <li><Link to="bookings">📅 BOOKINGS</Link></li>
//           <li><Link to="destinations">🌍 DESTINATIONS</Link></li>
//           <li><Link to="activities">🏞️ ACTIVITIES</Link></li>
//           <li><Link to="expenses">💰 EXPENSES</Link></li>
//           <li><Link to="logout">🚪 LOGOUT</Link></li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         <Routes>
//           <Route path="" element={
//             <>
//               <h1>Welcome, Admin 👑</h1>
//               <p>Manage users, itineraries, bookings, and more.</p>

//               {/* Summary Cards */}
//               <div className="cards">
//                 <Card title="Total Users">{users.length}</Card>
//                 <Card title="Total Itineraries">{itineraries.length}</Card>
//                 <Card title="Active Bookings">{bookings.length}</Card>
//                 <Card title="Destinations">{destinations.length}</Card>
//                 <Card title="Activities">{activities.length}</Card>
//                 <Card title="Expenses Recorded">{expenses.length}</Card>
//               </div>

//               {/* Notifications Section */}
//               <section className="notifications">
//                 <h2>🔔 Notifications</h2>
//                 <ul>
//                   <li>New user registrations today ✅</li>
//                   <li>Pending booking approvals 🕒</li>
//                   <li>Expense reports to review 💰</li>
//                 </ul>
//               </section>
//             </>
//           }/>

//           {/* Nested routes */}
//           <Route path="users" element={<Profile />} />
//           <Route path="itineraries" element={<Itineraries />} />
//           <Route path="bookings" element={<Bookings />} />
//           <Route path="destinations" element={<Destinations />} />
//           <Route path="activities" element={<Activities />} />
//           <Route path="expenses" element={<Expenses />} />
//           <Route path="logout" element={<Logout />} />
//         </Routes>
//       </main>

//       {/* Inline CSS */}
//       <style>{`
//         .dashboard-container {
//           display: flex;
//           min-height: 100vh;
//           font-family: Arial, sans-serif;
//         }
//         .sidebar {
//           width: 220px;
//           background: #2c3e50;
//           color: white;
//           padding: 25px;
//         }
//         .sidebar h2 {
//           margin-bottom: 30px;
//           text-align: center;
//           font-size: 24px;
//           letter-spacing: 1px;
//         }
//         .sidebar ul {
//           list-style: none;
//           padding: 0;
//         }
//         .sidebar ul li {
//           margin: 20px 0;
//         }
//         .sidebar ul li a {
//           color: white;
//           text-decoration: none;
//           font-weight: bold;
//           display: block;
//           padding: 12px;
//           border-radius: 8px;
//           transition: background 0.3s;
//           font-size: 16px;
//           text-transform: uppercase;
//         }
//         .sidebar ul li a:hover {
//           background: #34495e;
//         }
//         .dashboard-content {
//           flex: 1;
//           padding: 40px;
//           background: #ecf0f1;
//         }
//         .dashboard-content h1 {
//           margin-bottom: 15px;
//           font-size: 28px;
//         }
//         .dashboard-content p {
//           font-size: 16px;
//           color: #555;
//         }
//         .cards {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//           margin-top: 25px;
//         }
//         .card {
//           background: white;
//           padding: 20px;
//           border-radius: 12px;
//           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//           text-align: center;
//           font-size: 18px;
//           font-weight: bold;
//           color: #333;
//         }
//         section {
//           background: white;
//           padding: 20px;
//           margin-top: 25px;
//           border-radius: 12px;
//           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//         }
//         section h2 {
//           margin-bottom: 15px;
//           font-size: 20px;
//           color: #333;
//         }
//         section ul {
//           list-style: disc inside;
//           padding-left: 10px;
//         }
//         section ul li {
//           margin: 8px 0;
//           font-size: 15px;
//           color: #444;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Placeholder components for admin routes
import Profile from "./Profile";
import Itineraries from "./Itineraries";
import Bookings from "./Bookings";
import Destinations from "./Destinations";
import Expenses from "./Expenses";
import Activities from "./Activities";
import Logout from "./Logout";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [itineraries, setItineraries] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [activities, setActivities] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const headers = { "Authorization": `Bearer ${token}` };

    fetch("http://localhost:8080/api/users", { headers }).then(res => res.json()).then(setUsers).catch(console.error);
    fetch("http://localhost:8080/api/itineraries", { headers }).then(res => res.json()).then(setItineraries).catch(console.error);
    fetch("http://localhost:8080/api/bookings", { headers }).then(res => res.json()).then(setBookings).catch(console.error);
    fetch("http://localhost:8080/api/destinations", { headers }).then(res => res.json()).then(setDestinations).catch(console.error);
    fetch("http://localhost:8080/api/activities", { headers }).then(res => res.json()).then(setActivities).catch(console.error);
    fetch("http://localhost:8080/api/expenses", { headers }).then(res => res.json()).then(setExpenses).catch(console.error);
  }, []);

  const Card = ({ title, children }) => (
    <div className="card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>ADMIN PANEL</h2>
        <ul>
          <li><Link to="users">👥 USERS</Link></li>
          <li><Link to="itineraries">📌 ITINERARIES</Link></li>
          <li><Link to="bookings">📅 BOOKINGS</Link></li>
          <li><Link to="destinations">🌍 DESTINATIONS</Link></li>
          <li><Link to="activities">🏞️ ACTIVITIES</Link></li>
          <li><Link to="expenses">💰 EXPENSES</Link></li>
          <li><Link to="logout">🚪 LOGOUT</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <Routes>
          <Route path="" element={
            <>
              <h1>Welcome, Admin 👑</h1>
              <p>Manage users, itineraries, bookings, and more.</p>

              {/* Summary Cards */}
              <div className="cards">
                <Card title="Total Users">{users.length}</Card>
                <Card title="Total Itineraries">{itineraries.length}</Card>
                <Card title="Active Bookings">{bookings.length}</Card>
                <Card title="Destinations">{destinations.length}</Card>
                <Card title="Activities">{activities.length}</Card>
                <Card title="Expenses Recorded">{expenses.length}</Card>
              </div>

              {/* Notifications Section */}
              <section className="notifications">
                <h2>🔔 Notifications</h2>
                <ul>
                  <li>New user registrations today ✅</li>
                  <li>Pending booking approvals 🕒</li>
                  <li>Expense reports to review 💰</li>
                </ul>
              </section>
            </>
          }/>

          {/* Nested routes */}
          <Route path="users" element={<Profile />} />
          {/* <Route path="itineraries" element={<Itineraries />} /> */}
          <Route path="itineraries" element={<Itineraries role="ADMIN" />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="activities" element={<Activities />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </main>

      {/* Inline CSS */}
      <style>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        .sidebar {
          width: 220px;
          background: #4ab7bf;
          color: white;
          padding: 25px;
        }
        .sidebar h2 {
          margin-bottom: 30px;
          text-align: center;
          font-size: 24px;
          letter-spacing: 1px;
        }
        .sidebar ul {
          list-style: none;
          padding: 0;
        }
        .sidebar ul li {
          margin: 20px 0;
        }
        .sidebar ul li a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          display: block;
          padding: 12px;
          border-radius: 8px;
          transition: background 0.3s;
          font-size: 16px;
          text-transform: uppercase;
        }
        .sidebar ul li a:hover {
          background: #34495e;
        }
        .dashboard-content {
          flex: 1;
          padding: 40px;
          background: #ecf0f1;
        }
        .dashboard-content h1 {
          margin-bottom: 15px;
          font-size: 28px;
        }
        .dashboard-content p {
          font-size: 16px;
          color: #555;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 25px;
        }
        .card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }
        section {
          background: white;
          padding: 20px;
          margin-top: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        section h2 {
          margin-bottom: 15px;
          font-size: 20px;
          color: #333;
        }
        section ul {
          list-style: disc inside;
          padding-left: 10px;
        }
        section ul li {
          margin: 8px 0;
          font-size: 15px;
          color: #444;
        }
      `}</style>
    </div>
  );
}

export default AdminDashboard;
