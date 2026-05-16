// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     // ✅ Fake authentication (replace with API later)
// //     // if (email === "user@test.com" && password === "1234") {
// //       localStorage.setItem("isLoggedIn", "true"); // save session
// //       navigate("/dashboard"); // ✅ redirect to dashboard
// //     // } else {
// //     //   alert("Invalid email or password!");
// //     // }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <div className="auth-box">
// //         <h2>Login</h2>
// //         <form onSubmit={handleLogin}>
// //           <input type="email" placeholder="Email" required />
// //           <input type="password" placeholder="Password" required />
// //           <button type="submit">Login</button>
// //         </form>
// //         <p>
// //           Don’t have an account? <a href="/register">Register</a>
// //         </p>
// //       </div>

// //       {/* Internal CSS */}
// //       <style>{`
// //         .auth-container {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           height: 100vh;
// //           background: #e4f9fcff;
// //           font-family: Arial, sans-serif;
        
// //         }
// //         .auth-box {
// //           background: white;
// //           padding: 35px;
// //           border-radius: 15px;
// //           box-shadow: 0 5px 15px rgba(0,0,0,0.2);
// //           width: 350px;
// //           text-align: center;
// //           padding-right: 55px;

// //         }
// //         .auth-box h2 {
// //           margin-bottom: 20px;
// //           color: #333;
// //         }
// //         .auth-box input {
// //           width: 100%;
// //           padding: 12px;
// //           margin: 10px 0;
// //           border: 1px solid #ccc;
// //           border-radius: 8px;
// //         }
// //         .auth-box button {
          
// //           padding: 12px;
// //           background: #4ab7bf;
// //           color: white;
// //           font-size: 16px;
// //           border: none;
// //           border-radius: 8px;
// //           cursor: pointer;
// //           margin: 12px auto 8px auto;
// //           padding: 12px 100px;
          
          
// //         }
// //         .auth-box button:hover {
// //           background: #399aa6;
// //         }
// //         .auth-box p {
// //           margin-top: 3px;
// //           font-size: 14px;
// //         }
// //         .auth-box a {
// //           color: #4ab7bf;
// //           text-decoration: none;
// //           font-weight: bold;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState(""); // backend expects "username"
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const payload = {
//       username: username,
//       password: password,
//     };

//     try {
//       const response = await fetch("http://localhost:8080/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         localStorage.setItem("isLoggedIn", "true");
//         navigate("/dashboard");
//       } else {
//         alert("❌ Invalid username or password!");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("⚠️ Server error! Please try again.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//         <p>
//           Don’t have an account? <a href="/register">Register</a>
//         </p>
//       </div>

//       <style>{`
//         .auth-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background: #e4f9fcff;
//           font-family: Arial, sans-serif;
//         }
//         .auth-box {
//           background: white;
//           padding: 35px;
//           border-radius: 15px;
//           box-shadow: 0 5px 15px rgba(0,0,0,0.2);
//           width: 350px;
//           text-align: center;
//           padding-right: 55px;
//         }
//         .auth-box h2 {
//           margin-bottom: 20px;
//           color: #333;
//         }
//         .auth-box input {
//           width: 100%;
//           padding: 12px;
//           margin: 10px 0;
//           border: 1px solid #ccc;
//           border-radius: 8px;
//         }
//         .auth-box button {
//           padding: 12px 100px;
//           background: #4ab7bf;
//           color: white;
//           font-size: 16px;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           margin: 12px auto 8px auto;
//         }
//         .auth-box button:hover {
//           background: #399aa6;
//         }
//         .auth-box p {
//           margin-top: 3px;
//           font-size: 14px;
//         }
//         .auth-box a {
//           color: #4ab7bf;
//           text-decoration: none;
//           font-weight: bold;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Login;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState(""); // backend expects "username"
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = { username, password };

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        alert(text);
        return;
      }

      const data = await response.json();

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("isLoggedIn", "true");

      const base64Url = data.accessToken.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      const payloadData = JSON.parse(jsonPayload);
      const role = payloadData.role;

      // Role-based navigation
      switch (role) {
        case "ROLE_ADMIN":
          navigate("/dashboard");
          break;
        case "ROLE_BASIC_TRAVELER":
          navigate("/basic");
          break;
        case "ROLE_PREMIUM_TRAVELER":
          navigate("/premium");
          break;
        case "ROLE_TRAVEL_AGENT":
          navigate("/travelagent");
          break;
        default:
          navigate("/login");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("⚠️ Server error! Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>

      <style>{`
        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #e4f9fcff;
          font-family: Arial, sans-serif;
        }
        .auth-box {
          background: white;
          padding: 35px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          width: 350px;
          text-align: center;
          padding-right: 55px;
        }
        .auth-box h2 {
          margin-bottom: 20px;
          color: #333;
        }
        .auth-box input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        .auth-box button {
          padding: 12px 100px;
          background: #4ab7bf;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin: 12px auto 8px auto;
        }
        .auth-box button:hover {
          background: #399aa6;
        }
        .auth-box p {
          margin-top: 3px;
          font-size: 14px;
        }
        .auth-box a {
          color: #4ab7bf;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default Login;
