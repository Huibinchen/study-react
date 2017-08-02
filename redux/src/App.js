import React from 'react'

import { connect } from 'react-redux'

// 引入苹果和香蕉组件
import Banana from 'components/Banana/Banana'
import Apple from 'components/Apple/Apple'

// 编写一个App类（组件）继承自React.Component类
class App extends React.Component{
  render () {
    return (
      <div>
        <h1>总价：{this.props.count}</h1>
        <Banana></Banana>
        <Apple></Apple>
      </div>
      )
  }
}

// 如果使用redux都需要连接connect,接受一个回调函数作为参数,第二括号放的就是要连接的组件的名称,回调函数返回的对象会传递给连接组件的props

// 获取state
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(App)



