import React from 'react';
import { connect } from 'react-redux';
import { getCommentsAsync } from '../../redux/actions'
import CommentItem from '../comment-item/comment-item';
import './commentList.css';


class CommentList extends React.Component {
  componentDidMount() {
    this.props.getCommentsAsync();
  }

  render () {
    const { comments } = this.props;
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        {!comments.length && <h2>暂无评论，点击左侧添加评论！！！</h2>}
        <ul className="list-group">
          {comments.length !== 0 &&
            comments.map((item, index) => (
              <CommentItem key={index} {...item} id={index} />
            ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ comments: state }), {
  getCommentsAsync,
})(CommentList);