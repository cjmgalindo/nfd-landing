import React from 'react'
import personaje from '../media/header_bg_personaje.png'


function Home() {
  return (
    <section className='section__home'>
      <img src={personaje} alt="" className='personaje__home'/>

      <div>
        <h3>Hello wannabe Lord</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Ex earum quaerat excepturi laboriosam voluptate repellat corporis beatae maiores at! Ab?</p>

        <div className="btns__home">
          <button>
            title4
          </button>
          <button>
            title4
          </button>
        </div>

        <div className="icons__home">

        </div>

      </div>
    </section>
  )
}

export default Home