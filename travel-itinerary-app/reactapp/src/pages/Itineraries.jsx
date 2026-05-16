// // // // // // import React, { useState } from "react";

// // // // // // function Itineraries() {
// // // // // //   const [itineraries, setItineraries] = useState([]);
// // // // // //   const [form, setForm] = useState({
// // // // // //     tripName: "",
// // // // // //     description: "",
// // // // // //     destination: "",
// // // // // //     startDate: "",
// // // // // //     endDate: "",
// // // // // //     budget: ""
// // // // // //   });
// // // // // //   const [editIndex, setEditIndex] = useState(null);

// // // // // //   const handleChange = (e) => {
// // // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // // //   };

// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (editIndex !== null) {
// // // // // //       // Update existing
// // // // // //       const updated = [...itineraries];
// // // // // //       updated[editIndex] = form;
// // // // // //       setItineraries(updated);
// // // // // //       setEditIndex(null);
// // // // // //     } else {
// // // // // //       // Add new
// // // // // //       setItineraries([...itineraries, form]);
// // // // // //     }
// // // // // //     setForm({
// // // // // //       tripName: "",
// // // // // //       description: "",
// // // // // //       destination: "",
// // // // // //       startDate: "",
// // // // // //       endDate: "",
// // // // // //       budget: ""
// // // // // //     });
// // // // // //   };

// // // // // //   const handleEdit = (index) => {
// // // // // //     setForm(itineraries[index]);
// // // // // //     setEditIndex(index);
// // // // // //   };

// // // // // //   const handleDelete = (index) => {
// // // // // //     const updated = itineraries.filter((_, i) => i !== index);
// // // // // //     setItineraries(updated);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="itinerary-container">
// // // // // //       <h1>📌 My Itineraries</h1>

// // // // // //       {/* Form to add/update itinerary */}
// // // // // //       <form onSubmit={handleSubmit} className="itinerary-form">
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           name="tripName"
// // // // // //           placeholder="Trip Name"
// // // // // //           value={form.tripName}
// // // // // //           onChange={handleChange}
// // // // // //           required
// // // // // //         />
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           name="description"
// // // // // //           placeholder="Description"
// // // // // //           value={form.description}
// // // // // //           onChange={handleChange}
// // // // // //           required
// // // // // //         />
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           name="destination"
// // // // // //           placeholder="Destination"
// // // // // //           value={form.destination}
// // // // // //           onChange={handleChange}
// // // // // //           required
// // // // // //         />
// // // // // //         <input
// // // // // //           type="date"
// // // // // //           name="startDate"
// // // // // //           value={form.startDate}
// // // // // //           onChange={handleChange}
// // // // // //           required
// // // // // //         />
// // // // // //         <input
// // // // // //           type="date"
// // // // // //           name="endDate"
// // // // // //           value={form.endDate}
// // // // // //           onChange={handleChange}
// // // // // //           required
// // // // // //         />
// // // // // //         <input
// // // // // //           type="number"
// // // // // //           name="budget"
// // // // // //           placeholder="Budget"
// // // // // //           value={form.budget}
// // // // // //           onChange={handleChange}
// // // // // //           required
// // // // // //         />
// // // // // //         <button type="submit">{editIndex !== null ? "Update" : "Add"} Itinerary</button>
// // // // // //       </form>

// // // // // //       {/* Itineraries List */}
// // // // // //       <div className="itinerary-list">
// // // // // //         {itineraries.length === 0 ? (
// // // // // //           <p>No itineraries added yet.</p>
// // // // // //         ) : (
// // // // // //           itineraries.map((item, index) => (
// // // // // //             <div key={index} className="itinerary-card">
// // // // // //               <h2>{item.tripName}</h2>
// // // // // //               <p><strong>Description:</strong> {item.description}</p>
// // // // // //               <p><strong>Destination:</strong> {item.destination}</p>
// // // // // //               <p><strong>Start:</strong> {item.startDate}</p>
// // // // // //               <p><strong>End:</strong> {item.endDate}</p>
// // // // // //               <p><strong>Budget:</strong> ₹{item.budget}</p>
// // // // // //               <div className="actions">
// // // // // //                 <button onClick={() => handleEdit(index)}>Edit</button>
// // // // // //                 <button onClick={() => handleDelete(index)}>Delete</button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))
// // // // // //         )}
// // // // // //       </div>

