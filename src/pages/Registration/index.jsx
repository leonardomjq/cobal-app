import React from 'react'
import Nav from '../../components/Header/Navbar'
import { Link } from 'react-router-dom'

export default function Registration(props) {
  return (
    <div>
      <Nav
        button={<Link to="/register" className="link">New Employee</Link>}
      />
    </div>
  )
}
