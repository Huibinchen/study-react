## 内联样式

我们可以将样式直接写到标签的style中

```react
import React from 'react'

const styleComponentHeader = {
	header: {
		backgroundColor:'#333',
		color: '#fff',
		paddingTop:'15px',
		paddingBottom:'15px'
	}
}

export default class ComponentHeader extends React.Component{

	render(){
		return (
			<header style={styleComponentHeader.header}>
				<h1>我是头部!</h1>
			</header>
			)
	}
}
```

## 使用class不用className

安装模块：

`cnpm install babel-plugin-react-html-attrs style-loader css-loader --save`

[babel-plugin-react-html-attrs](https://www.npmjs.com/package/babel-plugin-react-html-attrs)

然后配置`.babelrc`:

```json
{
  "plugins": [
    "react-html-attrs"
  ]
}
```



## 使用防污染的局部class

[css-loader](http://www.css88.com/doc/webpack2/loaders/css-loader/) [github](https://github.com/webpack-contrib/css-loader)

### CSS 作用域

默认情况下，CSS将所有的类暴露到全局的选择器作用域中。样式可以在局部作用域中，避免全局作用域的样式。

语法 `:local(.className)` 可以被用来在局部作用域中声明 `className`。局部的作用域标识符会以模块形式暴露出去。

使用 `:local` （无括号）可以为此选择器启用局部模式。 `：global（.className）`可以用来声明一个明确的全局选择器。使用`：global`（无括号）可以为此选择器打开全局模式。

加载器会用唯一的标识符来替换局部选择器。所选择的唯一标识符以模块形式暴露出去。

写法-css：

```less
@size:200px;
:local(.tab){
	button{
		&.active{
			background-color: yellow;
		}
	}
	div{
		width: @size;
		height: @size;
		background-color: #ccc;
		display: none;
		&.active{
			display: block;
		}
	}
}
```

在使用的时候：

```react
import React from 'react'

import fontCss from './header.less'

export default class ComponentHeader extends React.Component{

	render(){
		return (
			<header>
				<h1>我是头部!</h1>
				<div class={fontCss.tab}>
					<div class="active">地方</div>
				</div>
			</header>
			)
	}
}
```

