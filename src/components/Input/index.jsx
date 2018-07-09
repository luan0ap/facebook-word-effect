import React from 'react'
import './style.css'
import './properties.css'

const Input = ({ handleChange }) => (
  <textarea
    name='words'
    className='input'
    placeholder='Insert your text'
    onChange={handleChange} />
)

export default Input
