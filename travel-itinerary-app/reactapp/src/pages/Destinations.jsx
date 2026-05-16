// // // // import React, { useState } from "react";

// // // // function Destinations() {
// // // //   const [destinations, setDestinations] = useState([]);
// // // //   const [form, setForm] = useState({
// // // //     name: "",
// // // //     country: "",
// // // //     region: "",
// // // //     description: "",
// // // //     timeZone: "",
// // // //     bestTimeToVisit: ""
// // // //   });
// // // //   const [editIndex, setEditIndex] = useState(null);

// // // //   const handleChange = (e) => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (editIndex !== null) {
// // // //       const updated = [...destinations];
// // // //       updated[editIndex] = form;
// // // //       setDestinations(updated);
// // // //       setEditIndex(null);
// // // //     } else {
// // // //       setDestinations([...destinations, form]);
// // // //     }
// // // //     setForm({
// // // //       name: "",
// // // //       country: "",
// // // //       region: "",
// // // //       description: "",
// // // //       timeZone: "",
// // // //       bestTimeToVisit: ""
// // // //     });
// // // //   };

// // // //   const handleEdit = (index) => {
// // // //     setForm(destinations[index]);
// // // //     setEditIndex(index);
// // // //   };

// // // //   const handleDelete = (index) => {
// // // //     setDestinations(destinations.filter((_, i) => i !== index));
// // // //   };

// // // //   return (
// // // //     <div className="destination-container">
// // // //       <h1>🗺️ Destinations</h1>

// // // //       {/* Form */}
// // // //       <form onSubmit={handleSubmit} className="destination-form">
// // // //         {[
// // // //           { label: "Name", name: "name" },
// // // //           { label: "Country", name: "country" },
// // // //           { label: "Region", name: "region" },
// // // //           { label: "Description", name: "description" },
// // // //           { label: "Time Zone", name: "timeZone" },
// // // //           { label: "Best Time to Visit", name: "bestTimeToVisit" }
// // // //         ].map((field) => (
// // // //           <div className="form-row" key={field.name}>
// // // //             <label htmlFor={field.name}>{field.label}:</label>
// // // //             <input
// // // //               type="text"
// // // //               id={field.name}
// // // //               name={field.name}
// // // //               value={form[field.name]}
// // // //               onChange={handleChange}
// // // //               required
// // // //             />
// // // //           </div>
// // // //         ))}
// // // //         <button type="submit">{editIndex !== null ? "Update" : "Add"} Destination</button>
// // // //       </form>

// // // //       {/* List */}
// // // //       <div className="destination-list">
// // // //         {destinations.length === 0 ? (
// // // //           <p>No destinations added yet.</p>
// // // //         ) : (
// // // //           destinations.map((item, index) => (
// // // //             <div key={index} className="destination-card">
// // // //               <h2>{item.name}</h2>
// // // //               <p><strong>Country:</strong> {item.country}</p>
// // // //               <p><strong>Region:</strong> {item.region}</p>
// // // //               <p><strong>Description:</strong> {item.description}</p>
// // // //               <p><strong>Time Zone:</strong> {item.timeZone}</p>
// // // //               <p><strong>Best Time to Visit:</strong> {item.bestTimeToVisit}</p>
// // // //               <div className="actions">
// // // //                 <button onClick={() => handleEdit(index)}>Edit</button>
// // // //                 <button onClick={() => handleDelete(index)}>Delete</button>
// // // //               </div>
// // // //             </div>
// // // //           ))
// // // //         )}
// // // //       </div>

// // // //       {/* Styles */}
// // // //       <style>{`
// // // //         .destination-container {
// // // //           padding: 30px;
// // // //           font-family: Arial, sans-serif;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           align-items: center;
// // // //           background: #e8f0fe;
          
