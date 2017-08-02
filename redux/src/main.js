// 引入react
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

// 引入redux ，并获取它里面一个叫createStore 的方法
import { createStore } from 'redux'
// 引入reducers
import reducers from './redux/reducers'
//初始化store（仓库）
const store = createStore(reducers)

// 引入App组件
import App from './App'

// 设置redux的作用范围
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
)
