import React, { useState } from "react";
import './Card.css'; 
import { useFireBase } from '../Firebase/Usefirebase'


const Card = () => {
  const { items } = useFireBase("card");



  return (
    <div className="events-feed">
      {items.map((item) => (
        <div key={item.id} className="event-card">
          <img src={`${item.picture}`} alt="Event" />
          <div className="event-details">
            <h3>{item.title}</h3>
            <p>
              Date: {item.date} at {item.time}
            </p>
            <p>Location: {item.location}</p>
            <p>{item.interestedCount} are attending</p>
            <button
              id={`button-interested-${item.id}`}
              // onClick={() => handleInterestClick()}
            >
              {item.interested ? 'Not Interested' : 'Interested'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
