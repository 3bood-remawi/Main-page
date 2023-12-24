import React from 'react'
import './Bottomoffeature.css'
function Bottomoffeature() {
  return (
    <div className='container'>
    <div className='row' >
      <div className='col-md-6 float-md-end'>
        <img src='style-1.png' alt='style-1' />
      </div>
      <div className='col-md-6  float-md-start '>
        <h2>Get Discovered</h2>
        <p>Enjoy special interactive features such as Live Battles, Interactive Gifts, Happy Moments & Exclusive Posts to help you rise the ranks and grow your audience.</p>
        <button className='btn btn-primary'>Let's start</button>
      </div>
    </div>
  
    <div className='row middle_of_bottom_style'>
      <div className='col-md-6 order-md-last'>
        <img src='style-2.png' alt='style-2' />
      </div>
      <div className='col-md-6 order-md-first'>
      <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
  <div  style={{flex: 1,textAlign: 'left', margin : '50px' , marginTop : '150px' , textSizeAdjust:'5px'}}>
    
    
    <h4>Meet creators</h4>
    <p>In no impression assistance contrasted Manners she wishing justice hastily.</p>
    <h4>Support artists</h4>
    <p>Handsome met debating sir dwelling age material. As style lived he worse dried.</p>
  </div>
  <div style={{flex: 1, textAlign: 'right', display:'block' ,width:'1px'}}>
  <h2>Video call</h2>
  
    <img className='iconimg' src="video icon.png" alt="video icon" /><br></br>
    <img className='iconimg' src="like icon.png" alt="like icon" />
    
      </div>
    </div>
    </div>
    </div>
  
    <div className='row end_of_bottom_style'>
      
        <h2>People prefer to message</h2>
        <p>Frequently sufficient to be unaffected. The furnished she concluded depending procuring concealed</p>
      
      
        <img  className = 'endpage'src='endpage.png' alt='endpage' />
      </div>
      </div>
    
  
  
  )
}

export default Bottomoffeature