// // // //         }
// // // //         h1 {
// // // //           margin-bottom: 20px;
// // // //         }
// // // //         .destination-form {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           gap: 15px;
// // // //           margin-bottom: 30px;
// // // //           width: 100%;
// // // //           max-width: 600px;
// // // //           background: #e8f0fe;
// // // //           padding: 20px;
// // // //           border-radius: 12px;
// // // //         }
// // // //         .form-row {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           gap: 15px;
// // // //         }
// // // //         .form-row label {
// // // //           width: 150px;
// // // //           font-weight: bold;
// // // //         }
// // // //         .form-row input {
// // // //           padding: 10px;
// // // //           border-radius: 6px;
// // // //           border: 1px solid #ccc;
// // // //           flex: 1;
// // // //         }
// // // //         .destination-form button {
// // // //           width: 200px;
// // // //           padding: 12px;
// // // //           background: #1976d2;
// // // //           color: white;
// // // //           border: none;
// // // //           border-radius: 8px;
// // // //           cursor: pointer;
// // // //           font-size: 16px;
// // // //           align-self: center;
// // // //         }
// // // //         .destination-form button:hover {
// // // //           background: #115293;
// // // //         }
// // // //         .destination-list {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           gap: 20px;
// // // //           width: 100%;
// // // //           max-width: 600px;
// // // //         }
// // // //         .destination-card {
// // // //           background: white;
// // // //           padding: 20px;
// // // //           border-radius: 12px;
// // // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // // //         }
// // // //         .destination-card h2 {
// // // //           margin-top: 0;
// // // //         }
// // // //         .actions {
// // // //           margin-top: 15px;
// // // //           display: flex;
// // // //           gap: 10px;
// // // //         }
// // // //         .actions button {
// // // //           flex: 1;
// // // //           padding: 8px;
// // // //           border: none;
// // // //           border-radius: 6px;
// // // //           cursor: pointer;
// // // //           font-weight: bold;
// // // //         }
// // // //         .actions button:first-child {
// // // //           background: #f0ad4e;
// // // //           color: white;
// // // //         }
// // // //         .actions button:first-child:hover {
// // // //           background: #ec971f;
// // // //         }
// // // //         .actions button:last-child {
// // // //           background: #d9534f;
// // // //           color: white;
// // // //         }
// // // //         .actions button:last-child:hover {
// // // //           background: #c9302c;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Destinations;
// // // import React, { useState } from "react";

// // // function Destinations() {
// // //   const [destinations, setDestinations] = useState([]);
// // //   const [form, setForm] = useState({
// // //     name: "",
// // //     country: "",
// // //     region: "",
// // //     description: "",
// // //     timeZone: "",
// // //     bestTimeToVisit: ""
// // //   });
// // //   const [editIndex, setEditIndex] = useState(null);

