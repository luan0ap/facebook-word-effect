import React, { Component } from 'react'
import './style.css'
import Button from 'components/Button'
import Input from 'components/Input'

class Form extends Component {
  state = {
    input: '',
    words: ['Hello World', 'congratulations', 'someome']
  }

  getWords = () => this.state.words

  handleChange = ({ target }) => this.setState(state => state.input = target.value)

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form action="" className="form-word" >
        <Input handleChange={this.handleChange} />
        <Button handleSubmit={this.handleSubmit} />
      </form>
    )
  }
}

export default Form