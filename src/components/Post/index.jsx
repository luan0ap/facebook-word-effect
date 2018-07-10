import React from 'react'
import './style.css'
import Item from 'components/Item'

const effect = () => alert('Hello World')

const Posts = ({ state }) => (
  <div className='posts-user'>
    <ul>
      {state.posts.map((data, index) =>
        <Item
          text={data.text}
          special={data.special}
          effect={effect}
          index={index}
        />
      )}
    </ul>
  </div>
)

export default Posts
