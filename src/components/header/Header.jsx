import React from 'react'
import './header.css'
import ME from '../../assets/img1.jpg'

function Header() {
  return (
    <header className="container">
       <div className="header_container">
          <h5>Hi I'm</h5>
          <h1>DHANA RAGAVENDRAN P</h1>
          <h5 className='text-light'>UI DEVELOPER</h5>
       </div>

        <div className="me">
            <img src={ME} alt="me" />
       </div>
       
    </header>
  )
}

export default Header
