import React from 'react'

function Timelin() {
  
 
  function fBox(cantidad) {
    const boxs = []
    for (let i = 1; i < cantidad+1; i++) {
      boxs.push(
        <div className='card__timelin' key={i}>

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
      {/* <div className='cards'>
        {fBox(3)}

        <div className='btn-slide'>

        </div>
      </div> */}
      
      <div className="container-all">

        <input type="radio" id="1" name="image-slide" hidden/>
        <input type="radio" id="2" name="image-slide" hidden/>
        <input type="radio" id="3" name="image-slide" hidden/>

        <div className="slide">

            <div className="item-slide">
              
              {fBox(3)}
            </div>

            <div className="item-slide">
            slide 2
            </div>

            <div className="item-slide">
            slide 3
            </div>

        </div>

        <div className="pagination">
           
            <label className="pagination-item" for="1" >
               
            </label>
            
            <label className="pagination-item" for="2">
                
            </label>
            
            <label className="pagination-item" for="3">
                
            </label>
            
        </div>
        
    </div>


    </section>
  )
}

export default Timelin