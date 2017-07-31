import React from 'react'

// 引入bodyChild组件
import BodyChild from './BodyChild'

export default class ComponentBody extends React.Component{

  // 构造函数
  constructor () {
    super()
    this.state = {
      username: 'tangcaiye',
      num: 0,
      todos: [],
      age: 18
    }
  }
  componentWillMount () {
    // console.log(this.props.todos)
    this.setState({
      todos: this.props.todos
    })
  }
  changeValue () {
    let num = this.state.num
    num++
    this.setState({
      num: num
    })
  }
  // 每次更改state
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  bodyChangeAge (newVal) {
    console.log('body'+newVal)
    this.setState({
      age: newVal
    })
  }
  // 渲染
  render () {
    // console.log(this.state.num)
    /*setTimeout(()=>{
      let num = this.state.num
      num++
      this.setState({
        num: num
      })
    },2000)*/
    // let todos = this.props.todos
    return (
        <main>
          <h1>页面的主体内容</h1>
          <p>{this.state.username}</p>
          <p>{this.state.num}</p>
          <button onClick={this.changeValue.bind(this)}>点击切换username</button>
          <ul>
            {this.state.todos.map((item,index)=>{
              return <li key={item}>{item}</li>
            })}
          </ul>
          {this.state.age}
          <BodyChild age={this.state.age} childChangeAge={this.bodyChangeAge.bind(this)}/>
        </main>
      )
  }
}