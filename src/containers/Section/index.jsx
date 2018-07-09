import React, { Component } from 'react'
import Form from 'components/Form'
import Post from 'components/Post'

class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      words: ['Hello World', 'congratulations', 'someome'],
      posts: [{ text: 'hi', special: false }]
    }
  }

  set = (data = '') => (cb = () => { }) => this.setState(cb.bind(this, ...data))

  render() {
    return (
      [
        <Post state={this.state} />,
        <Form state={this.state} set={this.set} />
      ]
    )
  }

}

export default Section