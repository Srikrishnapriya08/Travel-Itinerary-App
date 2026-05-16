// // // import React from "react";

// // // function Register() {
// // //   return (
// // //     <div className="auth-container">
// // //       <div className="auth-box">
// // //         <h2>Register</h2>
// // //         <form>
// // //           <input type="text" placeholder="Full Name" required />
// // //           <input type="email" placeholder="Email" required />
// // //           <input type="password" placeholder="Password" required />
// // //           <input type="password" placeholder="Confirm Password" required />
// // //           <button type="submit">Register</button>
// // //         </form>
// // //         <p>
// // //           Already have an account? <a href="/login">Login</a>
// // //         </p>
// // //       </div>

// // //       {/* Internal CSS */}
// // //       <style>{`
// // //         .auth-container {
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //           height: 100vh;
// // //           background: #e4f9fcff;
// // //           font-family: Arial, sans-serif;
// // //         }
// // //         .auth-box {
// // //           background: white;
// // //           padding: 30px;
// // //           border-radius: 15px;
// // //           box-shadow: 0 5px 15px rgba(0,0,0,0.2);
// // //           width: 350px;
// // //           text-align: center;
// // //           padding-right: 55px;
// // //         }
// // //         .auth-box h2 {
// // //           margin-bottom: 20px;
// // //           color: #333;
// // //         }
// // //         .auth-box input {
// // //           width: 100%;
// // //           padding: 12px;
// // //           margin: 10px 0;
// // //           border: 1px solid #ccc;
// // //           border-radius: 8px;
          
          
// // //         }
// // //         .auth-box button {
          
// // //           padding: 12px;
// // //           background: #4ab7bf;
// // //           color: white;
// // //           font-size: 16px;
// // //           border: none;
// // //           border-radius: 8px;
// // //           cursor: pointer;
// // //           margin: 10px 0;
// // //           text-align: center;
// // //           margin: 12px auto 8px auto;
// // //           padding: 12px 100px;
          
// // //         }
       
// // //         .auth-box button:hover {
// // //           background: #399aa6;
// // //         }
// // //         .auth-box p {
// // //           margin-top: 3px;
// // //           font-size: 14px;
// // //         }
// // //         .auth-box a {
// // //           color: #4ab7bf;
// // //           text-decoration: none;
// // //           font-weight: bold;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // // export default Register;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Register() {
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({
// //     fullName: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: ""
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleRegister = (e) => {
// //     e.preventDefault();

// //     // ✅ Simple password confirmation check
// //     if (form.password !== form.confirmPassword) {
// //       alert("Passwords do not match!");
// //       return;
// //     }

// //     // Save the user details to localStorage (for demo purposes)
// //     const users = JSON.parse(localStorage.getItem("users") || "[]");
// //     users.push(form);
// //     localStorage.setItem("users", JSON.stringify(users));

// //     // Redirect to Login page
// //     navigate("/login");
// //   };

// //   return (
// //     <div className="auth-container">
// //       <div className="auth-box">
// //         <h2>Register</h2>
// //         <form onSubmit={handleRegister}>
// //           <input
// //             type="text"
// //             name="fullName"
// //             placeholder="Full Name"
// //             value={form.fullName}
// //             onChange={handleChange}
// //             required
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={form.email}
// //             onChange={handleChange}
// //             required
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={form.password}
// //             onChange={handleChange}
// //             required
// //           />
// //           <input
// //             type="password"
// //             name="confirmPassword"
// //             placeholder="Confirm Password"
// //             value={form.confirmPassword}
// //             onChange={handleChange}
// //             required
// //           />
// //           <button type="submit">Register</button>
// //         </form>
// //         <p>
// //           Already have an account? <a href="/login">Login</a>
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
// //           padding: 30px;
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
// //           padding: 12px 100px;
// //           background: #4ab7bf;
// //           color: white;
// //           font-size: 16px;
// //           border: none;
// //           border-radius: 8px;
// //           cursor: pointer;
// //           margin: 12px auto 8px auto;
// //           display: block;
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

// // export default Register;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "GUEST", // default role
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault(); // ✅ stop browser from sending GET /register

//     if (form.password !== form.confirmPassword) {
//       setMessage("⚠️ Passwords do not match!");
//       return;
//     }

//     // ✅ Payload must match your backend UserEntity
//     const payload = {
//       username: form.fullName,
//       email: form.email,
//       password: form.password,
//       role: form.role,
//     };

//     console.log("📤 Sending to backend:", payload);

//     try {
//       const response = await fetch("http://localhost:8080/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const responseText = await response.text();

//       if (response.ok) {
//         setMessage("✅ Registration successful!");
//         setTimeout(() => {
//           navigate("/login"); // redirect after success
//         }, 1500);
//       } else {
//         setMessage(responseText || "❌ Registration failed!");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setMessage("⚠️ Something went wrong! Please try again.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>Register</h2>

//         {/* 🚫 No action attribute → avoids GET /register */}
//         <form onSubmit={handleRegister}>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={form.fullName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             required
//           />

//           <select name="role" value={form.role} onChange={handleChange} required>
//             <option value="GUEST">Guest</option>
//             <option value="BASIC_TRAVELER">Basic Traveler</option>
//             <option value="PREMIUM_TRAVELER">Premium Traveler</option>
//             <option value="TRAVEL_AGENT">Travel Agent</option>
//             <option value="ADMIN">Admin</option>
//           </select>

//           <button type="submit">Register</button>
//         </form>

//         {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}

//         <p>
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>

//       {/* Inline CSS */}
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
//           padding: 30px;
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
//         .auth-box input, .auth-box select {
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
//           display: block;
          
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

// export default Register;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "ROLE_GUEST", // default role
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("⚠️ Passwords do not match!");
      return;
    }

    // ✅ Payload matches UserDTO
    const payload = {
      username: form.fullName,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
      role: form.role,
    };

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();

      if (response.ok) {
        setMessage("✅ Registration successful!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setMessage(responseText || "❌ Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("⚠️ Something went wrong! Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <select name="role" value={form.role} onChange={handleChange} required>
            <option value="ROLE_GUEST">Select Role</option>
            <option value="ROLE_BASIC_TRAVELER">Basic Traveler</option>
            <option value="ROLE_PREMIUM_TRAVELER">Premium Traveler</option>
            <option value="ROLE_TRAVEL_AGENT">Travel Agent</option>
            <option value="ROLE_ADMIN">Admin</option>
          </select>

          <button type="submit">Register</button>
        </form>

        {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}

        <p>
          Already have an account? <a href="/login">Login</a>
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
          padding: 30px;
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
        .auth-box input, .auth-box select {
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
          display: block;
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

export default Register;
