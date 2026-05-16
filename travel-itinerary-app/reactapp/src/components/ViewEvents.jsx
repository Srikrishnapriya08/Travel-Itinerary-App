import React, { useState } from "react";

function ViewEvents({ events = [], onDelete, onFetch }) {
  const [trip, setTrip] = useState("");

  const handleFetch = () => {
    if (onFetch) onFetch(trip);
  };

  return (
    <div>
      <h2>View Events</h2>
      <input
        placeholder="Enter trip name"
        value={trip}
        onChange={(e) => setTrip(e.target.value)}
      />
      <button onClick={handleFetch}>Fetch Events</button>

      {(!events || events.length === 0) ? (
        <p>No events found</p>
      ) : (
        <ul>
          {events.map((e) => (
            <li key={e.id}>
              {e.title} - {e.date}
              <button onClick={() => onDelete && onDelete(e.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewEvents;
