import React, { useState } from 'react'

import bike1 from "../../media/Assets/vehicles/bike-fast.png";
import bike2 from "../../media/Assets/vehicles/bike.png";
import moto1 from "../../media/Assets/vehicles/chopper.png";
import moto2 from "../../media/Assets/vehicles/scooter.png";
import car1 from "../../media/Assets/vehicles/suv-fast.png";
import car2 from "../../media/Assets/vehicles/suv.png";


function Vehicles() {
  const [eSlide, setSlide] = useState(
    {
      bike: true,
      moto: false,
      car: false,
      
    }
  )

  function setearSlide(prop) {
    const tabs = {
      bike: false,
      moto: false,
      car: false,
    };

    setSlide({ ...tabs, [prop]: true });
  }

  const stl = {
    background: "#5F5F5F"
  }
  return (
    <>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quae odio expedita dolor vero iusto quibusdam ratione sit tenetur amet nisi reprehenderit, explicabo qui quo, eos voluptate laboriosam libero. Reiciendis asperiores pariatur accusantium, ea quod atque velit sequi corrupti! Reiciendis reprehenderit quos consequuntur laboriosam qui tempore vitae! Minima, ipsam mollitia!
        </p>
        <div className='tab__asset'>
          <div className="box-slide">

          { eSlide.bike &&
              <>
                <img src={bike1} alt="" />
                <img src={bike2} alt="" />
                
              </>
            }

            { eSlide.moto &&
              <>
                <img src={moto1} alt="" />
                <img src={moto2} alt="" />
                
              </>
            }
            { eSlide.car &&
              <>
                <img src={car1} alt="" />
                <img src={car2} alt="" />
                
              </>
            }

            
          </div>
          
          <div className="btns">
            <button onClick={()=>setearSlide("bike")} style={eSlide.bike ? stl : {}}>Bike</button>
            <button onClick={()=>setearSlide("moto")} style={eSlide.moto ? stl : {}}>Moto</button>
            <button onClick={()=>setearSlide("car")} style={eSlide.car ? stl : {}}>Car</button>
            
          </div>
        </div>

    </>
  )
}

export default Vehicles