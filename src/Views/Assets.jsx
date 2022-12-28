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
    vehicles:false,
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

  const stl = {
    background: "#5F5F5F"
  }

  return (
    <section className="section__assets" id='section__assets'>
      <h1>ASSETS</h1>

      <div className="tabs__assets">
        <button onClick={()=>setearTabs("henchmen")} style={eTab.henchmen ? stl : {}}>HENCHMEN</button>
        <button onClick={()=>setearTabs("printers")} style={eTab.printers ? stl : {}}>PRINTERS</button>
        <button onClick={()=>setearTabs("bags")} style={eTab.bags ? stl : {}}>BAGS</button>
        <button onClick={()=>setearTabs("vehicles")} style={eTab.vehicles ? stl : {}}>VEHICLES</button>
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