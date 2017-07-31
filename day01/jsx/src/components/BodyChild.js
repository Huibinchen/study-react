import React from 'react'

export default class ComponentBodyChild extends React.Component{
  constructor(){
    // super->就是调用基类的所有初始化方法
    super()
  }
  changeValue (event) {
    // console.log(event.target.value)
    this.props.childChangeAge(event.target.value)
  }
  render(){
    return (
      <div>
        <h2>我是body的子组件</h2>
        新的age:<input type='text' value={this.props.age} onChange={this.changeValue.bind(this)} />
      </div>
      )
  }
}