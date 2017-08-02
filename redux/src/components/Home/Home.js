import React from 'react'

// 引入react-router模块
import {
  // BrowserRouter起一个别名(短名)Router
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Home extends React.Component{
  constructor () {
    super()
    this.state = {
      userList: [
        { 'userId' : 1001, userName : '李达康', userAge : 18},
        { 'userId' : 1002, userName : '高玉良', userAge : 20},
        { 'userId' : 1003, userName : '祁同伟', userAge : 16},
        { 'userId' : 1004, userName : '侯亮平', userAge : 22},
        { 'userId' : 1005, userName : '白百何', userAge : 33}
      ]
    }
  }
  render () {
    return (
        <div class="home">
          <h1>我是Home页</h1>
          <ul>
            {this.state.userList.map((item, index)=>{
              return (
                  <li key={item.userId}>
                    <Link to={`/user/${item.userId}`}>{ item.userName }</Link>
                  </li>
                )
            })}
          </ul>
        </div>
      )
  }
}