//imports
import './Header.css'
import artsPic from "./rank.png"
import filePic from "./file.png"
import housePic from "./house.png"
import clockPic from "./clock.png"
import computerpic from "./computer.png"




//function

const Header =() =>{

  return(
   <div>
     <div className="header">



<h1 className="header-title">Find events near you</h1>
    <bre className="header-title2">Let's uncover the best places to eat, drink, and shop nearest to you.</bre>

    <div className="search-container">
        <p className="search-bar-pra">We will help you find all</p>
        <input type="text" className="what" name="what" placeholder="What" />
        <input type="text" className="where" name="where" placeholder="Where" />
        <button type="submit">Search</button>
      </div>

      


</div>

<div className="event-types">

        <div className="arts">
          <img src={artsPic }  width="50px" alt="" className="img"/>
          <p>Arts & Entertainment</p>
        </div>

        <div className="business">
          <img src={filePic } width="50px"alt="" className="img"/>
          <p>Business & Conferences</p>
        </div>

        <div className="gaming">
          <img src={housePic  } width="50px" alt="" className="img"/>
          <p>PNY E-Gaming Fest</p>
        </div>

        <div className="parties">
          <img src={clockPic }  width="50px"alt="" className="img"/>
          <p>Events & Parties</p>
        </div>

        <div className="sports">
          <img src={computerpic  } width="50px" alt=""  className="img"/>
          <p>Sports & Wellness</p>
        </div>

      </div>
   </div>
  )


}




//exports
export default Header;


