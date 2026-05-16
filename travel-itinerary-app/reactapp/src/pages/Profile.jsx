// // // import React, { useState, useEffect } from "react";

// // // function Profile() {
// // //   const [profile, setProfile] = useState(null);
// // //   const [editing, setEditing] = useState(false);

// // //   // Fetch data from Register page → (mock for now, later connect to backend)
// // //   useEffect(() => {
// // //     const registeredUser = {
// // //       // --- From Register Page ---
// // //       firstName: "John",
// // //       lastName: "Doe",
// // //       email: "john.doe@example.com",
// // //       phone: "+91 9876543210",
// // //       country: "India",

// // //       // --- Extra Profile Fields ---
// // //       nationality: "Indian",
// // //       dateOfBirth: "1995-08-15",
// // //       bio: "Travel enthusiast 🌍✈️",
// // //     };

// // //     setProfile(registeredUser);
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     setProfile({ ...profile, [e.target.name]: e.target.value });
// // //   };

// // //   const handleUpdate = (e) => {
// // //     e.preventDefault();
// // //     // API call → PUT /profile/{id}
// // //     console.log("Updated Profile:", profile);
// // //     setEditing(false);
// // //     alert("Profile updated successfully!");
// // //   };

// // //   if (!profile) return <p>Loading profile...</p>;

// // //   return (
// // //     <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-xl">
// // //       <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>

// // //       {!editing ? (
// // //         // ===== VIEW MODE =====
// // //         <div>
// // //           <div className="grid grid-cols-2 gap-4">
// // //             <p><strong>First Name:</strong> {profile.firstName}</p>
// // //             <p><strong>Last Name:</strong> {profile.lastName}</p>
// // //             <p><strong>Email:</strong> {profile.email}</p>
// // //             <p><strong>Phone:</strong> {profile.phone}</p>
// // //             <p><strong>Country:</strong> {profile.country}</p>
// // //             <p><strong>Nationality:</strong> {profile.nationality}</p>
// // //             <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
// // //             <p className="col-span-2">
// // //               <strong>Bio:</strong> {profile.bio}
// // //             </p>
// // //           </div>

// // //           <div className="flex justify-center mt-6">
// // //             <button
// // //               onClick={() => setEditing(true)}
// // //               className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
// // //             >
// // //               Edit Profile
// // //             </button>
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         // ===== EDIT MODE =====
// // //         <form onSubmit={handleUpdate}>
// // //           <div className="grid grid-cols-2 gap-4">
// // //             <input
// // //               type="text"
// // //               name="firstName"
// // //               value={profile.firstName}
// // //               onChange={handleChange}
// // //               className="p-2 border rounded"
// // //               placeholder="First Name"
// // //             />
// // //             <input
// // //               type="text"
// // //               name="lastName"
// // //               value={profile.lastName}
// // //               onChange={handleChange}
// // //               className="p-2 border rounded"
// // //               placeholder="Last Name"
// // //             />
// // //             <input
// // //               type="email"
// // //               name="email"
// // //               value={profile.email}
// // //               onChange={handleChange}
// // //               className="p-2 border rounded"
// // //               placeholder="Email"
// // //             />
// // //             <input
// // //               type="text"
// // //               name="phone"
// // //               value={profile.phone}
// // //               onChange={handleChange}
// // //               className="p-2 border rounded"
// // //               placeholder="Phone"
// // //             />
// // //             <input
// // //               type="text"
// // //               name="country"
// // //               value={profile.country}
// // //               onChange={handleChange}
// // //               className="p-2 border rounded"
// // //               placeholder="Country"
// // //             />
// // //             <input
// // //               type="text"
// // //               name="nationality"
// // //               value={profile.nationality}
// // //               onChange={handleChange}
// // //               className="p-2 border rounded"
// // //               placeholder="Nationality"
// // //             />
// // //             <input
// // //               type="date"
// // //               name="dateOfBirth"
// // //               value={profile.dateOfBirth}
// // //               onChange={handleChange}
// // //               className="p-2 border rounded"
// // //             />
// // //             <textarea
// // //               name="bio"
// // //               value={profile.bio}
// // //               onChange={handleChange}
// // //               className="p-2 border rounded col-span-2"
// // //               placeholder="Bio"
// // //             />
// // //           </div>

// // //           <div className="flex justify-center gap-4 mt-6">
// // //             <button
// // //               type="submit"
// // //               className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
// // //             >
// // //               Update Profile
// // //             </button>
// // //             <button
// // //               type="button"
// // //               onClick={() => setEditing(false)}
// // //               className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-500"
// // //             >
// // //               Cancel
// // //             </button>
// // //           </div>
// // //         </form>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default Profile;



// // import React, { useEffect, useState } from "react";

// // function Users() {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const token = localStorage.getItem("accessToken");
// //         const response = await fetch("http://localhost:8080/api/users", {
// //           headers: { "Authorization": `Bearer ${token}` }
// //         });

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch users");
// //         }

