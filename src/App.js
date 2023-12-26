//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Top_destination from './components/Top_destination';
import ExploreGroups from './components/ExploreGroups';
import Conference from './components/Conference'
import Card from './components/Card';
import SocialApp from'./components/SocialApp';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';
import Feature from './components/Feature.js';
import Bottomoffeature from './components/Bottomoffeature.js'
import Middlefeature from './components/Middlefeature.js';

function App() {



  return (
    <>
    <Navbar/>
    <Header/>
      
          <Card />


    
    
    <Conference/>
    <Top_destination/>
    <ExploreGroups/>
    
    
    <Footer/>
    
    <Navbar1/>
    <SocialApp/>
    <Feature/>
    <Middlefeature/>
    <Bottomoffeature/>
    

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