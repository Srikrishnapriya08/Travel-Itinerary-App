import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEvent({ onAdd }) {
  const [form, setForm] = useState({
    trip: "",
    date: "",
    title: "",
    time: "",
    location: "",
    notes: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.trip || !form.date || !form.title) {
      alert("Trip, Date, and Title are required!");
      return;
    }
    if (onAdd) onAdd(form);
    navigate("/view");
  };

  return (
    <div>
      <h1>Add Itinerary Event</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="trip">Trip Name</label>
        <input id="trip" name="trip" placeholder="Trip Name" value={form.trip} onChange={handleChange} />

        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" value={form.date} onChange={handleChange} />

        <label htmlFor="title">Event Title</label>
        <input id="title" name="title" placeholder="Event Title" value={form.title} onChange={handleChange} />

        <label htmlFor="time">Time</label>
        <input id="time" type="time" name="time" value={form.time} onChange={handleChange} />

        <label htmlFor="location">Location</label>
        <input id="location" name="location" placeholder="Location" value={form.location} onChange={handleChange} />

        <label htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
