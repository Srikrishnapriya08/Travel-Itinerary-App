// // import React from "react";
// // import { Link } from "react-router-dom";

// // function Home() {
// //   return (
// //     <div>
// //       <h1>Travel Itinerary Planner</h1>
// //       <Link to="/add">Add Event</Link>
// //       <Link to="/view">View Events</Link>
// //     </div>
// //   );
// // }

// // export default Home;
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./Home.css";  // import CSS file

// // function Dashboard() {
// //   return (
// //     <div className="dashboard-container">
// //       {/* Header */}
// //       <header className="dashboard-header">
// //         <h1 className="dashboard-title">✈️ Travel Itinerary Dashboard</h1>
// //         <Link to="/profile" className="profile-btn">
// //           👤 My Profile
// //         </Link>
// //       </header>

// //       {/* Dashboard Cards */}
// //       <div className="cards-grid">
// //         <Link to="/itineraries" className="dashboard-card">
// //           <h2>📅 Itineraries</h2>
// //           <p>Create, view, and manage your travel itineraries.</p>
// //         </Link>

// //         <Link to="/bookings" className="dashboard-card">
// //           <h2>🏨 Bookings</h2>
// //           <p>Manage flights, hotels, and activity reservations.</p>
// //         </Link>

// //         <Link to="/destinations" className="dashboard-card">
// //           <h2>🌍 Destinations</h2>
// //           <p>Explore destinations, activities, and recommendations.</p>
// //         </Link>

// //         <Link to="/budget" className="dashboard-card">
// //           <h2>💰 Budget Tracker</h2>
// //           <p>Track expenses, budgets, and travel costs.</p>
// //         </Link>

// //         <Link to="/collaboration" className="dashboard-card">
// //           <h2>🤝 Collaboration</h2>
// //           <p>Share itineraries and collaborate with others.</p>
// //         </Link>

// //         <Link to="/admin" className="dashboard-card">
// //           <h2>⚙️ Admin Tools</h2>
// //           <p>Manage users, system settings, and analytics.</p>
// //         </Link>
// //       </div>

// //       {/* Recent Activity */}
// //       <div className="recent-activity">
// //         <h2>🔔 Recent Activity</h2>
// //         <ul>
// //           <li>✅ You booked a hotel in Paris (20 Sept)</li>
// //           <li>📅 New itinerary "Goa Trip" created</li>
// //           <li>💰 Expense added: $120 for Food</li>
// //           <li>🔔 Admin updated travel policy</li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;

// // Home.js
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./Home.css";

// // function Home() {
// //   return (
// //     <div className="home-container">
// //       {/* Hero Section */}
// //       <section className="hero">
// //         <h1>✈️ Welcome to Travel Itinerary Planner</h1>
// //         <p>Plan, track, and enjoy your trips with ease.</p>
// //         <div className="hero-buttons">
// //           <Link to="/signup" className="btn-primary">
// //             Sign Up
// //           </Link>
// //           <Link to="/signin" className="btn-secondary">
// //             Sign In
// //           </Link>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="features">
// //         <h2>Why Choose Us?</h2>
// //         <div className="features-grid">
// //           <div className="feature-card">
// //             <h3>📅 Plan Itineraries</h3>
// //             <p>Create and manage detailed travel plans.</p>
// //           </div>
// //           <div className="feature-card">
// //             <h3>🏨 Manage Bookings</h3>
// //             <p>Keep track of flights, hotels, and activities.</p>
// //           </div>
// //           <div className="feature-card">
// //             <h3>💰 Track Budget</h3>
// //             <p>Monitor expenses and control your travel budget.</p>
// //           </div>
// //           <div className="feature-card">
// //             <h3>🌍 Explore Destinations</h3>
// //             <p>Discover popular destinations and activities worldwide.</p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="home-footer">
// //         <p>© 2025 Travel Itinerary Planner. All rights reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default Home;
// // import React from "react";
// // import Navbar from "./Navbar"; // make sure path is correct
// // //import Footer from "./pages/Footer"; // make sure path is correct
// // import Footer from "../pages/Footer"; // ✅ correct


// // function Home() {
// //   return (
// //     <div>
// //       <Navbar />

// //       <div className="home-container">
// //         {/* Hero Section */}
// //         <section className="hero">
// //           <h1>✈️ Welcome to Travel Itinerary Planner</h1>
// //           <p>Plan, track, and enjoy your trips with ease.</p>
// //         </section>

// //         {/* Features Section */}
// //         <section className="features">
// //           <h2>Why Choose Us?</h2>
// //           <div className="features-grid">
// //             <div className="feature-card">
// //               <h3>📅 Plan Itineraries</h3>
// //               <p>Create and manage detailed travel plans.</p>
// //             </div>
// //             <div className="feature-card">
// //               <h3>🏨 Manage Bookings</h3>
// //               <p>Keep track of flights, hotels, and activities.</p>
// //             </div>
// //             <div className="feature-card">
// //               <h3>💰 Track Budget</h3>
// //               <p>Monitor expenses and control your travel budget.</p>
// //             </div>
// //             <div className="feature-card">
// //               <h3>🌍 Explore Destinations</h3>
// //               <p>Discover popular destinations and activities worldwide.</p>
// //             </div>
// //           </div>
// //         </section>
// //       </div>

// //       <Footer />

// //       {/* Internal CSS */}
// //       <style>{`
// //         .home-container {
// //           font-family: Arial, sans-serif;
// //           text-align: center;
// //           padding: 20px;
// //         }

// //         .hero {
// //           padding: 60px 20px;
// //           background-color: #1e90ff;
// //           color: white;
// //           border-radius: 10px;
// //           margin-bottom: 40px;
// //         }

// //         .hero h1 {
// //           font-size: 2.5rem;
// //           margin-bottom: 15px;
// //         }

