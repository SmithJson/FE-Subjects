import React from 'react';
import { HOCConsumer } from "../../HOC";
import './commentItem.css';

class CommentItem extends React.Component {
  constructor() {
    super();
    this.handleDelComment = () => {
      if (window.confirm("确认删除评论")) {
        this.props.delComment(this.props.id);
      }
    };
  }
  
  render() {
    const { name, content } = this.props;

    return (
      <li className="list-group-item">
        <div className="handle">
          <a onClick={this.handleDelComment}>删除</a>
        </div>
        <p className="user">
          <span>{name}</span>
          <span>说: {content}</span>
        </p>
        <p className="centence"></p>
      </li>
    );
  }
}

export default HOCConsumer(null)(CommentItem);
