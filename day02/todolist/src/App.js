import React from 'react'

// 原始数据
let todo = {
    user:'唐菜也',
    items:[{action:"买牙膏",done:false,id:1},
      {action:"给张三发邮件",done:false,id:2},
      {action:"给李四打电话",done:true,id:3},
      {action:"还信用卡",done:false,id:4}]
  }

// 引入todolist
import TodoList from 'components/TodoList/TodoList'
// 编写一个App类（组件）继承自React.Component类
export default class App extends React.Component{
  render () {
    
    return (
      <div>
        <TodoList user={todo.user} items={todo.items} />
      </div>
      )
  }
}