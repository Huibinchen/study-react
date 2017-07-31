import React from 'react'

// 编写一个Header类（组件）继承自React.Component类
export default class Header extends React.Component{
  render () {
    return (
        <header>
          <h1>我是未登陆的头部</h1>
        </header>
    )
  }
}