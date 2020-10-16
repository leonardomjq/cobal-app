import React from 'react'
import './styles.scss'

import Layout from '../../../Layouts/Employee'
import PrimaryColorButton from "../../Buttons/PrimaryColor"

export default function NewEmployee() {
  return (
    <Layout title="New Employee">
      <div className="outer-form">
        <div className="inner-form">
          <form>
            <input type="text" placeholder="Employee ID:" />
            <input type="text" placeholder="Name:" />
            <input type="text" placeholder="Birthdate:" />
            <input type="text" placeholder="Address:" />
            <input type="text" placeholder="Status:" />
            <input type="text" placeholder="Position:" />
            <div className="grid">
              <div>
                <input type="text" placeholder="Created:" />
              </div>
              <div></div>
              <div>
                <input type="text" placeholder="Updated:" />
              </div>
            </div>
          </form>
          <PrimaryColorButton>Submit</PrimaryColorButton>
        </div>
      </div>
    </Layout>
  )
}
