import React from 'react'
import './style.css'
import './properties.css'

const Input = ({handleChange}) =>
  <React.Fragment>
    <textarea 
    name="words"  
    className="input" 
    placeholder="Insert your text"
    onChange={handleChange}>
    </textarea>
  </ React.Fragment>

export default Input