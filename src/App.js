import React, { useState } from "react";
import Card from "./card/Card";
import "./SocialApp/SocialApp.css";
import "./card/Card.css";
import SocialApp from "./SocialApp/SocialApp"

const App = () => {
  const initialEvents = [
    {
      title: "Bone thugs-n-harmony",
      date: "2024-9-25",
      time: "09:30 AM",
      location: "Nablus - Palestine",
      picture: "event1.png",
      interestedCount: 10,
    },
    {
      title: "Decibel magazine",
      date: "2025-8-18",
      time: "09:30 AM",
      location: "Landon",
      picture: "event2.png",
      interestedCount: 30,
    },
    {
      title: "lllenium : fallen embers tour",
      date: "2025-9-23",
      time: "12:00 PM",
      location: "Mumbai",
      picture: "event3.png",
      interestedCount: 20,
    },
    {
      title: "Comedy on the green",
      date: "2026-10-5",
      time: "01:00 AM",
      location: "Cool Venue",
      picture: "event4.png",
      interestedCount: 100,
    },
  ];
  const [events, setEvents] = useState(initialEvents);
  return (
  <div>
    <div className="app">
      <div className="events-feed">
        {events.map((event) => (
          <Card event={event} />
        ))}
      </div>
    </div>
    <div>
      <SocialApp></SocialApp>
    </div>

    </div>


  );
};

export default App;
