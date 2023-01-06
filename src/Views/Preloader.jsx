import React from 'react'
import moustache from '../media/mostacho.png'

function Preloader() {
  return (
    <div className="PagePreloader " style={{heigth:"100vh", width:"100vw", background:"#202020"}}>
        <div className="containerLoader">
            <img src={moustache}/>
            
            <div className='box_loader'>
              <div className="loader">
                  
              </div>
              <p>LOADING ...</p>
            </div>

        </div>
    </div>
  )
}

export default Preloader