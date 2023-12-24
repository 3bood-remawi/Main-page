import React from 'react';
import './Conference.css'; 

const Conference = () => {
  return (
    <div className="conference-container">
      <div className="conference-details">
        <img src="class t.jpg" alt="Conference" className="conference-image" />
        <h1>Global conference</h1>
        <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
        <div className="attendance">
          <img src="A1.png" alt="Group" className="group-icon" />
          <span>+34 are attending</span>
        </div>
      </div>
      <div className="booking-panel">
        <h2>Book a conference</h2>
        <div className="booking-info">
          <div className="booking-date">
            <label>Date</label>
            <span>12 June, 2022</span>
          </div>
          <div className="booking-time">
            <label>Time</label>
            <span>Morning 10AM</span>
          </div>
          <div className="booking-address">
            <label>Address</label>
            <span>2492 Centennial NW, Acworth, GA, 30102</span>
          </div>
        </div>
        <div className="qr-code">
          <img src="QR code.png" alt="QR Code" className="qr-image" />
        </div>
        <button className="share-btn">Share</button>
        <button className="book-now-btn">Book now</button>
      </div>
    </div>
  );
}

export default Conference;