// // // // // //       {/* Internal CSS */}
// // // // // //       <style>{`
// // // // // //         .itinerary-container {
// // // // // //           padding: 30px;
// // // // // //           font-family: Arial, sans-serif;
// // // // // //         }
// // // // // //         h1 {
// // // // // //           margin-bottom: 20px;
// // // // // //         }
// // // // // //         .itinerary-form {
// // // // // //           display: grid;
// // // // // //           grid-template-columns: 1fr 1fr;
// // // // // //           gap: 15px;
// // // // // //           margin-bottom: 30px;
// // // // // //         }
// // // // // //         .itinerary-form input {
// // // // // //           padding: 10px;
// // // // // //           border-radius: 6px;
// // // // // //           border: 1px solid #ccc;
// // // // // //         }
// // // // // //         .itinerary-form button {
// // // // // //           grid-column: span 2;
// // // // // //           padding: 12px;
// // // // // //           background: #4ab7bf;
// // // // // //           color: white;
// // // // // //           border: none;
// // // // // //           border-radius: 8px;
// // // // // //           cursor: pointer;
// // // // // //           font-size: 16px;
// // // // // //         }
// // // // // //         .itinerary-form button:hover {
// // // // // //           background: #399aa6;
// // // // // //         }
// // // // // //         .itinerary-list {
// // // // // //           display: grid;
// // // // // //           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// // // // // //           gap: 20px;
// // // // // //         }
// // // // // //         .itinerary-card {
// // // // // //           background: white;
// // // // // //           padding: 20px;
// // // // // //           border-radius: 12px;
// // // // // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // // // // //         }
// // // // // //         .itinerary-card h2 {
// // // // // //           margin-top: 0;
// // // // // //         }
// // // // // //         .actions {
// // // // // //           margin-top: 15px;
// // // // // //           display: flex;
// // // // // //           gap: 10px;
// // // // // //         }
// // // // // //         .actions button {
// // // // // //           flex: 1;
// // // // // //           padding: 8px;
// // // // // //           border: none;
// // // // // //           border-radius: 6px;
// // // // // //           cursor: pointer;
// // // // // //           font-weight: bold;
// // // // // //         }
// // // // // //         .actions button:first-child {
// // // // // //           background: #f0ad4e;
// // // // // //           color: white;
// // // // // //         }
// // // // // //         .actions button:first-child:hover {
// // // // // //           background: #ec971f;
// // // // // //         }
// // // // // //         .actions button:last-child {
// // // // // //           background: #d9534f;
// // // // // //           color: white;
// // // // // //         }
// // // // // //         .actions button:last-child:hover {
// // // // // //           background: #c9302c;
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Itineraries;
// // // // // import React, { useState } from "react";

// // // // // function Itineraries() {
// // // // //   const [itineraries, setItineraries] = useState([]);
// // // // //   const [form, setForm] = useState({
// // // // //     tripName: "",
// // // // //     description: "",
// // // // //     destination: "",
// // // // //     startDate: "",
// // // // //     endDate: "",
// // // // //     budget: ""
// // // // //   });
// // // // //   const [editIndex, setEditIndex] = useState(null);

// // // // //   const handleChange = (e) => {
// // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     if (editIndex !== null) {
// // // // //       const updated = [...itineraries];
// // // // //       updated[editIndex] = form;
// // // // //       setItineraries(updated);
// // // // //       setEditIndex(null);
// // // // //     } else {
// // // // //       setItineraries([...itineraries, form]);
// // // // //     }
// // // // //     setForm({
// // // // //       tripName: "",
// // // // //       description: "",
// // // // //       destination: "",
// // // // //       startDate: "",
// // // // //       endDate: "",
// // // // //       budget: ""
// // // // //     });
// // // // //   };

// // // // //   const handleEdit = (index) => {
// // // // //     setForm(itineraries[index]);
// // // // //     setEditIndex(index);
// // // // //   };

// // // // //   const handleDelete = (index) => {
// // // // //     setItineraries(itineraries.filter((_, i) => i !== index));
// // // // //   };

// // // // //   return (
// // // // //     <div className="itinerary-container">
// // // // //       <h1>📌 My Itineraries</h1>

// // // // //       {/* Form */}
// // // // //       <form onSubmit={handleSubmit} className="itinerary-form">
// // // // //         <div className="form-row">
// // // // //           <label htmlFor="tripName">Trip Name:</label>
// // // // //           <input type="text" id="tripName" name="tripName" value={form.tripName} onChange={handleChange} required />
// // // // //         </div>

// // // // //         <div className="form-row">
// // // // //           <label htmlFor="description">Description:</label>
// // // // //           <input type="text" id="description" name="description" value={form.description} onChange={handleChange} required />
// // // // //         </div>

// // // // //         <div className="form-row">
// // // // //           <label htmlFor="destination">Destination:</label>
// // // // //           <input type="text" id="destination" name="destination" value={form.destination} onChange={handleChange} required />
// // // // //         </div>

