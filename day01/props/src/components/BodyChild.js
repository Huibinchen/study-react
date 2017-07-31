import React from 'react'

export default class ComponentBodyChild extends React.Component{
  constructor(){
    // super->就是调用基类的所有初始化方法
    super()
  }
  render(){
    return (
      <div>
        <h2 className="red">我是body的子组件</h2>
        新的age:<input data-num='56' data-id='98' type='text' value={this.props.age} onChange={this.props.childChangeAge.bind(this)} />
      </div>
      )
  }
}

// 设置默认props
ComponentBodyChild.defaultProps = {
  age: 13
}

