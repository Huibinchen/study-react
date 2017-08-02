import React from 'react'

import http from 'axios'

/*http.get('http://h5.yztctech.net/api/axf/apihomehot.php')
  .then((data)=>{
    console.log(data)
  })*/
/*http.get('http://localhost:9091/list')
  .then(data=>{
    console.log(data)
  })*/

// 引入react-router模块
import {
  // BrowserRouter起一个别名(短名)Router
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// 引入home,cart,mine组件
import Home from 'components/Home/Home'
import Cart from 'components/Cart/Cart'
// 引入Items组件
import Items from 'components/Items/Items'
// import Mine from 'components/Mine/Mine'
// 简写
const Mine = ()=>(
  <div>
    <h1>我的页面</h1>
  </div>
)

// 编写一个App类（组件）继承自React.Component类
export default class App extends React.Component{
  render () {
    
    return (
      <Router>
        <div>
          {/*指定路由的位置和地址对应的组件，类似于vue中的router-view*/}
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/mine" component={Mine}/>
          <Route path="/items" component={Items}/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/mine">Mine</Link>
            </li>
            <li>
              <Link to="/items">Items</Link>
            </li>
          </ul>
        </div>
      </Router>
      )
  }
}