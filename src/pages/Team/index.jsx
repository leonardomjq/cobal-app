import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

import Nav from '../../components/Header/Navbar'

export default function Team() {
  return (
    <Nav
      button={<Link to="/register" className="link">New Employee</Link>}
    />
  )
}
