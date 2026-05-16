import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEvent({ events = [], onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    trip: "",
    title: "",
    location: "",
    description: ""
  });

  useEffect(() => {
    const event = events.find((e) => e.id === parseInt(id));
    if (event) setForm(event);
  }, [id, events]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onUpdate) onUpdate(id, form);
    navigate("/view");
  };

  return (
    <div>
      <h1>Update Event</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="trip">Trip Name</label>
        <input
          id="trip"
          name="trip"
          value={form.trip}
          onChange={handleChange}
          placeholder="Trip Name"
        />

        <label htmlFor="title">Event Title</label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Event Title"
        />

        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <button type="submit">Update Event</button>
      </form>
    </div>
  );
}

export default UpdateEvent;
