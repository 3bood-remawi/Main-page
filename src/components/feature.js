import firstpic from "./first.png";
import secondpic from "./second.png";
import thirdpic from './third.png';
import './Feature.css';
import React from 'react';

const Feature = () => {
    return (

        <div className="Feature">
            <h2>More than messaging</h2>
            <p>Express besides it present if at an opinion visitor.</p>

            <div className="Features-list">

     <div className="Feature-item">

  <img src={firstpic} alt="Voice and Video Calls Icon"className="Feature-item-pic" />
      <h3>Voice and video calls</h3>
<p>Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky.</p>

       </div>

     <div className="Feature-item">

       <img src={secondpic} alt="Auto Save Contacts Icon" className="Feature-item-pic"/>
            <h3>Auto save contacts</h3>
          <p>Handsome met debating sir dwelling age material. As style lived he worse dried. visitors subjects distance.</p>

                </div>

                <div className="Feature-item">

     <img src={thirdpic} alt="End to End Encryption Icon" className="Feature-item-pic"/>
           <h3>End to end encryption</h3>

          <p>Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had.</p>

          </div>

     </div>

        </div>
    );
}

export default Feature;

