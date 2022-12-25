import React, { useState } from 'react'
import Bags from '../Components/Assets/Bags'
import Henchmen from '../Components/Assets/Henchmen'
import Printers from '../Components/Assets/Printers'
import Vehicles from '../Components/Assets/Vehicles'

function Assets() {

  const [eTab, setTab ] = useState({
    henchmen:true,
    printers:false,
    bags:false,
    vehicles:false
  })
  function setearTabs(prop) {
    const tabs = {
      henchmen:false,
    printers:false,
    bags:false,
    vehicles:false
    };

    setTab({ ...tabs, [prop]: true });
  }



  return (
    <section className="section__assets" id='section__assets'>
      <h1>ASSETS</h1>

      <div className="tabs__assets">
        <button onClick={()=>setearTabs("henchmen")}>HENCHMEN</button>
        <button>PRINTERS</button>
        <button>BAGS</button>
        <button>VEHICLES</button>
      </div>
      <div className="box__assets">
        {eTab.henchmen  &&
          <Henchmen />
        }
        {eTab.printers  &&
          <Printers />
        }
        {eTab.bags  &&
          <Bags />
        }
        {eTab.vehicles  &&
          <Vehicles />
        }
        
      </div>
    </section>
  )
}

export default Assets