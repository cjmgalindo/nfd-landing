import React, { useState } from 'react'

//basic
import basic1 from "../../media/Assets/printers/basic/PHH.png";
import basic2 from "../../media/Assets/printers/basic/PHI.png";
import basic3 from "../../media/Assets/printers/basic/PHS.png";
import basic4 from "../../media/Assets/printers/basic/PWH.png";
import basic5 from "../../media/Assets/printers/basic/PWI.png";
import basic6 from "../../media/Assets/printers/basic/PWS.png";

//common
import common1 from "../../media/Assets/printers/common/PHH-2.png";
import common2 from "../../media/Assets/printers/common/PHI-2.png";
import common3 from "../../media/Assets/printers/common/PHS-2.png";
import common4 from "../../media/Assets/printers/common/PWH-2.png";
import common5 from "../../media/Assets/printers/common/PWI-2.png";
import common6 from "../../media/Assets/printers/common/PWS-2.png";

//gold
import gold1 from "../../media/Assets/printers/gold/PHH-28657.png";
import gold2 from "../../media/Assets/printers/gold/PHI-28657.png";
import gold3 from "../../media/Assets/printers/gold/PHS-28657.png";
import gold4 from "../../media/Assets/printers/gold/PWH-28657.png";
import gold5 from "../../media/Assets/printers/gold/PWI-28657.png";
import gold6 from "../../media/Assets/printers/gold/PWS-28657.png";

//silver
import silver1 from "../../media/Assets/printers/silver/PHH-233.png";
import silver2 from "../../media/Assets/printers/silver/PHI-233.png";
import silver3 from "../../media/Assets/printers/silver/PHS-233.png";
import silver4 from "../../media/Assets/printers/silver/PWH-233.png";
import silver5 from "../../media/Assets/printers/silver/PWI-233.png";
import silver6 from "../../media/Assets/printers/silver/PWS-233.png";

function Printers() {
  const [eSlide, setSlide] = useState(
    {
      basic: true,
      common: false,
      gold: false,
      silver: false,
      
    }
  )

  function setearSlide(prop) {
    const tabs = {
      basic: false,
      common: false,
      gold: false,
      silver: false,
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

          { eSlide.basic &&
              <>
                <img src={basic1} alt="" />
                <img src={basic2} alt="" />
                <img src={basic3} alt="" />
                <img src={basic4} alt="" />
                <img src={basic5} alt="" />
                <img src={basic6} alt="" />
              </>
            }

            { eSlide.common &&
              <>
                <img src={common1} alt="" />
                <img src={common2} alt="" />
                <img src={common3} alt="" />
                <img src={common4} alt="" />
                <img src={common5} alt="" />
                <img src={common6} alt="" />
              </>
            }
            { eSlide.gold &&
              <>
                <img src={gold1} alt="" />
                <img src={gold2} alt="" />
                <img src={gold3} alt="" />
                <img src={gold4} alt="" />
                <img src={gold5} alt="" />
                <img src={gold6} alt="" />
              </>
            }

            { eSlide.silver &&
              <>
                <img src={silver1} alt="" />
                <img src={silver2} alt="" />
                
              </>
            }
          </div>
          
          <div className="btns">
            <button onClick={()=>setearSlide("basic")} style={eSlide.basic ? stl : {}}>Basic</button>
            <button onClick={()=>setearSlide("common")} style={eSlide.common ? stl : {}}>Common</button>
            <button onClick={()=>setearSlide("gold")} style={eSlide.gold ? stl : {}}>Gold</button>
            <button onClick={()=>setearSlide("silver")} style={eSlide.silver ? stl : {}}>Silver</button>
            
          </div>
        </div>

    </>
  )
}

export default Printers