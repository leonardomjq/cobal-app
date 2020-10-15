import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import Logo from '../../../assets/images/svg/logo.svg'

export default function Navbar(props) {
  return (
    <nav>
      <img src={Logo} alt="Cobal logo" className='logo' />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/team">Absences</Link>
        </li>
        <li>
          <Link to="/team">Employees</Link>
        </li>
        <li className="prop-button">
          {props.button}
        </li>
      </ul>
    </nav >
  )
}
