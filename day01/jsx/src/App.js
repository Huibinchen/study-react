import React from 'react'

// 引入header组件
import Header from 'components/Header'
// 引入已登陆的组件
import LoginHeader from 'components/LoginHeader'
// 引入footer组件
import Footer from 'components/Footer'
// 引入body组件
import ComponentBody from 'components/Body'

// 编写一个App类（组件）继承自React.Component类
export default class App extends React.Component{
  render () {
    // var disabledBol = true
    var arr = ['买菜', '打游戏', '学习react', '还信用卡']
    /*var newArr = [
      <li>买菜</li>,
      <li>打游戏</li>,
      <li>学习react</li>
    ]*/
    // 比如这是从后端返回一段string类型的html代码
    var html = "<a href='###'>你好&nbsp;育知</a>"
    return (
      <div>
        {/*<input type='button' disabled={disabledBol} value='按钮' />*/}
        {/*{newArr}*/}
        {/*arr.map((item, index) => {
          return <li className='red' key={item}>{item}</li>
        })*/}
        {/*<p>{html}</p>*/}
        {/*<p dangerouslySetInnerHTML={{__html: html}}></p>*/}
        <ComponentBody todos={arr} />
      </div>
      )
  }
}