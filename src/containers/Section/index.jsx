import React, { Components } from 'react'
import Form from 'components/Form'

export default class Section extends Components {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      words: ['Hello World', 'congratulations', 'someome']
    }
  }

  set = (target) => this.setState(state => state.input = target.value)

  render() {
    return (
      <Form state={this.state} set={this.set}/>
    )
  }

}
