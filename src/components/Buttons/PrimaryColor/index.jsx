import React from 'react'
import './styles.scss'

export default function PrimaryColor(props) {
  return (
    <>
      <button onClick={props.submit}>{props.children}</button>
    </>
  )
}
