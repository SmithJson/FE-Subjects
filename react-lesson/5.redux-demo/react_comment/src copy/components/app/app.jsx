import React from 'react'
import { HOCProvider } from '../../HOC';
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

class App extends React.Component {

  render() {
    return (
      <HOCProvider value={this.props}>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd />
          <CommentList />
        </div>
      </HOCProvider>
    );
  }
}

export default (App)