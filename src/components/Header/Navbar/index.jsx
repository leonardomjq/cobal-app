import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import Logo from '../../../assets/images/svg/logo.svg'

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="Cobal logo" className='logo' />
      <ul className='nav-links'>
        <li className='nav-item'>
          <Link to="#" className="link">Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="#" className="link">Absences</Link>
        </li>
        <li className='nav-item'>
          <Link to="#" className="link">Employees</Link>
        </li>
      </ul>
    </nav >
  )
}