// // // // //         <div className="form-row">
// // // // //           <label htmlFor="startDate">Start Date:</label>
// // // // //           <input type="date" id="startDate" name="startDate" value={form.startDate} onChange={handleChange} required />
// // // // //         </div>

// // // // //         <div className="form-row">
// // // // //           <label htmlFor="endDate">End Date:</label>
// // // // //           <input type="date" id="endDate" name="endDate" value={form.endDate} onChange={handleChange} required />
// // // // //         </div>

// // // // //         <div className="form-row">
// // // // //           <label htmlFor="budget">Budget:</label>
// // // // //           <input type="number" id="budget" name="budget" value={form.budget} onChange={handleChange} required />
// // // // //         </div>

// // // // //         <button type="submit">{editIndex !== null ? "Update" : "Add"} Itinerary</button>
// // // // //       </form>

// // // // //       {/* List */}
// // // // //       <div className="itinerary-list">
// // // // //         {itineraries.length === 0 ? (
// // // // //           <p>No itineraries added yet.</p>
// // // // //         ) : (
// // // // //           itineraries.map((item, index) => (
// // // // //             <div key={index} className="itinerary-card">
// // // // //               <h2>{item.tripName}</h2>
// // // // //               <p><strong>Description:</strong> {item.description}</p>
// // // // //               <p><strong>Destination:</strong> {item.destination}</p>
// // // // //               <p><strong>Start Date:</strong> {item.startDate}</p>
// // // // //               <p><strong>End Date:</strong> {item.endDate}</p>
// // // // //               <p><strong>Budget:</strong> ₹{item.budget}</p>
// // // // //               <div className="actions">
// // // // //                 <button onClick={() => handleEdit(index)}>Edit</button>
// // // // //                 <button onClick={() => handleDelete(index)}>Delete</button>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Styles */}
// // // // //       <style>{`
// // // // //         .itinerary-container {
// // // // //           padding: 30px;
// // // // //           font-family: Arial, sans-serif;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           align-items: center; /* Center everything horizontally */
// // // // //         }
// // // // //         h1 {
// // // // //           margin-bottom: 20px;
// // // // //         }
// // // // //         .itinerary-form {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           gap: 15px;
// // // // //           margin-bottom: 30px;
// // // // //           width: 100%;
// // // // //           max-width: 400px; /* Limit form width */
// // // // //         }
// // // // //         .form-row {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           gap: 10px;
// // // // //         }
// // // // //         .form-row label {
// // // // //           width: 120px;
// // // // //           font-weight: bold;
// // // // //         }
// // // // //         .form-row input {
// // // // //           padding: 8px;
// // // // //           border-radius: 6px;
// // // // //           border: 1px solid #ccc;
// // // // //           font-size: 14px;
// // // // //           flex: 1; /* Input takes remaining space */
// // // // //         }
// // // // //         .itinerary-form button {
// // // // //           width: 150px;
// // // // //           padding: 10px;
// // // // //           margin: 0 auto;
// // // // //           background: #4ab7bf;
// // // // //           color: white;
// // // // //           border: none;
// // // // //           border-radius: 8px;
// // // // //           cursor: pointer;
// // // // //           font-size: 16px;
// // // // //         }
// // // // //         .itinerary-form button:hover {
// // // // //           background: #399aa6;
// // // // //         }
// // // // //         .itinerary-list {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           gap: 20px;
// // // // //           width: 100%;
// // // // //           max-width: 400px; /* Cards same width as form */
// // // // //           align-items: center; /* Center cards horizontally */
// // // // //         }
// // // // //         .itinerary-card {
// // // // //           background: white;
// // // // //           padding: 20px;
// // // // //           border-radius: 12px;
// // // // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // // // //           width: 100%;
// // // // //         }
// // // // //         .itinerary-card h2 {
// // // // //           margin-top: 0;
// // // // //         }
// // // // //         .actions {
// // // // //           margin-top: 15px;
// // // // //           display: flex;
// // // // //           gap: 10px;
// // // // //         }
// // // // //         .actions button {
// // // // //           flex: 1;
// // // // //           padding: 8px;
// // // // //           border: none;
// // // // //           border-radius: 6px;
// // // // //           cursor: pointer;
// // // // //           font-weight: bold;
// // // // //         }
// // // // //         .actions button:first-child {
// // // // //           background: #f0ad4e;
// // // // //           color: white;
// // // // //         }
// // // // //         .actions button:first-child:hover {
// // // // //           background: #ec971f;
// // // // //         }
// // // // //         .actions button:last-child {
// // // // //           background: #d9534f;
// // // // //           color: white;
// // // // //         }
// // // // //         .actions button:last-child:hover {
// // // // //           background: #c9302c;
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Itineraries;
// // // // import React, { useState } from "react";

