import React, { useState } from 'react'
import './styles.scss'

import Layout from '../../../Layouts/Employee'
import PrimaryColorButton from "../../Buttons/PrimaryColor"

export default function NewEmployee() {
  const [employeeId, setEmployeeId] = useState('')
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [address, setAddress] = useState('')
  const [status, setStatus] = useState('')
  const [position, setPosition] = useState('')
  const [created, setCreated] = useState(new Date())
  const [updated, setUpdated] = useState('')


  const submitValue = () => {
    const formdetails = {
      'Employee ID': employeeId,
      'Name': name,
      'Birthdate': birthdate,
      'Address': address,
      'Status': status,
      'Position': position,
      'Created': created,
      'Updated': updated
    }
    console.log(formdetails)
  }

  return (
    <Layout title="New Employee">
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
                <input disabled type="text" placeholder={`Created: ${new Date()}`} onChange={e => setCreated(e.target.value)} onFocus={e => new Date()} />
              </div>
              <div></div>
              <div>
                <input disabled type="text" placeholder="Updated:" onChange={e => setUpdated(e.target.value)} />
              </div>
            </div>
          </form>
          <PrimaryColorButton submit={submitValue}>Submit</PrimaryColorButton>
        </div>
      </div>
    </Layout>
  )
}
