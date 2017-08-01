import React from 'react'

// 原始数据
var tabs = [
  {btn:"home",content:"HOME",id:1},
  {btn:"cart",content:"CART",id:2},
  {btn:"mine",content:"MINE",id:3},
  {btn:"bb",content:"BB",id:4}
]

// import ComponentHeader from 'components/ComponentHeader/ComponentHeader'
import Tab from 'components/Tab/Tab'

// 编写一个App类（组件）继承自React.Component类
export default class App extends React.Component{
  render () {
    
    return (
      <div>
        <Tab tab={tabs} />
      </div>
      )
  }
}