// // Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const styles = {
//     navbar: {
//       display: "flex",
//       justifyContent: "flex-end",
//       alignItems: "center",
//       padding: "15px 30px",
//       backgroundColor: "#fcfeffff", // Navbar dark blue
//       position: "sticky",
//       top: 0,
//       zIndex: 1000,
//     },
//     button: {
//       padding: "10px 20px",
//       marginLeft: "15px",
//       borderRadius: "5px",
//       border: "none",
//       cursor: "pointer",
//       fontWeight: "bold",
//       textDecoration: "none",
//       color: "#0d3b66", // Text color inside button
//       backgroundColor: "#1e90ff", // White button
//       transition: "all 0.3s ease",
//     },
//   };

//   return (
//     <nav style={styles.navbar}>
//       <Link
//         to="/login"
//         style={styles.button}
//         onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
//         onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
//       >
//         Login
//       </Link>
//       <Link
//         to="/register"
//         style={styles.button}
//         onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
//         onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
//       >
//         Register
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <div className="navbar-links">
        <Link to="/login" className="nav-btn login-btn">
          Login
        </Link>
        <Link to="/register" className="nav-btn register-btn">
          Register
        </Link>
      </div>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background-color: white; /* Navbar background white */
          color: #1e90ff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .navbar-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e90ff;
        }

        .navbar-links {
          display: flex;
          gap: 10px;
        }

        .nav-btn {
          padding: 8px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          color: white;
          transition: background-color 0.3s, transform 0.2s;
        }

        .login-btn {
          background-color: #4ab7bfff; /* Blue button */
        }

        .register-btn {
          background-color: #4ab7bfff; /* Blue button */
        }

        .nav-btn:hover {
          transform: translateY(-2px);
          opacity: 0.85;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