// // // // function Itineraries() {
// // // //   const [itineraries, setItineraries] = useState([]);
// // // //   const [form, setForm] = useState({
// // // //     tripName: "",
// // // //     description: "",
// // // //     destination: "",
// // // //     startDate: "",
// // // //     endDate: "",
// // // //     budget: ""
// // // //   });
// // // //   const [editIndex, setEditIndex] = useState(null);

// // // //   const handleChange = (e) => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (editIndex !== null) {
// // // //       const updated = [...itineraries];
// // // //       updated[editIndex] = form;
// // // //       setItineraries(updated);
// // // //       setEditIndex(null);
// // // //     } else {
// // // //       setItineraries([...itineraries, form]);
// // // //     }
// // // //     setForm({
// // // //       tripName: "",
// // // //       description: "",
// // // //       destination: "",
// // // //       startDate: "",
// // // //       endDate: "",
// // // //       budget: ""
// // // //     });
// // // //   };

// // // //   const handleEdit = (index) => {
// // // //     setForm(itineraries[index]);
// // // //     setEditIndex(index);
// // // //   };

// // // //   const handleDelete = (index) => {
// // // //     setItineraries(itineraries.filter((_, i) => i !== index));
// // // //   };

// // // //   return (
// // // //     <div className="itinerary-container">
// // // //       <h1>📌 My Itineraries</h1>

// // // //       {/* Form */}
// // // //       <form onSubmit={handleSubmit} className="itinerary-form">
// // // //         <div className="form-row">
// // // //           <label htmlFor="tripName">Trip Name:</label>
// // // //           <input type="text" id="tripName" name="tripName" value={form.tripName} onChange={handleChange} required />
// // // //         </div>

// // // //         <div className="form-row">
// // // //           <label htmlFor="description">Description:</label>
// // // //           <input type="text" id="description" name="description" value={form.description} onChange={handleChange} required />
// // // //         </div>

// // // //         <div className="form-row">
// // // //           <label htmlFor="destination">Destination:</label>
// // // //           <input type="text" id="destination" name="destination" value={form.destination} onChange={handleChange} required />
// // // //         </div>

// // // //         <div className="form-row">
// // // //           <label htmlFor="startDate">Start Date:</label>
// // // //           <input type="date" id="startDate" name="startDate" value={form.startDate} onChange={handleChange} required />
// // // //         </div>

// // // //         <div className="form-row">
// // // //           <label htmlFor="endDate">End Date:</label>
// // // //           <input type="date" id="endDate" name="endDate" value={form.endDate} onChange={handleChange} required />
// // // //         </div>

// // // //         <div className="form-row">
// // // //           <label htmlFor="budget">Budget:</label>
// // // //           <input type="number" id="budget" name="budget" value={form.budget} onChange={handleChange} required />
// // // //         </div>

// // // //         <button type="submit">{editIndex !== null ? "Update" : "Add"} Itinerary</button>
// // // //       </form>

// // // //       {/* List */}
// // // //       <div className="itinerary-list">
// // // //         {itineraries.length === 0 ? (
// // // //           <p>No itineraries added yet.</p>
// // // //         ) : (
// // // //           itineraries.map((item, index) => (
// // // //             <div key={index} className="itinerary-card">
// // // //               <h2>{item.tripName}</h2>
// // // //               <p><strong>Description:</strong> {item.description}</p>
// // // //               <p><strong>Destination:</strong> {item.destination}</p>
// // // //               <p><strong>Start Date:</strong> {item.startDate}</p>
// // // //               <p><strong>End Date:</strong> {item.endDate}</p>
// // // //               <p><strong>Budget:</strong> ₹{item.budget}</p>
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
// // // //         .itinerary-container {
// // // //           padding: 30px;
// // // //           font-family: Arial, sans-serif;
// // // //         }
// // // //         h1 {
// // // //           margin-bottom: 20px;
// // // //         }
// // // //         .itinerary-form {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           gap: 15px;
// // // //           margin-bottom: 30px;
// // // //           width: 100%;
// // // //           max-width: 600px; /* Wider form */
// // // //         }
// // // //         .form-row {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           gap: 15px;
// // // //         }
// // // //         .form-row label {
// // // //           width: 150px; /* Fixed label width */
// // // //           font-weight: bold;
// // // //         }
// // // //         .form-row input {
// // // //           padding: 10px;
// // // //           border-radius: 6px;
// // // //           border: 1px solid #ccc;
// // // //           font-size: 14px;
// // // //           flex: 1; /* Take remaining space */
// // // //         }
// // // //         .itinerary-form button {
// // // //           width: 180px;
// // // //           padding: 12px;
// // // //           background: #4ab7bf;
// // // //           color: white;
// // // //           border: none;
// // // //           border-radius: 8px;
// // // //           cursor: pointer;
// // // //           font-size: 16px;
// // // //           align-self: flex-start; /* Button on left */
// // // //         }
// // // //         .itinerary-form button:hover {
// // // //           background: #399aa6;
// // // //         }
// // // //         .itinerary-list {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           gap: 20px;
// // // //           width: 100%;
// // // //           max-width: 600px;
// // // //         }
// // // //         .itinerary-card {
// // // //           background: white;
// // // //           padding: 20px;
// // // //           border-radius: 12px;
// // // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // // //         }
// // // //         .itinerary-card h2 {
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

