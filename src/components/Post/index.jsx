import React from 'react'
import './style.css'
import Item from 'components/Item'

const Posts = ({state}) => (
  <div className="posts-user">
    <ul>
     {state.posts.map((word, index) => <Item data={word} index={index}/>)}
    </ul>
  </div>
)

export default Posts