import React from 'react'

function Timelin() {
  
 
  function fBox(cantidad) {
    const boxs = []
    for (let i = 1; i < cantidad+1; i++) {
      boxs.push(
        <div className='card__timelin'>

          <p className='code'>Q{i} <br /> 2021</p>
          <div className='text'>
            <h3>Starting point</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit perferendis sequi soluta molestias, sit magni veritatis repellat provident tempore voluptatum? Repellendus id enim tempora molestias eaque. Aspernatur, possimus distinctio.</p>
          </div>
        </div>
      )
      
      
    }
    return boxs;
  }

  return (
    <section className="section__timelin" id='section__timelin'>
      <h1>TIMELIN</h1>
      <div className='cards'>
        {fBox(3)}

        <div className='btn-slide'>

        </div>
      </div>
      
    </section>
  )
}

export default Timelin