// // // // export default Itineraries;
// // // import React, { useState } from "react";

// // // function Itineraries() {
// // //   const [itineraries, setItineraries] = useState([]);
// // //   const [form, setForm] = useState({
// // //     tripName: "",
// // //     description: "",
// // //     destination: "",
// // //     startDate: "",
// // //     endDate: "",
// // //     budget: ""
// // //   });
// // //   const [editIndex, setEditIndex] = useState(null);

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (editIndex !== null) {
// // //       const updated = [...itineraries];
// // //       updated[editIndex] = form;
// // //       setItineraries(updated);
// // //       setEditIndex(null);
// // //     } else {
// // //       setItineraries([...itineraries, form]);
// // //     }
// // //     setForm({
// // //       tripName: "",
// // //       description: "",
// // //       destination: "",
// // //       startDate: "",
// // //       endDate: "",
// // //       budget: ""
// // //     });
// // //   };

// // //   const handleEdit = (index) => {
// // //     setForm(itineraries[index]);
// // //     setEditIndex(index);
// // //   };

// // //   const handleDelete = (index) => {
// // //     setItineraries(itineraries.filter((_, i) => i !== index));
// // //   };

// // //   return (
// // //     <div className="itinerary-container">
// // //       <h1>📌 My Itineraries</h1>

// // //       {/* Form */}
// // //       <form onSubmit={handleSubmit} className="itinerary-form">
// // //         <div className="form-row">
// // //           <label htmlFor="tripName">Trip Name:</label>
// // //           <input type="text" id="tripName" name="tripName" value={form.tripName} onChange={handleChange} required />
// // //         </div>

// // //         <div className="form-row">
// // //           <label htmlFor="description">Description:</label>
// // //           <input type="text" id="description" name="description" value={form.description} onChange={handleChange} required />
// // //         </div>

// // //         <div className="form-row">
// // //           <label htmlFor="destination">Destination:</label>
// // //           <input type="text" id="destination" name="destination" value={form.destination} onChange={handleChange} required />
// // //         </div>

// // //         <div className="form-row">
// // //           <label htmlFor="startDate">Start Date:</label>
// // //           <input type="date" id="startDate" name="startDate" value={form.startDate} onChange={handleChange} required />
// // //         </div>

// // //         <div className="form-row">
// // //           <label htmlFor="endDate">End Date:</label>
// // //           <input type="date" id="endDate" name="endDate" value={form.endDate} onChange={handleChange} required />
// // //         </div>

// // //         <div className="form-row">
// // //           <label htmlFor="budget">Budget:</label>
// // //           <input type="number" id="budget" name="budget" value={form.budget} onChange={handleChange} required />
// // //         </div>

// // //         <button type="submit">{editIndex !== null ? "Update" : "Add"} Itinerary</button>
// // //       </form>

// // //       {/* List */}
// // //       <div className="itinerary-list">
// // //         {itineraries.length === 0 ? (
// // //           <p>No itineraries added yet.</p>
// // //         ) : (
// // //           itineraries.map((item, index) => (
// // //             <div key={index} className="itinerary-card">
// // //               <h2>{item.tripName}</h2>
// // //               <p><strong>Description:</strong> {item.description}</p>
// // //               <p><strong>Destination:</strong> {item.destination}</p>
// // //               <p><strong>Start Date:</strong> {item.startDate}</p>
// // //               <p><strong>End Date:</strong> {item.endDate}</p>
// // //               <p><strong>Budget:</strong> ₹{item.budget}</p>
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
// // //         .itinerary-container {
// // //           padding: 30px;
// // //           font-family: Arial, sans-serif;
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: center; /* Center everything horizontally */
// // //         }

// // //         h1 {
// // //           margin-bottom: 20px;
// // //           text-align: center;
// // //         }

// // //         .itinerary-form {
// // //           display: flex;
// // //           flex-direction: column;
// // //           gap: 15px;
// // //           margin-bottom: 30px;
// // //           width: 100%;
// // //           max-width: 600px;
// // //           padding: 20px;
// // //           border-radius: 12px;
// // //         }

// // //         .form-row {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 15px;
// // //         }

// // //         .form-row label {
// // //           width: 150px;
// // //           font-weight: bold;
// // //         }

// // //         .form-row input {
// // //           padding: 10px;
// // //           border-radius: 6px;
// // //           border: 1px solid #ccc;
// // //           flex: 1;
// // //         }

// // //         .itinerary-form button {
// // //           width: 180px;
// // //           padding: 12px;
// // //           background: #4ab7bf;
// // //           color: white;
// // //           border: none;
// // //           border-radius: 8px;
// // //           cursor: pointer;
// // //           font-size: 16px;
// // //           align-self: center; /* Button centered */
// // //         }

// // //         .itinerary-form button:hover {
// // //           background: #399aa6;
// // //         }

// // //         .itinerary-list {
// // //           display: flex;
// // //           flex-direction: column;
// // //           gap: 20px;
// // //           width: 100%;
// // //           max-width: 600px;
// // //           align-items: center; /* Center cards horizontally */
// // //         }

// // //         .itinerary-card {
// // //           background: white;
// // //           padding: 20px;
// // //           border-radius: 12px;
// // //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// // //           width: 100%;
// // //         }

// // //         .itinerary-card h2 {
// // //           margin-top: 0;
// // //         }

// // //         .actions {
// // //           margin-top: 15px;
// // //           display: flex;
// // //           gap: 10px;
// // //         }

// // //         .actions button {
// // //           flex: 1;
// // //           padding: 8px;
// // //           border: none;
// // //           border-radius: 6px;
// // //           cursor: pointer;
// // //           font-weight: bold;
// // //         }

// // //         .actions button:first-child {
// // //           background: #f0ad4e;
// // //           color: white;
// // //         }

// // //         .actions button:first-child:hover {
// // //           background: #ec971f;
// // //         }

// // //         .actions button:last-child {
// // //           background: #d9534f;
// // //           color: white;
// // //         }

// // //         .actions button:last-child:hover {
// // //           background: #c9302c;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // // export default Itineraries;
// // import React, { useState } from "react";

// // function Itineraries() {
// //   const [itineraries, setItineraries] = useState([]);
// //   const [form, setForm] = useState({
// //     tripName: "",
// //     description: "",
// //     destination: "",
// //     startDate: "",
// //     endDate: "",
// //     budget: ""
// //   });
// //   const [editIndex, setEditIndex] = useState(null);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (editIndex !== null) {
// //       const updated = [...itineraries];
// //       updated[editIndex] = form;
// //       setItineraries(updated);
// //       setEditIndex(null);
// //     } else {
// //       setItineraries([...itineraries, form]);
// //     }
// //     setForm({
// //       tripName: "",
// //       description: "",
// //       destination: "",
// //       startDate: "",
// //       endDate: "",
// //       budget: ""
// //     });
// //   };

// //   const handleEdit = (index) => {
// //     setForm(itineraries[index]);
// //     setEditIndex(index);
// //   };

// //   const handleDelete = (index) => {
// //     setItineraries(itineraries.filter((_, i) => i !== index));
// //   };

// //   return (
// //     <div className="itinerary-container">
// //       <h1>📌 MY ITINERARIES</h1>

// //       {/* Form */}
// //       <form onSubmit={handleSubmit} className="itinerary-form">
// //         <div className="form-row">
// //           <label htmlFor="tripName">TRIP NAME:</label>
// //           <input type="text" id="tripName" name="tripName" value={form.tripName} onChange={handleChange} required />
// //         </div>

// //         <div className="form-row">
// //           <label htmlFor="description">DESCRIPTION:</label>
// //           <input type="text" id="description" name="description" value={form.description} onChange={handleChange} required />
// //         </div>

// //         <div className="form-row">
// //           <label htmlFor="destination">DESTINATION:</label>
// //           <input type="text" id="destination" name="destination" value={form.destination} onChange={handleChange} required />
// //         </div>

// //         <div className="form-row">
// //           <label htmlFor="startDate">START DATE:</label>
// //           <input type="date" id="startDate" name="startDate" value={form.startDate} onChange={handleChange} required />
// //         </div>

// //         <div className="form-row">
// //           <label htmlFor="endDate">END DATE:</label>
// //           <input type="date" id="endDate" name="endDate" value={form.endDate} onChange={handleChange} required />
// //         </div>

// //         <div className="form-row">
// //           <label htmlFor="budget">BUDGET:</label>
// //           <input type="number" id="budget" name="budget" value={form.budget} onChange={handleChange} required />
// //         </div>

// //         <button type="submit">{editIndex !== null ? "UPDATE" : "ADD"} ITINERARY</button>
// //       </form>

// //       {/* List */}
// //       <div className="itinerary-list">
// //         {itineraries.length === 0 ? (
// //           <p>No itineraries added yet.</p>
// //         ) : (
// //           itineraries.map((item, index) => (
// //             <div key={index} className="itinerary-card">
// //               <h2>{item.tripName}</h2>
// //               <p><strong>DESCRIPTION:</strong> {item.description}</p>
// //               <p><strong>DESTINATION:</strong> {item.destination}</p>
// //               <p><strong>START DATE:</strong> {item.startDate}</p>
// //               <p><strong>END DATE:</strong> {item.endDate}</p>
// //               <p><strong>BUDGET:</strong> ₹{item.budget}</p>
// //               <div className="actions">
// //                 <button onClick={() => handleEdit(index)}>EDIT</button>
// //                 <button onClick={() => handleDelete(index)}>DELETE</button>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>

// //       {/* Styles */}
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

// //         .itinerary-container {
// //           padding: 30px;
// //           font-family: 'Roboto', sans-serif;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //         }

// //         h1 {
// //           margin-bottom: 20px;
// //           text-align: center;
// //         }

// //         .itinerary-form {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 15px;
// //           margin-bottom: 30px;
// //           width: 100%;
// //           max-width: 600px;
// //           padding: 20px;
// //           border-radius: 12px;
// //         }

// //         .form-row {
// //           display: flex;
// //           align-items: center;
// //           gap: 15px;
// //         }

// //         .form-row label {
// //           width: 150px;
// //           font-weight: bold;
// //         }

// //         .form-row input {
// //           padding: 10px;
// //           border-radius: 6px;
// //           border: 1px solid #ccc;
// //           flex: 1;
// //         }

// //         .itinerary-form button {
// //           width: 180px;
// //           padding: 12px;
// //           background: #4ab7bf;
// //           color: white;
// //           border: none;
// //           border-radius: 8px;
// //           cursor: pointer;
// //           font-size: 16px;
// //           align-self: center;
// //         }

// //         .itinerary-form button:hover {
// //           background: #399aa6;
// //         }

// //         .itinerary-list {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 20px;
// //           width: 100%;
// //           max-width: 600px;
// //           align-items: center;
// //         }

// //         .itinerary-card {
// //           background: white;
// //           padding: 20px;
// //           border-radius: 12px;
// //           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// //           width: 100%;
// //         }

// //         .itinerary-card h2 {
// //           margin-top: 0;
// //         }

// //         .actions {
// //           margin-top: 15px;
// //           display: flex;
// //           gap: 10px;
// //         }

// //         .actions button {
// //           flex: 1;
// //           padding: 8px;
// //           border: none;
// //           border-radius: 6px;
// //           cursor: pointer;
// //           font-weight: bold;
// //         }

// //         .actions button:first-child {
// //           background: #f0ad4e;
// //           color: white;
// //         }

// //         .actions button:first-child:hover {
// //           background: #ec971f;
// //         }

// //         .actions button:last-child {
// //           background: #d9534f;
// //           color: white;
// //         }

// //         .actions button:last-child:hover {
// //           background: #c9302c;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default Itineraries;




// import React, { useEffect, useState } from "react";

// function Itineraries() {
//   const [itineraries, setItineraries] = useState([]);
//   const [form, setForm] = useState({
//     tripName: "",
//     description: "",
//     destination: "",
//     startDate: "",
//     endDate: "",
//     budget: "",
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [error, setError] = useState(null);

//   const API_URL = "http://localhost:8080/api/itineraries";
//   const token = localStorage.getItem("accessToken");

//   // Fetch itineraries
//   const fetchItineraries = async () => {
//     try {
//       const res = await fetch(API_URL, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!res.ok) throw new Error("Failed to fetch itineraries");
//       const data = await res.json();
//       setItineraries(data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchItineraries();
//   }, []);

//   // Handle form input
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Save itinerary
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const method = editingId ? "PUT" : "POST";
//     const url = editingId ? `${API_URL}/${editingId}` : API_URL;

//     try {
//       const res = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error("Error saving itinerary");

//       setForm({
//         tripName: "",
//         description: "",
//         destination: "",
//         startDate: "",
//         endDate: "",
//         budget: "",
//       });
//       setEditingId(null);
//       fetchItineraries();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // Edit itinerary
//   const handleEdit = (itinerary) => {
//     setForm(itinerary);
//     setEditingId(itinerary.id);
//   };

//   // Delete itinerary
//   const handleDelete = async (id) => {
//     try {
//       const res = await fetch(`${API_URL}/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!res.ok) throw new Error("Error deleting itinerary");
//       fetchItineraries();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>My Itineraries</h2>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Form */}
//       <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           name="tripName"
//           placeholder="Trip Name"
//           value={form.tripName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="destination"
//           placeholder="Destination"
//           value={form.destination}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="startDate"
//           value={form.startDate}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="endDate"
//           value={form.endDate}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="budget"
//           placeholder="Budget"
//           value={form.budget}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">{editingId ? "Update" : "Add"} Itinerary</button>
//       </form>

//       {/* List */}
//       <ul>
//         {itineraries.map((itinerary) => (
//           <li key={itinerary.id} style={{ marginBottom: "10px" }}>
//             <strong>{itinerary.tripName}</strong> — {itinerary.destination} (
//             {itinerary.startDate} to {itinerary.endDate})  
//             <br />
//             Budget: {itinerary.budget}  
//             <br />
//             {itinerary.description}
//             <br />
//             <button onClick={() => handleEdit(itinerary)}>Edit</button>
//             <button onClick={() => handleDelete(itinerary.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Itineraries;
import React, { useEffect, useState } from "react";

function Itineraries() {
  const [itineraries, setItineraries] = useState([]);
  const [form, setForm] = useState({
    tripName: "",
    description: "",
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:8080/api/itineraries";
  const token = localStorage.getItem("accessToken");

  // Fetch itineraries
  const fetchItineraries = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch itineraries");
      const data = await res.json();
      setItineraries(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchItineraries();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save itinerary
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API_URL}/${editingId}` : API_URL;

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error saving itinerary");

      setForm({
        tripName: "",
        description: "",
        destination: "",
        startDate: "",
        endDate: "",
        budget: "",
      });
      setEditingId(null);
      fetchItineraries();
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit itinerary
  const handleEdit = (itinerary) => {
    setForm(itinerary);
    setEditingId(itinerary.id);
  };

  // Delete itinerary
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error deleting itinerary");
      fetchItineraries();
    } catch (err) {
      setError(err.message);
    }
  };

  // ---- Inline styles ----
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "30px auto",
      padding: "20px",
      background: "#fdfdfd",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      color: "#2c3e50",
      marginBottom: "20px",
    },
    error: { color: "red", textAlign: "center" },
    form: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "25px",
    },
    input: {
      flex: "1 1 calc(50% - 10px)",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "6px",
    },
    button: {
      flex: "1 1 100%",
      padding: "10px",
      background: "#3498db",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
    list: { listStyle: "none", padding: 0 },
    card: {
      background: "#fff",
      padding: "15px",
      marginBottom: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    },
    cardTitle: { margin: "0 0 10px", color: "#34495e" },
    cardText: { margin: "4px 0", fontSize: "14px", color: "#555" },
    cardActions: { marginTop: "10px" },
    editBtn: {
      padding: "8px 12px",
      background: "#27ae60",
      color: "white",
      border: "none",
      borderRadius: "6px",
      marginRight: "8px",
      cursor: "pointer",
    },
    deleteBtn: {
      padding: "8px 12px",
      background: "#e74c3c",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Itineraries</h2>

      {error && <p style={styles.error}>{error}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="tripName" placeholder="Trip Name" value={form.tripName} onChange={handleChange} required style={styles.input} />
        <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} required style={styles.input} />
        <input type="text" name="destination" placeholder="Destination" value={form.destination} onChange={handleChange} required style={styles.input} />
        <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required style={styles.input} />
        <input type="date" name="endDate" value={form.endDate} onChange={handleChange} required style={styles.input} />
        <input type="number" name="budget" placeholder="Budget" value={form.budget} onChange={handleChange} required style={styles.input} />
        <button type="submit" style={styles.button}>
          {editingId ? "Update" : "Add"} Itinerary
        </button>
      </form>

      {/* List */}
      <ul style={styles.list}>
        {itineraries.map((itinerary) => (
          <li key={itinerary.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{itinerary.tripName}</h3>
            <p style={styles.cardText}><strong>Destination:</strong> {itinerary.destination}</p>
            <p style={styles.cardText}><strong>Dates:</strong> {itinerary.startDate} → {itinerary.endDate}</p>
            <p style={styles.cardText}><strong>Budget:</strong> ₹{itinerary.budget}</p>
            <p style={styles.cardText}>{itinerary.description}</p>
            <div style={styles.cardActions}>
              <button style={styles.editBtn} onClick={() => handleEdit(itinerary)}>Edit</button>
              <button style={styles.deleteBtn} onClick={() => handleDelete(itinerary.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Itineraries;
