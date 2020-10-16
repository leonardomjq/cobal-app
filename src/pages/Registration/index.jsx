import React from 'react'
import { Link } from 'react-router-dom'

import Nav from '../../components/Header/Navbar'
import TeamForm from '../../components/Sections/TeamForm'
import Footer from '../../components/Footer'

export default function Registration() {
  return (
    <div>
      <Nav
        button={
          <Link to="/register" className="link">New Employee</Link>
        }
      />
      <TeamForm />
      <Footer />
    </div>
  )
}
