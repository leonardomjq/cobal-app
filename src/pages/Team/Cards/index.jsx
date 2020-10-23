import React from 'react'
import './styles.scss'

import { useUserCard } from '../../../context/User'
import LayoutSection from '../../../Layouts/Employee'
import Marco from '../../../assets/images/profile/Marco.jpeg'
import Wilson from '../../../assets/images/profile/Wilson.jpeg'
import Leonardo from '../../../assets/images/profile/Leonardo.png'
import Marta from '../../../assets/images/profile/Marta.jpeg'
import Nuno from '../../../assets/images/profile/Nuno.jpeg'
import Rui from '../../../assets/images/profile/Rui.jpeg'
import Becca from '../../../assets/images/profile/Becca.jpeg'


export default function TeamDisplay() {

  const { userCard } = useUserCard()
  console.log(userCard)

  return (
    <div>
      <LayoutSection title="Team">
        <div className='wrapper'>
          <div className='card-wrapper'>
            <div className='card'>
              <div className="card-heading">
                <img src={Marco} alt="random profile" />
                <div className="card-heading-inner">
                  <h3>Marco Sacristão</h3>
                  <p>Employee ID:</p>
                </div>
              </div>
              <hr />
              <ul>
                <li>Birthdate:</li>
                <li>Address:</li>
                <li>Status:</li>
                <li>Position:</li>
                <li>Created: </li>
                <li>Updated: </li>
              </ul>
            </div>
            <div className='card'>
              <div className="card-heading">
                <img src={Wilson} alt="random profile" />
                <div className="card-heading-inner">
                  <h3>Wilson Edgar</h3>
                  <p>Employee ID:</p>
                </div>
              </div>
              <hr />
              <ul>
                <li>Birthdate:</li>
                <li>Address:</li>
                <li>Status:</li>
                <li>Position:</li>
                <li>Created: </li>
                <li>Updated: </li>
              </ul>
            </div>
            <div className='card'>
              <div className="card-heading">
                <img src={Leonardo} alt="random profile" />
                <div className="card-heading-inner">
                  <h3>Leonardo Jaques</h3>
                  <p>Employee ID: <strong>42</strong></p>
                </div>
              </div>
              <hr />
              <ul>
                <li>Birthdate: <strong>07/11/1994</strong></li>
                <li>Address: <strong>Rua Cidade de Lisboa, 2020</strong></li>
                <li>Status: <strong>Single</strong></li>
                <li>Position: <strong>Front-end Developer</strong></li>
                <li>Created: </li>
                <li>Updated: </li>
              </ul>
            </div>
            <div className='card'>
              <div className="card-heading">
                <img src={Marta} alt="random profile" />
                <div className="card-heading-inner">
                  <h3>Marta Seca</h3>
                  <p>Employee ID:</p>
                </div>
              </div>
              <hr />
              <ul>
                <li>Birthdate:</li>
                <li>Address:</li>
                <li>Status:</li>
                <li>Position:</li>
                <li>Created: </li>
                <li>Updated: </li>
              </ul>
            </div>
            <div className='card'>
              <div className="card-heading">
                <img src={Nuno} alt="random profile" />
                <div className="card-heading-inner">
                  <h3>Nuno Miranda</h3>
                  <p>Employee ID:</p>
                </div>
              </div>
              <hr />
              <ul>
                <li>Birthdate:</li>
                <li>Address:</li>
                <li>Status:</li>
                <li>Position:</li>
                <li>Created: </li>
                <li>Updated: </li>
              </ul>
            </div>
            <div className='card'>
              <div className="card-heading">
                <img src={Rui} alt="random profile" />
                <div className="card-heading-inner">
                  <h3>Rui Baltazar</h3>
                  <p>Employee ID:</p>
                </div>
              </div>
              <hr />
              <ul>
                <li>Birthdate:</li>
                <li>Address:</li>
                <li>Status:</li>
                <li>Position:</li>
                <li>Created: </li>
                <li>Updated: </li>
              </ul>
            </div>
            <div className='card'>
              <div className="card-heading">
                <img src={Becca} alt="random profile" />
                <div className="card-heading-inner">
                  <h3>Becca Spence</h3>
                  <p>Employee ID:</p>
                </div>
              </div>
              <hr />
              <ul>
                <li>Birthdate:</li>
                <li>Address:</li>
                <li>Status:</li>
                <li>Position:</li>
                <li>Created: </li>
                <li>Updated: </li>
              </ul>
            </div>
            {userCard.map((item, idx) => (
              <div className='card'>
                <div className="card-heading">
                  <img src={item.img} alt="random profile" />
                  <div className="card-heading-inner">
                    <h3>{item.name}</h3>
                    <p>Employee ID: <strong>{item.employeeId}</strong></p>
                  </div>
                </div>
                <hr />
                <ul>
                  <li>Birthdate: <strong>{item.birthdate}</strong></li>
                  <li>Address: <strong>{item.address}</strong></li>
                  <li>Status: <strong>{item.status}</strong></li>
                  <li>Position: <strong>{item.position}</strong></li>
                  <li>Created: <strong>{item.created}</strong></li>
                  <li>Updated: </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </LayoutSection>
    </div>
  )
}
