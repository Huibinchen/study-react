import React from 'react'

// 引入header组件
import Header from 'components/Header'
// 引入已登陆的组件
import LoginHeader from 'components/LoginHeader'
// 引入footer组件
import Footer from 'components/Footer'

// 编写一个App类（组件）继承自React.Component类
export default class App extends React.Component{
  render () {
    // 可以纯的js代码
    /*let loginBol = Math.random()>0.5 ? true : false
    let componentLogin = null
    if (loginBol) {
      componentLogin = <Header/>
    } else {
      componentLogin = <LoginHeader/>
    }*/
    return (
      <div>
        {Math.random()>0.5 ? <Header/>: <LoginHeader/>}
        <Footer/>
      </div>
      )
  }
}