// // //   const countries = ["India", "USA", "UK", "Australia", "France"];
// // //   const regions = ["North", "South", "East", "West", "Central"];
// // //   const timeZones = ["GMT", "IST", "EST", "PST", "CET"];
// // //   const bestTimes = ["Spring", "Summer", "Autumn", "Winter"];

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (editIndex !== null) {
// // //       const updated = [...destinations];
// // //       updated[editIndex] = form;
// // //       setDestinations(updated);
// // //       setEditIndex(null);
// // //     } else {
// // //       setDestinations([...destinations, form]);
// // //     }
// // //     setForm({
// // //       name: "",
// // //       country: "",
// // //       region: "",
// // //       description: "",
// // //       timeZone: "",
// // //       bestTimeToVisit: ""
// // //     });
// // //   };

// // //   const handleEdit = (index) => {
// // //     setForm(destinations[index]);
// // //     setEditIndex(index);
// // //   };

// // //   const handleDelete = (index) => {
// // //     setDestinations(destinations.filter((_, i) => i !== index));
// // //   };

// // //   return (
// // //     <div className="destination-container">
// // //       <h1>🗺️ Destinations</h1>

// // //       {/* Form */}
// // //       <form onSubmit={handleSubmit} className="destination-form">
// // //         <div className="form-row">
// // //           <label htmlFor="name">Name:</label>
// // //           <input
// // //             type="text"
// // //             id="name"
// // //             name="name"
// // //             value={form.name}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="form-row">
// // //           <label htmlFor="country">Country:</label>
// // //           <select
// // //             id="country"
// // //             name="country"
// // //             value={form.country}
// // //             onChange={handleChange}
// // //             required
// // //           >
// // //             <option value="">Select Country</option>
// // //             {countries.map((c) => (
// // //               <option key={c} value={c}>{c}</option>
// // //             ))}
// // //           </select>
// // //         </div>

// // //         <div className="form-row">
// // //           <label htmlFor="region">Region:</label>
// // //           <select
// // //             id="region"
// // //             name="region"
// // //             value={form.region}
// // //             onChange={handleChange}
// // //             required
// // //           >
// // //             <option value="">Select Region</option>
// // //             {regions.map((r) => (
// // //               <option key={r} value={r}>{r}</option>
// // //             ))}
// // //           </select>
// // //         </div>

// // //         <div className="form-row">
// // //           <label htmlFor="description">Description:</label>
// // //           <input
// // //             type="text"
// // //             id="description"
// // //             name="description"
// // //             value={form.description}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="form-row">
// // //           <label htmlFor="timeZone">Time Zone:</label>
// // //           <select
// // //             id="timeZone"
// // //             name="timeZone"
// // //             value={form.timeZone}
// // //             onChange={handleChange}
// // //             required
// // //           >
// // //             <option value="">Select Time Zone</option>
// // //             {timeZones.map((tz) => (
// // //               <option key={tz} value={tz}>{tz}</option>
// // //             ))}
// // //           </select>
// // //         </div>

// // //         <div className="form-row">
// // //           <label htmlFor="bestTimeToVisit">Best Time to Visit:</label>
// // //           <select
// // //             id="bestTimeToVisit"
// // //             name="bestTimeToVisit"
// // //             value={form.bestTimeToVisit}
// // //             onChange={handleChange}
// // //             required
// // //           >
// // //             <option value="">Select Season</option>
// // //             {bestTimes.map((bt) => (
// // //               <option key={bt} value={bt}>{bt}</option>
// // //             ))}
// // //           </select>
// // //         </div>

// // //         <button type="submit">{editIndex !== null ? "Update" : "Add"} Destination</button>
// // //       </form>

// // //       {/* List */}
// // //       <div className="destination-list">
// // //         {destinations.length === 0 ? (
// // //           <p>No destinations added yet.</p>
// // //         ) : (
// // //           destinations.map((item, index) => (
// // //             <div key={index} className="destination-card">
// // //               <h2>{item.name}</h2>
// // //               <p><strong>Country:</strong> {item.country}</p>
// // //               <p><strong>Region:</strong> {item.region}</p>
// // //               <p><strong>Description:</strong> {item.description}</p>
// // //               <p><strong>Time Zone:</strong> {item.timeZone}</p>
// // //               <p><strong>Best Time to Visit:</strong> {item.bestTimeToVisit}</p>
// // //               <div className="actions">
// // //                 <button onClick={() => handleEdit(index)}>Edit</button>
// // //                 <button onClick={() => handleDelete(index)}>Delete</button>
// // //               </div>
// // //             </div>
// // //           ))
// // //         )}
// // //       </div>

// // //       {/* Styles */}
// // //       <style>{`
// // //         .destination-container {
// // //           padding: 30px;
// // //           font-family: Arial, sans-serif;
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: center;
// // //           background: #e8f0fe;
// // //         }
// // //         h1 { margin-bottom: 20px; }
// // //         .destination-form {
// // //           display: flex;
// // //           flex-direction: column;
// // //           gap: 20px;
// // //           margin-bottom: 30px;
// // //           width: 100%;
// // //           max-width: 600px;
// // //           background: #e8f0fe;
// // //           padding: 20px;
// // //           border-radius: 12px;
// // //         }
// // //         .form-row {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 15px;
// // //         }
// // //         .form-row label { width: 150px; font-weight: bold; }
// // //         .form-row input, .form-row select {
// // //           padding: 10px;
// // //           border-radius: 6px;
// // //           border: 1px solid #ccc;
// // //           flex: 1;
// // //         }
// // //         .destination-form button {
// // //           width: 200px;
// // //           padding: 12px;
// // //           background: #1976d2;
// // //           color: white;
// // //           border: none;
// // //           border-radius: 8px;
// // //           cursor: pointer;
// // //           font-size: 16px;
// // //           align-self: center;
// // //         }
// // //         .destination-form button:hover { background: #115293; }
// // //         .destination-list { display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 600px; }
// // //         .destination-card {
// // //           background: white;
// // //           padding: 20px;
// // //           border-radius: 12px;
// // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // //         }
// // //         .destination-card h2 { margin-top: 0; }
// // //         .actions { margin-top: 15px; display: flex; gap: 10px; }
// // //         .actions button {
// // //           flex: 1;
// // //           padding: 8px;
// // //           border: none;
// // //           border-radius: 6px;
// // //           cursor: pointer;
// // //           font-weight: bold;
// // //         }
// // //         .actions button:first-child { background: #f0ad4e; color: white; }
// // //         .actions button:first-child:hover { background: #ec971f; }
// // //         .actions button:last-child { background: #d9534f; color: white; }
// // //         .actions button:last-child:hover { background: #c9302c; }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // // export default Destinations;




// // // Destinations.jsx
// // import React, { useEffect, useState } from "react";

// // const Destinations = () => {
// //   const [destinations, setDestinations] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const [form, setForm] = useState({
// //     id: "",
// //     name: "",
// //     country: "",
// //     region: "",
// //     description: "",
// //     timeZone: "",
// //     bestTimeToVisit: "",
// //   });

// //   const token = localStorage.getItem("accessToken"); // JWT from login

// //   const API_URL = "http://localhost:8080/api/destinations"; // your backend URL

// //   // Fetch all destinations
// //   const fetchDestinations = async () => {
// //     try {
// //       const res = await fetch(API_URL, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       if (!res.ok) throw new Error("Failed to fetch destinations");
// //       const data = await res.json();
// //       setDestinations(data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchDestinations();
// //   }, []);

// //   // Handle form input change
// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   // Handle add or update destination
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const method = form.id ? "PUT" : "POST";
// //       const url = form.id ? `${API_URL}/${form.id}` : API_URL;

// //       const res = await fetch(url, {
// //         method,
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify(form),
// //       });

// //       if (!res.ok) throw new Error("Failed to save destination");
// //       await fetchDestinations(); // Refresh list
// //       setForm({
// //         id: "",
// //         name: "",
// //         country: "",
// //         region: "",
// //         description: "",
// //         timeZone: "",
// //         bestTimeToVisit: "",
// //       });
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   // Handle edit
// //   const handleEdit = (dest) => {
// //     setForm(dest);
// //   };

// //   // Handle delete
// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this destination?")) return;
// //     try {
// //       const res = await fetch(`${API_URL}/${id}`, {
// //         method: "DELETE",
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       if (!res.ok) throw new Error("Failed to delete destination");
// //       fetchDestinations();
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   if (loading) return <p>Loading destinations...</p>;
// //   if (error) return <p style={{ color: "red" }}>{error}</p>;

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>Destinations</h2>

// //       <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
// //         <input
// //           name="name"
// //           placeholder="Name"
// //           value={form.name}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           name="country"
// //           placeholder="Country"
// //           value={form.country}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           name="region"
// //           placeholder="Region"
// //           value={form.region}
// //           onChange={handleChange}
// //         />
// //         <input
// //           name="description"
// //           placeholder="Description"
// //           value={form.description}
// //           onChange={handleChange}
// //         />
// //         <input
// //           name="timeZone"
// //           placeholder="Time Zone"
// //           value={form.timeZone}
// //           onChange={handleChange}
// //         />
// //         <input
// //           name="bestTimeToVisit"
// //           placeholder="Best Time To Visit"
// //           value={form.bestTimeToVisit}
// //           onChange={handleChange}
// //         />
// //         <button type="submit">{form.id ? "Update" : "Add"} Destination</button>
// //       </form>

// //       <table border="1" cellPadding="10">
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Country</th>
// //             <th>Region</th>
// //             <th>Description</th>
// //             <th>Time Zone</th>
// //             <th>Best Time To Visit</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {destinations.map((dest) => (
// //             <tr key={dest.id}>
// //               <td>{dest.name}</td>
// //               <td>{dest.country}</td>
// //               <td>{dest.region}</td>
// //               <td>{dest.description}</td>
// //               <td>{dest.timeZone}</td>
// //               <td>{dest.bestTimeToVisit}</td>
// //               <td>
// //                 <button onClick={() => handleEdit(dest)}>Edit</button>
// //                 <button onClick={() => handleDelete(dest.id)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Destinations;



// import React, { useEffect, useState } from "react";

// const Destinations = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [form, setForm] = useState({
//     id: "",
//     name: "",
//     country: "",
//     region: "",
//     description: "",
//     timeZone: "",
//     bestTimeToVisit: "",
//   });

//   const token = localStorage.getItem("accessToken"); // JWT from login
//   const API_URL = "http://localhost:8080/api/destinations"; // backend URL

//   // Fetch all destinations
//   const fetchDestinations = async () => {
//     try {
//       const res = await fetch(API_URL, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error("Failed to fetch destinations");
//       const data = await res.json();
//       setDestinations(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDestinations();
//   }, []);

//   // Handle form input change
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Handle add or update destination
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const method = form.id ? "PUT" : "POST";
//       const url = form.id ? `${API_URL}/${form.id}` : API_URL;

//       const res = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error("Failed to save destination");
//       await fetchDestinations();
//       setForm({
//         id: "",
//         name: "",
//         country: "",
//         region: "",
//         description: "",
//         timeZone: "",
//         bestTimeToVisit: "",
//       });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleEdit = (dest) => {
//     setForm(dest);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this destination?")) return;
//     try {
//       const res = await fetch(`${API_URL}/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error("Failed to delete destination");
//       fetchDestinations();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading destinations...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h2 style={{ marginBottom: "20px" }}>Destinations</h2>

//       <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
//         {["name", "country", "region", "description", "timeZone", "bestTimeToVisit"].map((field) => (
//           <div key={field} style={{ marginBottom: "10px" }}>
//             <input
//               name={field}
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
//               value={form[field]}
//               onChange={handleChange}
//               required={field === "name" || field === "country"}
//               style={{
//                 width: "100%",
//                 padding: "8px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>
//         ))}
//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             borderRadius: "5px",
//             border: "none",
//             backgroundColor: "#007BFF",
//             color: "#fff",
//             cursor: "pointer",
//           }}
//         >
//           {form.id ? "Update" : "Add"} Destination
//         </button>
//       </form>

//       {destinations.map((dest) => (
//         <div
//           key={dest.id}
//           style={{
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             padding: "15px",
//             marginBottom: "15px",
//             boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//             backgroundColor: "#f9f9f9",
//           }}
//         >
//           <p><strong>Name:</strong> {dest.name}</p>
//           <p><strong>Country:</strong> {dest.country}</p>
//           <p><strong>Region:</strong> {dest.region}</p>
//           <p><strong>Description:</strong> {dest.description}</p>
//           <p><strong>Time Zone:</strong> {dest.timeZone}</p>
//           <p><strong>Best Time To Visit:</strong> {dest.bestTimeToVisit}</p>
//           <div style={{ marginTop: "10px" }}>
//             <button
//               onClick={() => handleEdit(dest)}
//               style={{
//                 marginRight: "10px",
//                 padding: "5px 10px",
//                 borderRadius: "5px",
//                 border: "none",
//                 backgroundColor: "#28a745",
//                 color: "#fff",
//                 cursor: "pointer",
//               }}
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => handleDelete(dest.id)}
//               style={{
//                 padding: "5px 10px",
//                 borderRadius: "5px",
//                 border: "none",
//                 backgroundColor: "#dc3545",
//                 color: "#fff",
//                 cursor: "pointer",
//               }}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Destinations;



