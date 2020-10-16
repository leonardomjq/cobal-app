import React from 'react'
import './styles.scss'

export default function Employee(props) {
  return (
    <section>
      <div className="container">
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        {props.children}
      </div>
    </section>
  )
}
