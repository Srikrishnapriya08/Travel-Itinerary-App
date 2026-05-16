import React, { useState } from "react";

function Activities() {
  const [activities, setActivities] = useState([]);
  const [form, setForm] = useState({
    name: "",
    destination: "",
    description: "",
    category: "",
    duration: "",
    cost: "",
    rating: ""
  });
  const [editIndex, setEditIndex] = useState(null);

  const destinations = ["Paris", "New York", "Tokyo", "Mumbai", "London"];
  const categories = {
    SIGHTSEEING: ["Eiffel Tower Tour", "City Walking Tour", "Historical Monument Visit"],
    ADVENTURE: ["River Rafting", "Bungee Jumping", "Skydiving"],
    CULTURAL: ["Museum Visit", "Local Workshop", "Cultural Show"],
    ENTERTAINMENT: ["Broadway Show", "Concert", "Theme Park"],
    DINING: ["Street Food Tasting", "Fine Dining", "Cooking Class"],
    SHOPPING: ["Market Tour", "Mall Visit", "Souvenir Shopping"],
    NATURE: ["Hiking", "Bird Watching", "Nature Walk"],
    HISTORICAL: ["Castle Tour", "Ancient Ruins Visit", "Monument Exploration"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setForm({ ...form, category: value, name: "" }); // Reset activity name when category changes
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...activities];
      updated[editIndex] = form;
      setActivities(updated);
      setEditIndex(null);
    } else {
      setActivities([...activities, form]);
    }
    setForm({
      name: "",
      destination: "",
      description: "",
      category: "",
      duration: "",
      cost: "",
      rating: ""
    });
  };

  const handleEdit = (index) => {
    setForm(activities[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  return (
    <div className="activity-container">
      <h1>🎯 Activities</h1>

      <form onSubmit={handleSubmit} className="activity-form">
        <div className="form-row">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="name">Activity Name:</label>
          <select
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={!form.category}
          >
            <option value="">Select Activity</option>
            {form.category && categories[form.category].map((activity) => (
              <option key={activity} value={activity}>{activity}</option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="destination">Destination:</label>
          <select
            id="destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            required
          >
            <option value="">Select Destination</option>
            {destinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="duration">Duration (min):</label>
          <input type="number" id="duration" name="duration" value={form.duration} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="cost">Cost:</label>
          <input type="number" id="cost" name="cost" value={form.cost} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="rating">Rating (0-5):</label>
          <input type="number" step="0.1" min="0" max="5" id="rating" name="rating" value={form.rating} onChange={handleChange} />
        </div>

        <button type="submit">{editIndex !== null ? "Update" : "Add"} Activity</button>
      </form>

      <div className="activity-list">
        {activities.length === 0 ? (
          <p>No activities added yet.</p>
        ) : (
          activities.map((item, index) => (
            <div key={index} className="activity-card">
              <h2>{item.name}</h2>
              <p><strong>Destination:</strong> {item.destination}</p>
              {item.description && <p><strong>Description:</strong> {item.description}</p>}
              <p><strong>Category:</strong> {item.category}</p>
              {item.duration && <p><strong>Duration:</strong> {item.duration} min</p>}
              {item.cost && <p><strong>Cost:</strong> {item.cost}</p>}
              {item.rating && <p><strong>Rating:</strong> {item.rating}</p>}
              <div className="actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        .activity-container { padding: 30px; font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; background: #f0f4f8; }
        h1 { margin-bottom: 20px; }
        .activity-form { display: flex; flex-direction: column; gap: 20px; margin-bottom: 30px; width: 100%; max-width: 600px; background: #fff; padding: 20px; border-radius: 12px; }
        .form-row { display: flex; align-items: center; gap: 15px; }
        .form-row label { width: 150px; font-weight: bold; }
        .form-row input, .form-row select { padding: 10px; border-radius: 6px; border: 1px solid #ccc; flex: 1; }
        .activity-form button { width: 200px; padding: 12px; background: #1976d2; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; align-self: center; }
        .activity-form button:hover { background: #115293; }
        .activity-list { display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 600px; }
        .activity-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        .actions { margin-top: 15px; display: flex; gap: 10px; }
        .actions button { flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
        .actions button:first-child { background: #f0ad4e; color: white; }
        .actions button:first-child:hover { background: #ec971f; }
        .actions button:last-child { background: #d9534f; color: white; }
        .actions button:last-child:hover { background: #c9302c; }
      `}</style>
    </div>
  );
}

export default Activities;
