import React from 'react'
import './style.css'
import './properties.css'
import Button from 'components/Button'
import Input from 'components/Input'

const Form = ({ state, set }) => {

  const handleChange = ({target}) => set(target)(thisState => thisState.input = target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    set(state)(thisState => ({posts: [...thisState.posts, state.input]}))
  }

  return (
    <form action="" className="form-word" >
      <Input handleChange={handleChange} />
      <div>
        <Button state={state.input} handleSubmit={handleSubmit} />
      </div>
    </form>
  )
}

export default Form