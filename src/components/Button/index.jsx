import React from 'react' 
import './style.css'
import './properties.css'

const Button = ({handleSubmit}) => (
  <button type="submit" className="submit desactive" onClick={handleSubmit}>Enviar</button>
)

export default Button