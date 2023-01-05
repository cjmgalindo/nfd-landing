import React, { useState } from 'react'
import './components.scss'
import { HashLink } from 'react-router-hash-link';
import logo from '../media/logo.png'
import menu from '../media/menu.svg'
import close from '../media/marca-de-la-cruz.png'

function Header() {

  const [eActive, setActive] = useState(false);

  function name() {
    setActive(!eActive)
    console.log(eActive)
  }

  return (
    <header>
    
      <div className='box_logo_main'>
      <HashLink smooth to="/#section__home"><img src={logo} alt="" /></HashLink> 
        
      </div>

      <nav className={` ${eActive ? "nav__menu" : ' '}`}>
        <img src={close} alt="" className={`close-menu`} onClick={()=> setActive(!eActive)}/>
        <ul>
          <li> 
          <HashLink smooth to="/#section__about">About</HashLink> 
          </li>
          <li>
          <HashLink smooth to="/#section__assets">Assets</HashLink> 
          </li>
          <li>
          <HashLink smooth to="/#section__timelin">Title3</HashLink> 
              <ul className='list-vertical'>
                <li>subtit</li>
                <li>subtit</li>
                <li>subtit</li>
              </ul>
          </li>
          <li > <HashLink smooth to="/#section__users">titl01</HashLink></li>
          <li > <HashLink smooth to="/#section__logos">contact</HashLink></li>
          
        </ul>
        <button>
          title4
        </button>
      </nav>

      <div className="menu" onClick={()=>name()}>
        <img src={menu} alt="" className='menu__img' />
      </div>



    </header>
  )
}

export default Header