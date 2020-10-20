import React from 'react'
import { Link } from 'react-router-dom'

import Nav from '../../components/Header/Navbar'
import Form from '../../pages/Registration/Form'
import Footer from '../../components/Footer'

export default function Registration() {
  return (
    <div>
      <Nav
        button={
          <Link to="/register" className="link">New Employee</Link>
        }
      />
      <Form />
      <Footer />
    </div>
  )
}
