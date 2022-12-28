import React from 'react'
import './components.scss'
import { HashLink } from 'react-router-hash-link';
import logo from '../media/logo.png'



function Header() {
  return (
    <header>
    
      <div className='box_logo_main'>
      <HashLink smooth to="/#section__home"><img src={logo} alt="" /></HashLink> 
        
      </div>

      <nav>
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
    </header>
  )
}

export default Header