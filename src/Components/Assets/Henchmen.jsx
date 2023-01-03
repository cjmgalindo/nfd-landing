
import React, { useState } from 'react'
import './styleTabs.scss'
import Slider from "react-slick";

//neutral
import neutral1 from "../../media/Assets/henchmen/neutral/baron-neutral-1.png";
import neutral2 from "../../media/Assets/henchmen/neutral/baron-neutral-2.png";
import neutral3 from "../../media/Assets/henchmen/neutral/lieutenant-neutral-1.png";
import neutral4 from "../../media/Assets/henchmen/neutral/lieutenant-neutral-2.png";
import neutral5 from "../../media/Assets/henchmen/neutral/untouchable-neutral-1.png";
import neutral6 from "../../media/Assets/henchmen/neutral/untouchable-neutral-2.png";

//indica
import indica1 from "../../media/Assets/henchmen/indica/baron-indica-1.png";
import indica2 from "../../media/Assets/henchmen/indica/baron-indica-2.png";
import indica3 from "../../media/Assets/henchmen/indica/lieutenant-indica-1.png";
import indica4 from "../../media/Assets/henchmen/indica/lieutenant-indica-2.png";
import indica5 from "../../media/Assets/henchmen/indica/untouchable-indica-1.png";
import indica6 from "../../media/Assets/henchmen/indica/untouchable-indica-2.png";

//hybrid
import hybrid1 from "../../media/Assets/henchmen/hybrid/baron-hybrid-1.png";
import hybrid2 from "../../media/Assets/henchmen/hybrid/baron-sativa-2.png";
import hybrid3 from "../../media/Assets/henchmen/hybrid/lieutenant-sativa-1.png";
import hybrid4 from "../../media/Assets/henchmen/hybrid/lieutenant-sativa-2.png";
import hybrid5 from "../../media/Assets/henchmen/hybrid/untouchable-sativa-1.png";
import hybrid6 from "../../media/Assets/henchmen/hybrid/untouchable-sativa-2.png";

//sativa
import sativa1 from "../../media/Assets/henchmen/sativa/baron-sativa-1.png";
import sativa2 from "../../media/Assets/henchmen/sativa/baron-sativa-2.png";
import sativa3 from "../../media/Assets/henchmen/sativa/lieutenant-sativa-1.png";
import sativa4 from "../../media/Assets/henchmen/sativa/lieutenant-sativa-2.png";
import sativa5 from "../../media/Assets/henchmen/sativa/untouchable-sativa-1.png";
import sativa6 from "../../media/Assets/henchmen/sativa/untouchable-sativa-2.png";



//free
import free1 from "../../media/Assets/henchmen/free/basic-dealer-female.png";
import free2 from "../../media/Assets/henchmen/free/basic-dealer-male.png";

import next from '../../media/Assets/next.png'
import back from '../../media/Assets/back.png'


import astronaut from "../../media/Assets/henchmen/neutral/baron-neutral-1.png";
import celebrating from "../../media/Assets/henchmen/neutral/baron-neutral-2.png";
import education from "../../media/Assets/henchmen/neutral/lieutenant-neutral-1.png";
import taken from "../../media/Assets/henchmen/neutral/lieutenant-neutral-2.png";



const images = [astronaut, celebrating, education, taken];

const neutral = [neutral1,neutral2,neutral3,neutral4,neutral5,neutral6]
const indica = [indica1,indica2,indica3,indica4,indica5,indica6]
const hybrid = [hybrid1,hybrid2,hybrid3,hybrid4,hybrid5,hybrid6]
const sativa = [sativa1,sativa2,sativa3,sativa4,sativa5,sativa6]
const free = [free1, free2, free1, free2]



function Henchmen() {

  const [eSlide, setSlide] = useState(
    {
      neutral: true,
      indica: false,
      hybrid: false,
      sativa: false,
      free: false,
    }
  )

  function setearSlide(prop) {
    const tabs = {
      neutral: false,
      indica: false,
      hybrid: false,
      sativa: false,
      free: false,
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

            {/* <Slider {...settings}>
              {images.map((img, idx) => (
                <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                  <img src={img} alt={img} />
                </div>
              ))}
            </Slider> */}
            { eSlide.neutral &&
              <Slider {...settings}>
                {neutral.map((img, idx) => (
                  <div key={idx} className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                    <img src={img} alt={img} />
                  </div>
                ))}
              </Slider>
            }

            { eSlide.indica &&
              <Slider {...settings}>
            {indica.map((img, idx) => (
              <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
            }


            { eSlide.hybrid &&
              <Slider {...settings}>
            {hybrid.map((img, idx) => (
              <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
            }
            { eSlide.sativa &&
              <Slider {...settings}>
            {sativa.map((img, idx) => (
              <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
            }
            { eSlide.free &&
              <Slider {...settings}>
                {free.map((img, idx) => (
                  <div className={idx === imageIndex ? "Slide activeSlide" : "Slide"}>
                    <img src={img} alt={img} />
                  </div>
                ))}
              </Slider>
            } 
          </div>
          
          <div className="btns">
            <button onClick={()=>setearSlide("neutral")} style={eSlide.neutral ? stl : {}}>Neutral</button>
            <button onClick={()=>setearSlide("indica")} style={eSlide.indica ? stl : {}}>Indica</button>
            <button onClick={()=>setearSlide("hybrid")} style={eSlide.hybrid ? stl : {}}>Hybrid</button>
            <button onClick={()=>setearSlide("sativa")} style={eSlide.sativa ? stl : {}}>Sativa</button>
            <button onClick={()=>setearSlide("free")} style={eSlide.free ? stl : {}}>Free</button>
          </div>
        </div>

    </>
    

  )
}

export default Henchmen