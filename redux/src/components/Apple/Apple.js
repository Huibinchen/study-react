import React from 'react'

import {connect} from 'react-redux'
import actions from '@/redux/actions'

class Banana extends React.Component{

  constructor(){
    super()
    this.state = {
      price: 2
    }
  }

  // 添加
  addOne () {
    // console.log(this.props)
    // dispatch->接受的是一个对象并调用reducers的处理方法
    this.props.dispatch({type:'ADD', price:this.state.price})
    // 如果异步操作，放到actions里面
    // this.props.dispatch(actions.inc(this.state.price))
  }
  // 减少
  decOne () {
    this.props.dispatch({type:'DEC', price:this.state.price})
  }

  render(){
    return (
      <div>
        <h1>苹果</h1>
        <button onClick={this.addOne.bind(this)}>买一个</button>
        <button onClick={this.decOne.bind(this)}>减一个</button>
      </div>
      )
  }
}

export default connect()(Banana)
