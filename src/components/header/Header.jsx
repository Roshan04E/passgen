import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className='nav-section'>
      <nav className='nav'>
        <div className="brand"><Link to="/">PassGen</Link></div>
        <div className="menu"><span className="btn btn-sc"><Link to="/coffee">Buy me a coffee :)</Link></span></div>
      </nav>
    </div>
  )
}

export default Header