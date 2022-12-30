import React from 'react'
import './views.scss'

import lMicrosoft from '../media/logos/logo_test3.png'
import personaje from '../media/img_logos_person.png'
function Logos() {

  function fLogo(cantidad) {
    const logos = []
    for (let i = 1; i < cantidad+1; i++) {
      logos.push(
       <div className='boxLogo' key={i} > 
         <img src={lMicrosoft} alt="" />
       </div>
        
      )
      
      
    }
    return logos;
  }

  return (
    <section className='section__logos' id='section__logos'>
      <h1>LOGOS</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur perspiciatis, 
     <br /> eos doloribus aliquid cupiditate totam. Quod!</p>

      <div className='box__logos'>
        {fLogo(6)}
      </div>

      

      <div className='boxDiscord'>
        <h1>
        JOIN COMUNITY
        <br />
          <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            viewBox="0 0 30 20"
            className="icon"
          >
            <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
          </svg>
            +1200
          </span>
        </h1>

        

        <div className='boxTxt'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          <br />
          Delectus distinctio maxime earum doloremque error repudiandae.</p>
          <button>
            Go now!
          </button>
        </div>
        <img src={personaje} alt="" className='person'/>
      </div>

    </section>
  )
}

export default Logos