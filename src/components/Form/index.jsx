import React, { Component } from 'react'
import Input from './Input/index'

class Form extends Component {
  state = {
    input: '',
    words: ['Hello World']
  }

  getWords() {
    return this.state.words
  }

  handleChange = ({ target }) => this.setState(state => state.input = target.value)

  handleSubmit() {
    return true
  }

  render() {
    return (
      <form action="">
        <Input handleChange={this.handleChange} />
      </form>
    )
  }
}

export default Form