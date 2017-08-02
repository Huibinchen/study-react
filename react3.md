## http-网络请求

安装`axios`

`cnpm install axios --save`

使用：

```javascript
import http from 'axios'

http.get("http://h5.yztctech.net/api/axf/apihomehot.php")
	.then(function (data){
		console.log(data)
	})
```

安装`json-server`和`mockjs`

`cnpm install json-server mockjs`

配置`package.json`:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "webpack-dev-server --progress --inline",
  "build": "webpack --env production",
  "db": "node mock.js",
  "mock": "json-server db.json --port 8081",
  "dev": "npm run mock & npm run start"
}
```

`mockjs`中的代码:

```javascript
// 使用 Mock,梳理需求
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
  'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
  }]
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
});
```



## react-router

安装：

`cnpm install react-router-dom --save`

引入模块：

```react
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
```

编写3个组件并引入：

```javascript
import Home from './components/home'
import Cart from './components/cart'
import Mine from './components/mine'
```

设置路由：

```react
export default class App extends React.Component{
	
	render(){
		
		return (
			<Router>
				<div>
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
					</ul>
					<Route exact path="/" component={Home}/>
        			<Route path="/cart" component={Cart}/>
        			<Route path="/mine" component={Mine}/>
				</div>
			</Router>
			)
	}
}
```

> 在上面的基础示例中，子组件均使用了extends 去继承React.Component，如果只是简单的视图内容，可以使用简单的函数去书写

```react
// import Mine from './components/mine'
// 简写
const Mine = ()=>(
  <div>
  	<h1>我的页面</h1>
  </div>
)
```

**代码解析**

1. `<Link/> `     配置路由访问 ，将被渲染为a标签
2. to 点击链接要跳转到的路由路径
3. path   匹配的路径  与 link to 匹配
4. component    当匹配规划成立时，要渲染的组件
5. exact     *Boolean*   是否完全匹配（参照下文中isExact）注意：当没有设置具体路径名称时，比如上面示例中的  /   ，exact必须添加，否则会发生模糊匹配



### 嵌套路由

在基础示例中的app.js中补充一个items路由配置:

```javascript
...
import Items from "./Items"
...
...
<li>
  <Link to="/items">Items</Link>
</li>
 ...
 ...
 <Route path="/items" component={Items}/>
 ...
```

Items.js

```javascript
import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import Item from './item'

export default class ComponentItems extends React.Component{

	render(){
		return (
			<div>
	            <h1>商品</h1>
	            <Link to={`${this.props.match.url}/TV`}>电视</Link>
	            <Route path={`${this.props.match.url}/TV`} component={Item}></Route>
	            <Route exact path={this.props.match.url} render={() => (
	                <h3>请选择一类商品</h3>
	            )}/>
	        </div>
			)
	}
}
```

item.js

```javascript
import React from 'react'

export default class ComponentTv extends React.Component{

	render(){
		return (
			<div>
				<h1>详情商品</h1>
			</div>
			)
	}
}
```



**代码解析**

1. match 匹配对象

   - params 动态设置的路由参数

   - isExact 是否完全匹配（没有后面的斜线）

     设置匹配路径               实际地址路径                              exact                                 是否匹配                      

   | `/one` | `/one/two` | `true`  | no   |
   | ------ | ---------- | ------- | ---- |
   | `/one` | `/one/two` | `false` | yes  |

   - path 匹配路径（Route中设置的path）

   - url 路径（Link中设置的to）

   - 可在如下场景中获取match对象(最常用的两种)

     - 当使用Component编写时 通过 this.props.match获取（上面的示例中）

     - 当使用普通的render函数

       ```javascript
       const Com = ({match})=>(
           <div>
               <h1>{mathc.url}</h1>
           </div>
       )
       ```

2. render 配合在当前示例中时，表示未匹配子路由时，渲染一个静态内容

### 路由参数

对Items.js进行修改如下：

```javascript
import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import Item from './item'

