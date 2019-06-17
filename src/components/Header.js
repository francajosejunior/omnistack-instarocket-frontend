import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

import logo from './../assets/logo.svg'
import camera from './../assets/camera.svg'

const Header = () => {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="InstaRocket" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar Publicacao" />
        </Link>
      </div>
    </header>
  )
}

export default Header