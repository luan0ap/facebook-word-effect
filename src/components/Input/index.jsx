import React from 'react'

const Input = ({handleChange}) =>
  <React.Fragment>
    <label htmlFor="words">Facebook</label>
    <textarea 
    name="words" 
    id="word" 
    cols="30" 
    rows="10" 
    className="input" 
    onChange={handleChange}>
    </textarea>
  </ React.Fragment>

export default Input