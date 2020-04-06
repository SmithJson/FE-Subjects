import React from 'react';
import { HOCConsumer } from '../../HOC';

class CommentAdd extends React.Component {
  constructor() {
    super();
    this.refName = React.createRef();
    this.refContent = React.createRef();

    // 添加事件
    this.handleAddComment = () => {
      const name = this.refName.current.value;
      const value = this.refContent.current.value;
      this.props.addComment({
        name,
        connect: value,
      });
      // 清空输入内容
      this.refName.current.value = '';
      this.refContent.current.value = ''
    };
  }
  
  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              className="form-control"
              placeholder="用户名"
              ref={this.refName}
            />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="评论内容"
              ref={this.refContent}
            ></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                type="button"
                className="btn btn-default pull-right"
                onClick={this.handleAddComment}
              >
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default HOCConsumer(null)(CommentAdd);