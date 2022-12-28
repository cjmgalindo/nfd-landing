import React, { useState } from 'react'

import bpack1 from '../../media/Assets/bags/backpack-1.png'
import bpack2 from '../../media/Assets/bags/backpack-2.png'

import bcase1 from '../../media/Assets/bags/briefcase-1.png'
import bcase2 from '../../media/Assets/bags/briefcase-2.png'

import duffle1 from '../../media/Assets/bags/duffle-1.png'
import duffle2 from '../../media/Assets/bags/duffle-2.png'

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
  return (
    <>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quae odio expedita dolor vero iusto quibusdam ratione sit tenetur amet nisi reprehenderit, explicabo qui quo, eos voluptate laboriosam libero. Reiciendis asperiores pariatur accusantium, ea quod atque velit sequi corrupti! Reiciendis reprehenderit quos consequuntur laboriosam qui tempore vitae! Minima, ipsam mollitia!
        </p>
        <div className='tab__asset'>
          <div className="box-slide">

          { eSlide.bpack &&
              <>
                <img src={bpack1} alt="" />
                <img src={bpack2} alt="" />
                
              </>
            }

            { eSlide.bcase &&
              <>
                <img src={bcase1} alt="" />
                <img src={bcase2} alt="" />
                
              </>
            }
            { eSlide.duffle &&
              <>
                <img src={duffle1} alt="" />
                <img src={duffle2} alt="" />
                
              </>
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