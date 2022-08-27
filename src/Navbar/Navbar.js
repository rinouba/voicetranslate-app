import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='all-navbar text-white'>
                  <div className="navbarleft"><i class="bi bi-house-door"></i></div>
                  <div className="navbarleft bg-white text-danger"><i class="bi bi-gear"></i></div>
                  <div className="navbarleft"><i class="bi bi-lamp"></i></div>
                  <div className="navbarleft"><i class="bi bi-shield-exclamation"></i></div>
                  <div className="navbarleft"><i class="bi bi-geo-alt"></i></div>
                  <div className="navbarleft"><i class="bi bi-people"></i></div>
    </div>
  )
}

export default Navbar