import React, { useEffect, useState } from "react";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    id: "",
    name: "",
    country: "",
    region: "",
    description: "",
    timeZone: "",
    bestTimeToVisit: "",
  });

  const token = localStorage.getItem("accessToken");
  const API_URL = "http://localhost:8080/api/destinations";

  const fetchDestinations = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch destinations");
      const data = await res.json();
      setDestinations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = form.id ? "PUT" : "POST";
      const url = form.id ? `${API_URL}/${form.id}` : API_URL;

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to save destination");
      await fetchDestinations();
      setForm({
        id: "",
        name: "",
        country: "",
        region: "",
        description: "",
        timeZone: "",
        bestTimeToVisit: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (dest) => setForm(dest);
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this destination?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete destination");
      fetchDestinations();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading destinations...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", maxWidth: "700px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Destinations</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginBottom: "30px",
          background: "#f0f8ff",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        {["name", "country", "region", "description", "timeZone", "bestTimeToVisit"].map((field) => (
          <div
            key={field}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <label
              htmlFor={field}
              style={{
                width: "150px",
                fontWeight: "bold",
              }}
            >
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}:
            </label>
            <input
              id={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              required={field === "name" || field === "country"}
              style={{
                flex: 1,
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
          </div>
        ))}
        <button
          type="submit"
          style={{
            width: "200px",
            padding: "10px 0",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            alignSelf: "center",
          }}
        >
          {form.id ? "Update" : "Add"} Destination
        </button>
      </form>

      {destinations.map((dest) => (
        <div
          key={dest.id}
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
            marginBottom: "15px",
          }}
        >
          <p><strong>Name:</strong> {dest.name}</p>
          <p><strong>Country:</strong> {dest.country}</p>
          <p><strong>Region:</strong> {dest.region}</p>
          <p><strong>Description:</strong> {dest.description}</p>
          <p><strong>Time Zone:</strong> {dest.timeZone}</p>
          <p><strong>Best Time To Visit:</strong> {dest.bestTimeToVisit}</p>

          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <button
              onClick={() => handleEdit(dest)}
              style={{
                flex: 1,
                padding: "8px 0",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                backgroundColor: "#28a745",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(dest.id)}
              style={{
                flex: 1,
                padding: "8px 0",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                backgroundColor: "#dc3545",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
