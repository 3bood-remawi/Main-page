import React from 'react'
import './Top_destination.css' 
function Top_destination() {
return (
    <>
    <h2>Top destination</h2>
<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card ">
        <img src="montain.png" alt="montain" />
    <h3> California </h3>
    <p> Business & Conferences</p>
    </div>
  </div>
  <div className="col">
  <div className="card ">
    <img src="girl.png" alt="girl" />
    <h3> Los Angeles </h3>
    <p>Events & Parties </p>
</div>
  </div>
  <div className="col">
  <div className="card ">
    <img src="cute_cat.png" alt="cute_cat" />
    <h3> London </h3>
    <p> Arts & Entertainment</p>
</div>
  </div>
  <div className="col">
  <div className="card ">
    <img src="car_girl.png" alt="car_girl" />
    <h3> London </h3>
    <p> Arts & Entertainment </p>
</div>
  </div>
</div>
</>

)

}

export default Top_destination