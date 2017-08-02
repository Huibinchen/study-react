import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
// 详情组件
import Item from './item'

export default class ComponentItems extends React.Component{

  render(){
    // console.log(this.props.match)
    return (
      <div>
              <h1>商品</h1>
              <Link to={`${this.props.match.url}/TV`}>电视</Link>
              <Link to={`${this.props.match.url}/phone`}>手机</Link>
              <Link to={`${this.props.match.url}/compute`}>电脑</Link>
              <Route path={`${this.props.match.url}/:type`} component={Item}></Route>
            {/*默认的内容*/}
              <Route exact path={this.props.match.url} render={() => (
                  <h3>请选择一类商品</h3>
              )}/>
          </div>
      )
  }
}