// //         .hero p {
// //           font-size: 1.2rem;
// //           margin-bottom: 30px;
// //         }

// //         .hero-buttons .btn-primary,
// //         .hero-buttons .btn-secondary {
// //           padding: 12px 25px;
// //           margin: 0 10px;
// //           border-radius: 5px;
// //           text-decoration: none;
// //           font-weight: bold;
// //           cursor: pointer;
// //           display: inline-block;
// //         }

// //         .btn-primary {
// //           background-color: white;
// //           color: #1e90ff;
// //           border: none;
// //         }

// //         .btn-secondary {
// //           background-color: transparent;
// //           border: 2px solid white;
// //           color: white;
// //         }

// //         .features {
// //           margin-bottom: 40px;
// //         }

// //         .features h2 {
// //           font-size: 2rem;
// //           margin-bottom: 30px;
// //         }

// //         .features-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
// //           gap: 20px;
// //         }

// //         .feature-card {
// //           padding: 20px;
// //           border-radius: 10px;
// //           background-color: #f3f3f3;
// //           transition: transform 0.2s, box-shadow 0.2s;
// //         }

// //         .feature-card:hover {
// //           transform: translateY(-5px);
// //           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
// //         }

// //         .home-footer {
// //           margin-top: 50px;
// //           padding: 20px;
// //           background-color: #1e90ff;
// //           color: white;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default Home;
// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "../pages/Footer";

// function Home() {
//   return (
//     <div>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="hero">
//         <h1>✈️ Welcome to Travel Itinerary Planner</h1>
//         <p>Plan, track, and enjoy your trips with ease.</p>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="features">
//         <h2>Why Choose Us?</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <h3>📅 Plan Itineraries</h3>
//             <p>Create and manage detailed travel plans.</p>
//           </div>
//           <div className="feature-card">
//             <h3>🏨 Manage Bookings</h3>
//             <p>Keep track of flights, hotels, and activities.</p>
//           </div>
//           <div className="feature-card">
//             <h3>🌍 Explore Destinations</h3>
//             <p>Discover popular destinations and activities worldwide.</p>
//           </div>
//           <div className="feature-card">
//             <h3>📊 Organize Your Travel</h3>
//             <p>Keep all your bookings, itineraries, and budgets in one place.</p>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Internal CSS */}
//       <style>{`
//         body {
//           margin: 0;
//           font-family: Arial, sans-serif;
//         }

//         .hero {
//           padding: 300px 20px;
//           background-color: #4ab7bfff;
//           color: white;
//           text-align: center;
//           font-family: 'Times New Roman', Times, serif;
//           border-radius: 50px;
//           margin: 40px 20px;
//         }

//         .hero h1 {
//           font-size: 2.5rem;
//           margin-bottom: 15px;
//         }

//         .hero p {
//           font-size: 1.2rem;
//         }

//         .features {
//           margin: 40px 20px;
//           font-family: 'Times New Roman', Times, serif;
//         }

//         .features h2 {
//           text-align: center;
//           margin-bottom: 30px;
//           font-size: 2rem;
//         }

//         .features-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
//           gap: 20px;
//         }

//         @media (max-width: 768px) {
//           .features-grid {
//             grid-template-columns: 1fr; /* stack on small screens */
//           }
//         }

//         .feature-card {
//           padding: 20px;
//           border-radius: 10px;
//           background-color: #f3f3f3;
//           text-align: center;
//           transition: transform 0.2s, box-shadow 0.2s;
//           font-family :Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
//           font-size: 18px;

//         }

//         .feature-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 5px 15px rgba(0,0,0,0.2);
//         }

//         .home-footer {
//           padding: 20px;
//           background-color: #1e90ff;
//           color: white;
//           text-align: center;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* Left Image */}
          <div className="hero-image">
            <img
              src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Travel-Pictures-HD.jpg" // replace with your actual image
              alt="Travel"
            />
          </div>

          {/* Right Text */}
          <div className="hero-text">
            <h1>✈️ Welcome to Travel Itinerary Planner</h1>
            <p>Plan, track, and enjoy your trips with ease.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📅 Plan Itineraries</h3>
            <p>Create and manage detailed travel plans.</p>
          </div>
          <div className="feature-card">
            <h3>🏨 Manage Bookings</h3>
            <p>Keep track of flights, hotels, and activities.</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Explore Destinations</h3>
            <p>Discover popular destinations and activities worldwide.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Organize Your Travel</h3>
            <p>Keep all your bookings, itineraries, and budgets in one place.</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Internal CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        /* Hero Section */
        .hero {
        padding: 100px 20px;
          margin: 40px 20px;
          border-radius: 20px;
          overflow: hidden;
          background-color: #4ab7bfff; /* green background */
        }

        .hero-content {
          display: flex;
          align-items: center;
          min-height: 300px;
          gap: 20px;
        }

        .hero-image {
        
          flex: 1;
          padding-left:40px;
        }

        .hero-image img {

          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30px;
        }

        .hero-text {
          flex: 1;
          padding: 40px;
          text-align: center;
          font-family: 'Times New Roman', Times, serif;
          color: white;
        }

        .hero-text h1 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .hero-text p {
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
          }

          .hero-text {
            text-align: center;
            padding: 20px;
          }

          .hero-image img {
            width: 100%;
            height: auto;
          }
        }

        /* Features Section */
        .features {
          margin: 40px 20px;
          font-family: 'Times New Roman', Times, serif;
        }

        .features h2 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
          gap: 20px;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        .feature-card {
          padding: 20px;
          border-radius: 10px;
          background-color: #f3f3f3;
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
          font-size: 18px;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .home-footer {
          padding: 20px;
          background-color: #1e90ff;
          color: white;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;
