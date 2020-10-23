import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import { useUserCard } from '../../../context/User'

import LayoutSection from '../../../Layouts/Employee'
import PrimaryColorButton from "../../../components/Buttons/PrimaryColor"

export default function Form() {
  const [employeeId, setEmployeeId] = useState('')
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [address, setAddress] = useState('')
  const [status, setStatus] = useState('')
  const [position, setPosition] = useState('')
  const [created, setCreated] = useState(new Date().toLocaleString())
  const [updated, setUpdated] = useState('')

  const { userCard, setUserCard } = useUserCard()

  const submitValue = () => {
    const img = 'https://loremflickr.com/320/240/profile,girl/all'
    const formdetails = {
      img,
      employeeId,
      name,
      birthdate,
      address,
      status,
      position,
      created,
      updated
    }

    setUserCard(state => [formdetails, ...state])

    console.log(userCard)
  }

  return (
    <LayoutSection title="New Employee">
      <div className="outer-form">
        <div className="inner-form">
          <form autoComplete="off">
            <input type="number" placeholder="Employee ID:" onChange={e => setEmployeeId(e.target.value)} />
            <input type="text" placeholder="Name:" onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Birthdate:" onChange={e => setBirthdate(e.target.value)} />
            <input type="text" placeholder="Address:" onChange={e => setAddress(e.target.value)} />
            <input type="text" placeholder="Status:" onChange={e => setStatus(e.target.value)} />
            <input type="text" placeholder="Position:" onChange={e => setPosition(e.target.value)} />
            <div className="grid">
              <div>
                <input disabled type="text" placeholder={`Created: ${new Date().toLocaleString()}`} onChange={e => setCreated(e.target.value)} />
              </div>
              <div></div>
              <div>
                <input disabled type="text" placeholder="Updated:" onChange={e => setUpdated(e.target.value)} />
              </div>
            </div>
          </form>
          <Link to="/team">
            <PrimaryColorButton submit={submitValue}>Submit</PrimaryColorButton>
          </Link>
        </div>
      </div>
    </LayoutSection>
  )
}
