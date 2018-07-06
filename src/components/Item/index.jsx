import React from 'react'
import './style.css'
const Item = ({data, index}) => <li className="item" key={index}>{data}</li>

export default Item