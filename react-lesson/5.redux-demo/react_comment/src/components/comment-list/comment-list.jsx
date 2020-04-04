import React from 'react'
import CommentItem from '../comment-item/comment-item'
import './commentList.css'


class CommentList extends React.Component {

  render () {
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          <CommentItem />
        </ul>
      </div>
    )
  }
}

export default (CommentList)