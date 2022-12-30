
import React, { useState } from 'react'
import './styleTabs.scss'

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


//free
import free1 from "../../media/Assets/henchmen/free/basic-dealer-female.png";
import free2 from "../../media/Assets/henchmen/free/basic-dealer-male.png";


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

  return (
    <>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quae odio expedita dolor vero iusto quibusdam ratione sit tenetur amet nisi reprehenderit, explicabo qui quo, eos voluptate laboriosam libero. Reiciendis asperiores pariatur accusantium, ea quod atque velit sequi corrupti! Reiciendis reprehenderit quos consequuntur laboriosam qui tempore vitae! Minima, ipsam mollitia!
        </p>
        <div className='tab__asset'>
          <div className="box-slide">

            { eSlide.neutral &&
              <>
                <img src={neutral1} alt="" />
                <img src={neutral2} alt="" />
                <img src={neutral3} alt="" />
                <img src={neutral4} alt="" />
                <img src={neutral5} alt="" />
                <img src={neutral6} alt="" />
              </>
            }

            { eSlide.indica &&
              <>
                <img src={indica1} alt="" />
                <img src={indica2} alt="" />
                <img src={indica3} alt="" />
                <img src={indica4} alt="" />
                <img src={indica5} alt="" />
                <img src={indica6} alt="" />
              </>
            }
            { eSlide.hybrid &&
              <>
                <img src={hybrid1} alt="" />
                <img src={hybrid2} alt="" />
                <img src={hybrid3} alt="" />
                <img src={hybrid4} alt="" />
                <img src={hybrid5} alt="" />
                <img src={hybrid6} alt="" />
              </>
            }

            { eSlide.free &&
              <>
                <img src={free1} alt="" />
                <img src={free2} alt="" />
                
              </>
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