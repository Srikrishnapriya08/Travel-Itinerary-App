// import React, { useState } from "react";

// function Expenses() {
//   const [expenses, setExpenses] = useState([]);
//   const [form, setForm] = useState({
//     amount: "",
//     currency: "USD",
//     category: "",
//     paymentMethod: "CASH",
//     description: ""
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   const categories = ["TRANSPORT", "FOOD", "LODGING", "ACTIVITY", "MISCELLANEOUS"];
//   const paymentMethods = ["CASH", "CREDIT_CARD", "DEBIT_CARD", "DIGITAL_WALLET", "BANK_TRANSFER"];

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editIndex !== null) {
//       const updated = [...expenses];
//       updated[editIndex] = form;
//       setExpenses(updated);
//       setEditIndex(null);
//     } else {
//       setExpenses([...expenses, form]);
//     }
//     setForm({
//       amount: "",
//       currency: "USD",
//       category: "",
//       paymentMethod: "CASH",
//       description: ""
//     });
//   };

//   const handleEdit = (index) => {
//     setForm(expenses[index]);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     setExpenses(expenses.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="expense-container">
//       <h1>💵 Expenses</h1>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="expense-form">
//         <div className="form-row">
//           <label htmlFor="amount">Amount:</label>
//           <input type="number" id="amount" name="amount" value={form.amount} onChange={handleChange} required />
//         </div>

//         <div className="form-row">
//           <label htmlFor="currency">Currency:</label>
//           <input type="text" id="currency" name="currency" value={form.currency} onChange={handleChange} required />
//         </div>

//         <div className="form-row">
//           <label htmlFor="category">Category:</label>
//           <select id="category" name="category" value={form.category} onChange={handleChange} required>
//             <option value="">Select Category</option>
//             {categories.map((c) => (
//               <option key={c} value={c}>{c}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-row">
//           <label htmlFor="paymentMethod">Payment Method:</label>
//           <select id="paymentMethod" name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
//             {paymentMethods.map((p) => (
//               <option key={p} value={p}>{p}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-row">
//           <label htmlFor="description">Description:</label>
//           <input type="text" id="description" name="description" value={form.description} onChange={handleChange} />
//         </div>

//         <button type="submit">{editIndex !== null ? "Update" : "Add"} Expense</button>
//       </form>

//       {/* List */}
//       <div className="expense-list">
//         {expenses.length === 0 ? (
//           <p>No expenses added yet.</p>
//         ) : (
//           expenses.map((item, index) => (
//             <div key={index} className="expense-card">
//               <p><strong>Amount:</strong> {item.amount} {item.currency}</p>
//               <p><strong>Category:</strong> {item.category}</p>
//               <p><strong>Payment Method:</strong> {item.paymentMethod}</p>
//               {item.description && <p><strong>Description:</strong> {item.description}</p>}
//               <div className="actions">
//                 <button onClick={() => handleEdit(index)}>Edit</button>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Styles */}
//       <style>{`
//         .expense-container {
//           padding: 30px;
//           font-family: Arial, sans-serif;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           background: #f9f9f9;
//         }
//         h1 { margin-bottom: 20px; }
//         .expense-form {
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//           margin-bottom: 30px;
//           width: 100%;
//           max-width: 600px;
//           background: #fff;
//           padding: 20px;
//           border-radius: 12px;
//         }
//         .form-row {
//           display: flex;
//           align-items: center;
//           gap: 15px;
//         }
//         .form-row label { width: 150px; font-weight: bold; }
//         .form-row input, .form-row select {
//           padding: 10px;
//           border-radius: 6px;
//           border: 1px solid #ccc;
//           flex: 1;
//         }
//         .expense-form button {
//           width: 200px;
//           padding: 12px;
//           background: #388e3c;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 16px;
//           align-self: center;
//         }
//         .expense-form button:hover { background: #2e7d32; }
//         .expense-list { display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 600px; }
//         .expense-card {
//           background: white;
//           padding: 20px;
//           border-radius: 12px;
//           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//         }
//         .actions { margin-top: 15px; display: flex; gap: 10px; }
//         .actions button {
//           flex: 1;
//           padding: 8px;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//           font-weight: bold;
//         }
//         .actions button:first-child { background: #f0ad4e; color: white; }
//         .actions button:first-child:hover { background: #ec971f; }
//         .actions button:last-child { background: #d9534f; color: white; }
//         .actions button:last-child:hover { background: #c9302c; }
//       `}</style>
//     </div>
//   );
// }

// export default Expenses;
import React, { useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    amount: "",
    currency: "USD",
    category: "",
    paymentMethod: "CASH",
    description: ""
  });
  const [editIndex, setEditIndex] = useState(null);

  const categories = ["TRANSPORT", "FOOD", "LODGING", "ACTIVITY", "MISCELLANEOUS"];
  const paymentMethods = ["CASH", "CREDIT_CARD", "DEBIT_CARD", "DIGITAL_WALLET", "BANK_TRANSFER"];
  const currencies = ["USD", "EUR", "INR", "GBP", "JPY"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...expenses];
      updated[editIndex] = form;
      setExpenses(updated);
      setEditIndex(null);
    } else {
      setExpenses([...expenses, form]);
    }
    setForm({
      amount: "",
      currency: "USD",
      category: "",
      paymentMethod: "CASH",
      description: ""
    });
  };

  const handleEdit = (index) => {
    setForm(expenses[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="expense-container">
      <h1>💵 Expenses</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-row">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" value={form.amount} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label htmlFor="currency">Currency:</label>
          <select id="currency" name="currency" value={form.currency} onChange={handleChange} required>
            {currencies.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={form.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
            {paymentMethods.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={form.description} onChange={handleChange} />
        </div>

        <button type="submit">{editIndex !== null ? "Update" : "Add"} Expense</button>
      </form>

      {/* List */}
      <div className="expense-list">
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          expenses.map((item, index) => (
            <div key={index} className="expense-card">
              <p><strong>Amount:</strong> {item.amount} {item.currency}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Payment Method:</strong> {item.paymentMethod}</p>
              {item.description && <p><strong>Description:</strong> {item.description}</p>}
              <div className="actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Styles */}
      <style>{`
        .expense-container {
          padding: 30px;
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #f9f9f9;
        }
        h1 { margin-bottom: 20px; }
        .expense-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 30px;
          width: 100%;
          max-width: 600px;
          background: #fff;
          padding: 20px;
          border-radius: 12px;
        }
        .form-row {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .form-row label { width: 150px; font-weight: bold; }
        .form-row input, .form-row select {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          flex: 1;
        }
        .expense-form button {
          width: 200px;
          padding: 12px;
          background: #388e3c;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          align-self: center;
        }
        .expense-form button:hover { background: #2e7d32; }
        .expense-list { display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 600px; }
        .expense-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .actions { margin-top: 15px; display: flex; gap: 10px; }
        .actions button {
          flex: 1;
          padding: 8px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }
        .actions button:first-child { background: #f0ad4e; color: white; }
        .actions button:first-child:hover { background: #ec971f; }
        .actions button:last-child { background: #d9534f; color: white; }
        .actions button:last-child:hover { background: #c9302c; }
      `}</style>
    </div>
  );
}

export default Expenses;
