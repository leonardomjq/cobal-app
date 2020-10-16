import React from 'react'
import './styles.scss'
import AR from "../../../assets/images/svg/img-landing.svg"
import PrimaryButton from '../../Buttons/PrimaryColor'

export default function Augmented() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="top-wrapper">
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos aperiam in consequatur dolorum tempore lorem ipsum jobsum lis
          </p>
        </div>
        <div className="grid">
          <img src={AR} alt="illustration of four people using a virtual reality headset" />
          <div className="middle-wrapper">
            <div className="inner-wrapper">
              <h2>Augmented Reality</h2>
              <div className="flex">
                <hr />
                <hr />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut recusandae odit voluptates reiciendis enim? Necessitatibus voluptas in aliquid ex repellendus fuga atque perferendis molestiae nemo neque quia alias, libero rem?</p>
              <PrimaryButton>LEARN MORE</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
