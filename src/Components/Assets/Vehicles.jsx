import React, { useState } from 'react'
import Slider from "react-slick";

import bike1 from "../../media/Assets/vehicles/bike-fast.png";
import bike2 from "../../media/Assets/vehicles/bike.png";
import moto1 from "../../media/Assets/vehicles/chopper.png";
import moto2 from "../../media/Assets/vehicles/scooter.png";
import car1 from "../../media/Assets/vehicles/suv-fast.png";
import car2 from "../../media/Assets/vehicles/suv.png";

import next from '../../media/Assets/next.png'
import back from '../../media/Assets/back.png'

const bike = [bike1,bike2,bike1,bike2]
const moto = [moto1,moto2,moto1,moto2]
const car = [car1,car2,car1,car2]

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


  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={next} alt="" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={back} alt="" style={{background:"transparent"}}/>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 10,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };


  return (
    <>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quae odio expedita dolor vero iusto quibusdam ratione sit tenetur amet nisi reprehenderit, explicabo qui quo, eos voluptate laboriosam libero. Reiciendis asperiores pariatur accusantium, ea quod atque velit sequi corrupti! Reiciendis reprehenderit quos consequuntur laboriosam qui tempore vitae! Minima, ipsam mollitia!
        </p>
        <div className='tab__asset'>
          <div className="box-slide">

          { eSlide.bike &&
            <Slider {...settings}>
                {bike.map((img, idx) => (
                  <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                    <img src={img} alt={img} />
                  </div>
                ))}
              </Slider>
            }

            { eSlide.moto &&
              <Slider {...settings}>
                {moto.map((img, idx) => (
                  <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                    <img src={img} alt={img} />
                  </div>
                ))}
              </Slider>
            }
            { eSlide.car &&
              <Slider {...settings}>
                {car.map((img, idx) => (
                  <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                    <img src={img} alt={img} />
                  </div>
                ))}
              </Slider>
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