import React from 'react'
import './views.scss'

import lMicrosoft from '../media/logos/logo_test3.png'

function Logos() {

  function fLogo(cantidad) {
    const logos = []
    for (let i = 1; i < cantidad+1; i++) {
      logos.push(
       <div className='boxLogo'> 
         <img src={lMicrosoft} alt="" />
       </div>
        
      )
      
      
    }
    return logos;
  }

  return (
    <section className='section__logos'>
      <h1>LOGOS</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur perspiciatis, eos doloribus aliquid cupiditate totam. Quod!</p>
      <div className='box__logos'>
        {fLogo(2)}
      </div>

    </section>
  )
}

export default Logos