/*
 * @Author: zhangl
 * @Date: 2020-04-01 23:33:54
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-02 01:04:01
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /4.react路由/react-router-clean/src/views/home.js
 * @Description: Do not edit
 */
import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import New from './new';
import Message from './message';

export default function Home() {
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <Link to="/home/news">News</Link>
          </li>
          <li>
            <Link to="/home/message">Message</Link>
          </li>
        </ul>
        <ul>
          {/* 去除重复路由 */}
          <Switch>
            <Route path="/home/news" component={New} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </ul>
      </div>
    </div>
  )
}