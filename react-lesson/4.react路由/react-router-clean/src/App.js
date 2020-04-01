/*
 * @Author: zhangl
 * @Date: 2020-04-01 23:33:54
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-02 00:29:06
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /4.react路由/react-router-clean/src/App.js
 * @Description: Do not edit
 */
import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import About from './views/about';
import Home from './views/home';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React 路由案例</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*导航路由链接*/}
              <NavLink to="/about" className="list-group-item">About</NavLink>
              <NavLink to="/home" className="list-group-item">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 路由组件显示 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                {/* 重定向 */}
                <Redirect to="/home" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App