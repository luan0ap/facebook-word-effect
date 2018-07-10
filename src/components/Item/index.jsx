import React from 'react'
import './style.css'

const Item = ({ text, special, effect, index }) => {
  if (special) {
    return <li className='item special' onClick={effect} key={index}>{text}</li>
  }

  return <li className='item' key={index}>{text}</li>
}
export default Item
