import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>made with 💕 by rosn :)  <span className='year'>©{new Date().getFullYear()}</span></div>
  )
}

export default Footer