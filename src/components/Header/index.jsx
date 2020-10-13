import React from 'react'
import './styles.scss'

import Navbar from './Navbar'
import Hero from './Hero'

export default function Header() {
  return (
    <header>
      <Navbar />
      <Hero />
    </header>
  )
}
