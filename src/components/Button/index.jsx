import React from 'react' 

const Button = ({handleSubmit}) => (
  <button type="submit" className="submit" onClick={handleSubmit}>Enviar</button>
)

export default Button