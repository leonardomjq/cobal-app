import React from 'react'
import './styles.scss'

import LayoutSection from '../../../Layouts/Employee'

export default function TeamDisplay() {
  return (
    <div>
      <LayoutSection title="Team">
        <div className='wrapper'>
          <div className='card-wrapper'>
            <div className='card'>
              <div className="card-heading">
                <h3>Bessie Berny</h3>
                <p>Employee ID:</p>
              </div>
              <p>Birthdate:</p>
              <p>Address:</p>
              <p>Status</p>
              <p>Position</p>
              <p>Created:</p>
              <p>Updated:</p>
            </div>

            <div className='card'>
              <div className="card-heading">
                <h3>Bessie Berny</h3>
                <p>Employee ID:</p>
              </div>
              <p>Birthdate:</p>
              <p>Address:</p>
              <p>Status</p>
              <p>Position</p>
              <p>Created:</p>
              <p>Updated:</p>
            </div>
          </div>
        </div>
      </LayoutSection>
    </div>
  )
}
