import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/svg/logo.svg'
import Facebook from '../../assets/images/svg/facebook.svg'
import Twitter from '../../assets/images/svg/twitter.svg'
import Dribbble from '../../assets/images/svg/dribbble.svg'
import Linkedin from '../../assets/images/svg/linkedin.svg'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="inner-container">
          <div className="logo-wrap">
            <img src={Logo} alt="Cobal App logo" className="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id exercitationem dolore voluptates rerum! Natus quidem molestias nesciunt.</p>
            <div className="icons">
              <Link to="/"><img src={Facebook} alt="" /></Link>
              <Link to="/"><img src={Twitter} alt="" /></Link>
              <Link to="/"><img src={Dribbble} alt="" /></Link>
              <Link to="/"><img src={Linkedin} alt="" /></Link>
            </div>
          </div>
          <div className="company-wrap">
            <ul>
              <h3>Company</h3>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Features</Link></li>
              <li><Link to="/">Screenshots</Link></li>
              <li><Link to="/">Pricing</Link></li>
              <li><Link to="/">Team</Link></li>
            </ul>
          </div>
          <div className="help-wrap">
            <ul>
              <h3>Help</h3>
              <li><Link to="/">Help Center</Link></li>
              <li><Link to="/">FAQ's</Link></li>
              <li><Link to="/">Terms & Conditions</Link></li>
              <li><Link to="/">Privacy</Link></li>
              <li><Link to="/">Contacts</Link></li>
            </ul>
          </div>
          <div className="solutions-wrap">
            <ul>
              <h3>Solutions</h3>
              <li><Link to="/">Consumer</Link></li>
              <li><Link to="/">Saas</Link></li>
              <li><Link to="/">Education</Link></li>
              <li><Link to="/">Gaming</Link></li>
              <li><Link to="/">Financial Services</Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <span>@indianpix | All rights reserved 2019</span>
      </div>
    </footer>
  )
}
