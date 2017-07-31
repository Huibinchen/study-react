import React from 'react'

// 编写一个Header类（组件）继承自React.Component类
export default class LoginHeader extends React.Component{
  render () {
    return (
        <header>
          <h1>我是已经登陆后的头部</h1>
        </header>
    )
  }
}