export default class ComponentItems extends React.Component{
	constructor({match}){
		super()
		this.match = match
	}
	render(){
		return (
			<div>
	            <h1>商品</h1>
	            <Link to={`${this.match.url}/TV`}>电视</Link><br/>
	            <Link to={`${this.match.url}/phone`}>手机</Link><br/>
            	<Link to={`${this.match.url}/compute`}>电脑</Link>
	            <Route path={`${this.match.url}/:type`} component={Item}></Route>
	            <Route exact path={this.match.url} render={() => (
	                <h3>请选择一类商品</h3>
	            )}/>
	        </div>
			)
	}
}
```

对item.js进行修改如下:

```javascript
import React from 'react'

export default class ComponentItem extends React.Component{

	render(){
		return (
			<div>
				<h1>
					具体详情
					{this.props.match.params.type}
				</h1>
			</div>
			)
	}
}
```

## redux

[中文文档地址](http://cn.redux.js.org/index.html)

[官方文档](http://redux.js.org/)

Redux 是 JavaScript 状态容器，提供可预测化的状态管理。

不要为了使用`redux`而去使用redux

redux作者文章：

[也许你不必使用 Redux](http://qianduan.guru/2016/09/25/you-might-not-need-redux/)

[原文地址](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

redux运行流程：

<img src="http://pic.w2bc.com/upload/201705/19/201705191136191899.jpg" width="500"/>

main.js:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
// 引入redux ，并获取它里面一个叫createStore 的方法
import {createStore} from 'redux'
// 引入reducers
import reducers from './redux/reducers'
//初始化
const store = createStore(reducers)

// 引入app组件
import App from './app'

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
	)

```

app.js:

```javascript
import React from 'react'
import { connect } from 'react-redux'
// 引入actions
import actions from './redux/actions'

// 引入香蕉
import Banana from './components/banana'
// 引入苹果
import Apple from './components/apple'

class App extends React.Component{

	constructor(){
		super()
	}

	render(){
		return (
			<div>
				总数：{this.props.value}
				<Banana/>
				<Apple/>
			</div>
			)
	}
}

// 获取state
const mapStateToProps = (state) => {
	return {
		value: state.count
	}
}

export default connect(mapStateToProps)(App)
```

reducers.js:

```javascript
// 设置state的初始默认值为false
export default (state=false,action)=>{

	// 初始化state,如果传入了state就接受，如果为false，就初始化
	state = state || {count: 0}

	// 判断action 传过来的是啥并执行对应的处理
	switch (action.type){
		// 添加
		case "ADD":
       		// 返回新的对象,如果不是新的对象不糊更新视图 	
			return {count: state.count + action.price}
		// 减少
		case "SUB":
			return {count: state.count - action.price}
		default:
			return state
	}
}
```

actions:

```javascript
// 定义一些action的方法
export default {
	inc(price){
		// 异步的操作
		return {type: 'ADD',price: price}
	},
	dec(price){
		return {type: 'SUB',price: price}
	}
}
```

banana:

```javascript
import React from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'

class Banana extends React.Component{

	constructor(){
		super()
		this.state = {
			price: 5
		}
	}
	addOne(){
		this.props.dispatch(actions.inc(this.state.price))
	}
	decOne(){
		this.props.dispatch(actions.dec(this.state.price))
	}
	render(){
		return (
			<div>
				<h1>香蕉</h1>
				<button onClick={this.addOne.bind(this)}>买一个</button>
				<button onClick={this.decOne.bind(this)}>减一个</button>
			</div>
			)
	}
}

// 获取state
const mapStateToProps = (state) => {
	return {
		value: state.count
	}
}

export default connect()(Banana)
```

apple.js:

```javascript
import React from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'

class Apple extends React.Component{

	constructor(){
		super()
		this.state = {
			price: 3
		}
	}
	addOne(){
		this.props.dispatch(actions.inc(this.state.price))
	}
	decOne(){
		this.props.dispatch(actions.dec(this.state.price))
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

// 获取state
const mapStateToProps = (state) => {
	return {
		value: state.count
	}
}

export default connect()(Apple)
```

