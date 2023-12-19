import React, { useState } from "react";

const Card = ({ event }) => {
  const [interested, setInterested] = useState(false);
  const [interestedCount, setInterestedCount] = useState(
    event.interestedCount || 0
  );

  const handleInterestToggle = () => {
    setInterested(!interested);
    setInterestedCount(interested ? interestedCount - 1 : interestedCount + 1);
  };

  return (
    <div className="event-card">
      <img src={`card/${event.picture}`} alt="Event" />
      <div className="event-details">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <p>
          Date: {event.date} at {event.time}
        </p>
        <p>Location: {event.location}</p>
        <p>{interestedCount} are attending</p>
        <button id="button-interested" onClick={handleInterestToggle}>
          {interested ? "Not Interested" : "Interested"}
        </button>
      </div>
    </div>
  );
};

export default Card;
