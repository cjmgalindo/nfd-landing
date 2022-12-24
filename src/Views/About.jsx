import React from 'react'

import car from '../media/Assets/vehicles/suv.png'

import lPepsi from '../media/logos/logo_test1.png'
import lmicrosoft from '../media/logos/logo_test2.png'
import lredbull from '../media/logos/logo_test3.png'

function About() {
  return (
    <section className="section__about" id='section__about'>
      <h1>ABOUT</h1>

      <div className='box__about'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque illo obcaecati laboriosam, at nisi voluptas quidem autem ipsa incidunt laudantium hic? Quidem consequatur quibusdam quasi numquam illum! Quia corporis sed facilis nemo esse ea recusandae minima ipsam. Assumenda repellat autem quasi accusantium atque amet in tenetur totam dolore nesciunt blanditiis corporis, reiciendis voluptates! Assumenda rem minima vel sapiente harum dolor eum voluptates, vero nisi aut debitis voluptatum deleniti error provident veritatis, repudiandae exercitationem dicta fuga! Unde voluptate exercitationem velit quod.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit provident excepturi explicabo. Fugit illum laudantium blanditiis nesciunt labore nemo aperiam a nam et, explicabo iusto libero necessitatibus, quae dolor dolorum?
        <img src={car} alt="" />
      </div>
      
      <div className="carrusel__about">
        <img src={lredbull} alt="" />
        <img src={lPepsi} alt="" />
        <img src={lmicrosoft} alt="" />
      </div>
    </section>
  )
}

export default About