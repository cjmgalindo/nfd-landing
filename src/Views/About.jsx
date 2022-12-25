import React from 'react'

import car from '../media/Assets/vehicles/suv.png'

import lPepsi from '../media/logos/logo_test1.png'
import lmicrosoft from '../media/logos/logo_test2.png'
import lredbull from '../media/logos/logo_test3.png'
import bg from '../media/Untitled.svg'


function About() {
  return (
    <section className="section__about" id='section__about'>
      <h1>ABOUT</h1>

      
      <div className='box__about'>
          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque illo obcaecati laboriosam, at nisi voluptas quidem autem ipsa incidunt laudantium hic? Quidem consequatur quibusdam quasi numquam illum! Quia corporis sed facilis nemo esse ea recusandae minima ipsam. Assumenda repellat autem quasi accusantium atque amet in tenetur totam dolore nesciunt blanditiis corporis.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit provident excepturi explicabo. Fugit illum laudantium blanditiis nesciunt labore nemo aperiam a nam.</p>
          <img src={car} alt="" />
      </div>

      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={lredbull} alt="" />
          </div>
          <div className="slide"> 
            <img src={lPepsi} alt="" />
          </div>
          <div className="slide">
            <img src={lmicrosoft} alt="" />
          </div>
          <div className="slide">
            <img src={lredbull} alt="" />
          </div>
          <div className="slide"> 
            <img src={lPepsi} alt="" />
          </div>
          <div className="slide">
            <img src={lmicrosoft} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About