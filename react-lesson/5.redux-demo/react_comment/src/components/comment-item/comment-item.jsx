import React from 'react'
import './commentItem.css'

class CommentItem extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:">删除</a>
        </div>
        <p className="user"><span></span><span>说:</span></p>
        <p className="centence"></p>
      </li>
    )
  }
}

export default (CommentItem)
