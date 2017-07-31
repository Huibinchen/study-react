// 引入react
import React from 'react'
import ReactDOM from 'react-dom'

// render->渲染
// 在id为app的标签下渲染一个h1标签内容为Hello react!
/*ReactDOM.render(
  <h1>Hlo react!</h1>,
  document.getElementById("app")
)*/

// 引入App组件
import App from './App'

ReactDOM.render(
  <App/>,
  document.getElementById("app")
)
