import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

import Nav from '../../components/Header/Navbar'
import TeamDisplay from '../../components/Sections/TeamDisplay'
import Footer from '../../components/Footer'

export default function Team() {
  return (
    <div>
      <Nav
        button={
          <Link to="/register" className="link">New Employee</Link>
        }
      />
      <TeamDisplay />
      <Footer />
    </div>
  )
}
