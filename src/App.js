//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Top_destination from './components/Top_destination';
import ExploreGroups from './components/ExploreGroups';
import Conference from './components/Conference'
import Card from './components/Card';
import SocialApp from'./components/SocialApp';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';
import Feature from './components/Feature';


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

function App() {
  const [events, setEvents] = useState(initialEvents);
  return (
    <>
    <Navbar/>
    <Header/>
    <Conference/>
    <Top_destination/>
    <ExploreGroups/>

    <div className="app">
    <div className="events-feed">
        {events.map((event) => (
          <Card event={event} />
        ))}
      </div>
    </div>
    <SocialApp/>
    <Navbar1/>
    <Feature/>

    <Footer/>
    </>

  );
}

export default App;
/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React<i class="fa-solid fa-bullhorn"></i>
        </a>
      </header>
    </div>*/