// //         const data = await response.json();
// //         setUsers(data);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   if (loading) return <p>Loading users...</p>;
// //   if (error) return <p>Error: {error}</p>;

// //   return (
// //     <div className="users-container">
// //       <h2>Registered Users</h2>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Username</th>
// //             <th>Email</th>
// //             <th>Role</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.map((user) => (
// //             <tr key={user.id}>
// //               <td>{user.username}</td>
// //               <td>{user.email}</td>
// //               <td>{user.role}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       <style>{`
// //         .users-container {
// //           background: #fff;
// //           padding: 20px;
// //           border-radius: 12px;
// //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// //         }
// //         .users-container h2 {
// //           margin-bottom: 15px;
// //           color: #333;
// //         }
// //         table {
// //           width: 100%;
// //           border-collapse: collapse;
// //         }
// //         th, td {
// //           padding: 12px;
// //           text-align: left;
// //           border-bottom: 1px solid #ddd;
// //         }
// //         th {
// //           background-color: #4ab7bf;
// //           color: white;
// //           text-transform: uppercase;
// //         }
// //         tr:hover {
// //           background-color: #f5f5f5;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default Users;

// import React, { useEffect, useState } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editUserId, setEditUserId] = useState(null);
//   const [editedData, setEditedData] = useState({ username: "", email: "", role: "" });

//   const token = localStorage.getItem("accessToken");

//   const fetchUsers = async () => {
//     try {
//       const res = await fetch("http://localhost:8080/api/users", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error("Failed to fetch users");
//       const data = await res.json();
//       setUsers(Array.isArray(data) ? data : [data]); // ensure array
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleEditClick = (user) => {
//     setEditUserId(user.id);
//     setEditedData({ username: user.username, email: user.email, role: user.role });
//   };

//   const handleCancel = () => setEditUserId(null);

//   const handleSave = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:8080/api/users/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(editedData),
//       });
//       if (!res.ok) throw new Error("Failed to update user");
//       setUsers(users.map(u => (u.id === id ? { ...u, ...editedData } : u)));
//       setEditUserId(null);
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:8080/api/users/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error("Failed to delete user");
//       setUsers(users.filter(u => u.id !== id));
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   if (loading) return <p>Loading users...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2>Registered Users</h2>
//       <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
//         <thead style={{ background: "#4ab7bf", color: "white" }}>
//           <tr>
//             <th>ID</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(u => (
//             <tr key={u.id} style={{ borderBottom: "1px solid #ddd" }}>
//               <td>{u.id}</td>
//               <td>
//                 {editUserId === u.id ? (
//                   <input
//                     value={editedData.username}
//                     onChange={(e) => setEditedData({ ...editedData, username: e.target.value })}
//                   />
//                 ) : u.username}
//               </td>
//               <td>
//                 {editUserId === u.id ? (
//                   <input
//                     value={editedData.email}
//                     onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
//                   />
//                 ) : u.email}
//               </td>
//               <td>
//                 {editUserId === u.id ? (
//                   <select
//                     value={editedData.role}
//                     onChange={(e) => setEditedData({ ...editedData, role: e.target.value })}
//                   >
//                     <option value="BASIC_TRAVELER">Basic</option>
//                     <option value="PREMIUM_TRAVELER">Premium</option>
//                     <option value="TRAVEL_AGENT">Agent</option>
//                     <option value="ADMIN">Admin</option>
//                   </select>
//                 ) : u.role}
//               </td>
//               <td>
//                 {editUserId === u.id ? (
//                   <>
//                     <button onClick={() => handleSave(u.id)}>Save</button>
//                     <button onClick={handleCancel}>Cancel</button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => handleEditClick(u)}>Edit</button>
//                     <button onClick={() => handleDelete(u.id)}>Delete</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Users;



import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("accessToken");

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(Array.isArray(data) ? data : [data]);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete user");
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="users-container">
      <h2>Registered Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-users">
                No users found
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(u.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <style>{`
        .users-container {
          padding: 40px;
          font-family: 'Arial', sans-serif;
          background: #f0f4f8;
          min-height: 100vh;
        }
        h2 {
          text-align: center;
          color: #f4f4f4ff;
          margin-bottom: 25px;
          font-size: 28px;
        }
        .users-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .users-table th, .users-table td {
          padding: 14px 20px;
          text-align: left;
        }
        .users-table thead {
          background: linear-gradient(90deg, #4ab7bf, #399aa6);
          color: white;
          font-weight: bold;
        }
        .users-table tbody tr {
          transition: background 0.3s;
        }
        .users-table tbody tr:nth-child(even) {
          background: #f9f9f9;
        }
        .users-table tbody tr:hover {
          background: #e0f7fa;
        }
        .delete-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 5px;
          background: #ff4d4d;
          color: white;
          cursor: pointer;
          font-weight: bold;
          transition: transform 0.2s, background 0.2s;
        }
        .delete-btn:hover {
          background: #e04343;
          transform: scale(1.05);
        }
        .no-users {
          text-align: center;
          padding: 20px;
          color: #777;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}

export default Users;
