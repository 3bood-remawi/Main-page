import React from 'react'
import './Top_destination.css' 
import { useFireBase } from '../Firebase/Usefirebase'
function Top_destination() {
  const {items} = useFireBase('top-destination');
return ( 
    <> 
    <h2>Top destination</h2>
<div className="row row-cols-1 row-cols-md-4 g-4">
{items.map((item) => (
                        <div className="col">
                            <div className="card ">
                                <img src={item.image} alt="montain" />
                                <h3> {item.t} </h3>
                                <p> {item.ut}</p>
                            </div>
                        </div>
                    ))}
</div>
</>

)

}

export default Top_destination