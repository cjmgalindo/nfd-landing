import React from 'react'
import imgUser from '../media/users.jpg'
function Users() {

  function fCard(cantidad) {
    const boxs = []
    for (let i = 1; i < cantidad+1; i++) {
      boxs.push(
        <div className='card__users'>
          <img src={imgUser} alt="" />
          
          


          <div className='box-date__users'>
            <div>
              <h3>Bill Gates</h3>
              <span>The Big Boss</span>
            </div>
            
          </div>
        </div>
      )
      
      
    }
    return boxs;
  }
  
  return (
    <section className="section__users">
      <h1>USERS</h1>

      <div className="cards__users">
        {fCard(3)}
      </div>
    </section>
  )
}

export default Users