import React from 'react'
import './components.scss'

import logo from '../media/logo.png'



function Header() {
  return (
    <header>
      <div className='box_logo_main'>
        <img src={logo} alt="" />
      </div>

      <nav>
        <ul>
          <li>about</li>
          <li>assets</li>
          <li>title3
              <ul className='list-vertical'>
                <li>subtit</li>
                <li>subtit</li>
                <li>subtit</li>
              </ul>
          </li>
          <li>titl01</li>
          <li>contact</li>
          
        </ul>
        <button>
          title4
        </button>
      </nav>
    </header>
  )
}

export default Header