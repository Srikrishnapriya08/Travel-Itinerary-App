import React, { useState } from "react";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    bookingType: "FLIGHT",
    serviceDate: "",
    cost: "",
    status: "PENDING",
    airline: "",
    flightNumber: "",
    departure: "",
    arrival: "",
    hotelName: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    activityName: "",
    activityTime: "",
    location: "",
    vehicleType: "",
    pickup: "",
    dropOff: "",
    restaurantName: "",
    reservationTime: ""
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...bookings];
      updated[editIndex] = form;
      setBookings(updated);
      setEditIndex(null);
    } else {
      setBookings([...bookings, form]);
    }
    setForm({
      bookingType: "FLIGHT",
      serviceDate: "",
      cost: "",
      status: "PENDING",
      airline: "",
      flightNumber: "",
      departure: "",
      arrival: "",
      hotelName: "",
      roomType: "",
      checkIn: "",
      checkOut: "",
      activityName: "",
      activityTime: "",
      location: "",
      vehicleType: "",
      pickup: "",
      dropOff: "",
      restaurantName: "",
      reservationTime: ""
    });
  };

  const handleEdit = (index) => setForm(bookings[index]) || setEditIndex(index);
  const handleDelete = (index) => setBookings(bookings.filter((_, i) => i !== index));

  return (
    <div className="booking-container">
      <h1>📌 Bookings</h1>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-row">
          <label>Booking Type:</label>
          <select name="bookingType" value={form.bookingType} onChange={handleChange}>
            <option value="FLIGHT">Flight</option>
            <option value="HOTEL">Hotel</option>
            <option value="ACTIVITY">Activity</option>
            <option value="TRANSPORT">Transport</option>
            <option value="RESTAURANT">Restaurant</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        {/* Dynamic Fields */}
        {form.bookingType === "FLIGHT" && (
          <>
            <div className="form-row">
              <label>Airline:</label>
              <input type="text" name="airline" value={form.airline} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Flight Number:</label>
              <input type="text" name="flightNumber" value={form.flightNumber} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Departure:</label>
              <input type="text" name="departure" value={form.departure} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Arrival:</label>
              <input type="text" name="arrival" value={form.arrival} onChange={handleChange} />
            </div>
          </>
        )}

        {form.bookingType === "HOTEL" && (
          <>
            <div className="form-row">
              <label>Hotel Name:</label>
              <input type="text" name="hotelName" value={form.hotelName} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Room Type:</label>
              <input type="text" name="roomType" value={form.roomType} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Check-in:</label>
              <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Check-out:</label>
              <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} />
            </div>
          </>
        )}

        {form.bookingType === "ACTIVITY" && (
          <>
            <div className="form-row">
              <label>Activity Name:</label>
              <input type="text" name="activityName" value={form.activityName} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Time:</label>
              <input type="time" name="activityTime" value={form.activityTime} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Location:</label>
              <input type="text" name="location" value={form.location} onChange={handleChange} />
            </div>
          </>
        )}

        {form.bookingType === "TRANSPORT" && (
          <>
            <div className="form-row">
              <label>Vehicle Type:</label>
              <input type="text" name="vehicleType" value={form.vehicleType} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Pickup:</label>
              <input type="text" name="pickup" value={form.pickup} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Drop-off:</label>
              <input type="text" name="dropOff" value={form.dropOff} onChange={handleChange} />
            </div>
          </>
        )}

        {form.bookingType === "RESTAURANT" && (
          <>
            <div className="form-row">
              <label>Restaurant Name:</label>
              <input type="text" name="restaurantName" value={form.restaurantName} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Reservation Time:</label>
              <input type="time" name="reservationTime" value={form.reservationTime} onChange={handleChange} />
            </div>
          </>
        )}

        {/* Common Fields */}
        <div className="form-row">
          <label>Service Date:</label>
          <input type="date" name="serviceDate" value={form.serviceDate} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Cost:</label>
          <input type="number" name="cost" value={form.cost} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Status:</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="PENDING">Pending</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="CANCELLED">Cancelled</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <button type="submit">{editIndex !== null ? "Update" : "Add"} Booking</button>
      </form>

      {/* Bookings List */}
      <div className="booking-list">
        {bookings.length === 0 ? (
          <p>No bookings added yet.</p>
        ) : (
          bookings.map((item, index) => (
            <div key={index} className="booking-card">
              <h2>{item.bookingType}</h2>
              {item.bookingType === "FLIGHT" && (
                <>
                  <p><strong>Airline:</strong> {item.airline}</p>
                  <p><strong>Flight Number:</strong> {item.flightNumber}</p>
                  <p><strong>Departure:</strong> {item.departure}</p>
                  <p><strong>Arrival:</strong> {item.arrival}</p>
                </>
              )}
              {item.bookingType === "HOTEL" && (
                <>
                  <p><strong>Hotel Name:</strong> {item.hotelName}</p>
                  <p><strong>Room Type:</strong> {item.roomType}</p>
                  <p><strong>Check-in:</strong> {item.checkIn}</p>
                  <p><strong>Check-out:</strong> {item.checkOut}</p>
                </>
              )}
              {item.bookingType === "ACTIVITY" && (
                <>
                  <p><strong>Activity:</strong> {item.activityName}</p>
                  <p><strong>Time:</strong> {item.activityTime}</p>
                  <p><strong>Location:</strong> {item.location}</p>
                </>
              )}
              {item.bookingType === "TRANSPORT" && (
                <>
                  <p><strong>Vehicle:</strong> {item.vehicleType}</p>
                  <p><strong>Pickup:</strong> {item.pickup}</p>
                  <p><strong>Drop-off:</strong> {item.dropOff}</p>
                </>
              )}
              {item.bookingType === "RESTAURANT" && (
                <>
                  <p><strong>Restaurant:</strong> {item.restaurantName}</p>
                  <p><strong>Time:</strong> {item.reservationTime}</p>
                </>
              )}
              <p><strong>Service Date:</strong> {item.serviceDate}</p>
              <p><strong>Cost:</strong> ₹{item.cost}</p>
              <p><strong>Status:</strong> {item.status}</p>
              <div className="actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        .booking-container {
          padding: 30px;
          font-family: Arial, sans-serif;
          max-width: 750px;
          margin: auto;
        }
        h1 { text-align: center; margin-bottom: 25px; color: #333; }
        .booking-form { display: flex; flex-direction: column; gap: 15px; margin-bottom: 35px; }
        .form-row { display: flex; justify-content: flex-start; align-items: center; gap: 15px; }
        .form-row label { width: 140px; font-weight: bold; color: #555; }
        .form-row input, .form-row select { flex: 1; padding: 10px; border-radius: 6px; border: 1px solid #ccc; font-size: 14px; }
        .booking-form button { padding: 12px; background: #4ab7bf; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; margin-top: 10px; transition: 0.3s; }
        .booking-form button:hover { background: #399aa6; }
        .booking-list { display: flex; flex-direction: column; gap: 20px; }
        .booking-card { background: #fff; padding: 22px; border-radius: 12px; box-shadow: 0 6px 12px rgba(0,0,0,0.1); transition: 0.3s; }
        .booking-card:hover { box-shadow: 0 8px 16px rgba(0,0,0,0.15); }
        .booking-card h2 { margin-top: 0; color: #2c3e50; }
        .actions { margin-top: 12px; display: flex; gap: 12px; }
        .actions button { flex: 1; padding: 10px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; transition: 0.3s; }
        .actions button:first-child { background: #f0ad4e; color: white; }
        .actions button:first-child:hover { background: #ec971f; }
        .actions button:last-child { background: #d9534f; color: white; }
        .actions button:last-child:hover { background: #c9302c; }
      `}</style>
    </div>
  );
}

export default Bookings;
