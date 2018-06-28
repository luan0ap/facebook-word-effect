import React from 'react' 
import './style.css'
import './properties.css'

const Button = ({state, handleSubmit}) => (
    <button
     type="submit"
     className={(state ? 'submit active' : 'submit desactive')} 
     onClick={(state ? handleSubmit : (e) => e.preventDefault())}>
     Enviar
     </button>
  )

export default Button