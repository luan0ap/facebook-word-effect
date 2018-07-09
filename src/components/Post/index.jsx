import React from 'react'
import './style.css'
import Item from 'components/Item'

const Posts = ({ state }) => (
  <div className='posts-user'>
    <ul>
      {state.posts.map(data => <Item text={data.text} special={data.special} />)}
    </ul>
  </div>
)

export default Posts
