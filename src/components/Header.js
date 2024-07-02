import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'

function Header() {
  return (
    <header className='header' style={{ backgroundImage: `url(https://th.bing.com/th/id/OIP.R2fCzvL-M_Gf4KvorPZDsgHaEo?rs=1&pid=ImgDetMain)` }}>
        <div className='layer'>
        <div className="container">
          <nav className='logo-wrapper'>
            <div className='logo'>
              <ImSpoonKnife className='brand' />
            </div>
          </nav>
          <div className='header-text' >
            <h1>RECIPE FINDER</h1>
            <p>HUNGRY..? LET'S FIND YOU YUMMM...</p>
          </div>

        </div>
        </div>
      </header>
  )
}

export default Header
