import React, { useState } from 'react'
import Slider from "react-slick";

import bpack1 from '../../media/Assets/bags/backpack-1.png'
import bpack2 from '../../media/Assets/bags/backpack-2.png'

import bcase1 from '../../media/Assets/bags/briefcase-1.png'
import bcase2 from '../../media/Assets/bags/briefcase-2.png'

import duffle1 from '../../media/Assets/bags/duffle-1.png'
import duffle2 from '../../media/Assets/bags/duffle-2.png'

import next from '../../media/Assets/next.png'
import back from '../../media/Assets/back.png'


const bpack = [bpack1,bpack2,bpack1,bpack2]
const bcase = [bcase1,bcase2,bcase1,bcase2]
const duffle = [duffle1,duffle2,duffle1,duffle2]

function Bags() {
  const [eSlide, setSlide] = useState(
    {
      bpack: true,
      bcase: false,
      duffle: false,
    }
  )

  function setearSlide(prop) {
    const tabs = {
      bpack: false,
      bcase: false,
      duffle: false,
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

          { eSlide.bpack &&
            <Slider {...settings}>
                {bpack.map((img, idx) => (
                  <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                    <img src={img} alt={img} />
                  </div>
                ))}
              </Slider>
            }

            { eSlide.bcase &&
              <Slider {...settings}>
                {bcase.map((img, idx) => (
                  <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                    <img src={img} alt={img} />
                  </div>
                ))}
              </Slider>
            }
            { eSlide.duffle &&
              <Slider {...settings}>
                {duffle.map((img, idx) => (
                  <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                    <img src={img} alt={img} />
                  </div>
                ))}
              </Slider>
            }

            
          </div>
          
          <div className="btns">
            <button onClick={()=>setearSlide("bpack")} style={eSlide.bpack ? stl : {}}>BackPack</button>
            <button onClick={()=>setearSlide("bcase")} style={eSlide.bcase ? stl : {}}>BriefCase</button>
            <button onClick={()=>setearSlide("duffle")} style={eSlide.duffle ? stl : {}}>Duffle</button>
            
          </div>
        </div>

    </>
  )
}

export default Bags