import React from 'react'
// 引入classnames,用于处理class名称
import cs from 'classnames'

export default class TodoList extends React.Component{
  constructor(){

    super()
    this.state = {
      items: []
    }
  }
  componentWillMount () {
    this.setState({
      items: this.props.items
    })
  }
  addTodo () {
    // 获取dom元素
    // console.log(this.refs.inputEl.value)
    let items = this.state.items
    items.push({
      action: this.refs.inputEl.value,
      done: false,
      id: items[items.length-1].id + 1
    })
    this.setState({
      items: items
    })
    this.refs.inputEl.value = ""
  }
  // 切换done
  changeDone (id) {
    let items = this.state.items
    items[id-1].done = !items[id-1].done
    this.setState({
      items: items
    })
  }
  render () {
    let items = this.state.items
    let len = items.filter(item=>!item.done).length
    // 过滤
    items = items.filter(item=>!item.done)
    return (
      <div className="container">
        <div className="page-header">
          <h1>
            {this.props.user}代办事项
            {/*<span className={len>2?'label label-default label-warning':'label label-default label-success'}>{len}</span>*/}
            <span className={cs('label label-default',{'label-warning': len>2, 'label-success': !(len>2)})}>{len}</span>
          </h1>
        </div>
        <div className="input-group">
            <input type="text" ref="inputEl" className="form-control" placeholder="添加任务"/>
            <span className="input-group-btn">
              <button className="btn btn-default btn-success" type="button" onClick={this.addTodo.bind(this)}>添加</button>
            </span>
          </div>
          <br/>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>详细内容</th>
                <th>是否完成</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                    <tr key={item.id}>
                      <td>{item.action}</td>
                      <td>
                        <input type="checkbox" checked={ item.done } onChange={this.changeDone.bind(this, item.id)} />
                      </td>
                      <td>{ item.done.toString() }</td>
                    </tr>
                  )
              })}
            </tbody>
          </table>
      </div>
      )
  }
}