import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='outer-hero'>
      <div className='inner-hero'>
        <h1>Make Your Team the best it can be</h1>
        <Link to="/register"><button>Enter</button></Link>
      </div>
    </div>
  )
}
