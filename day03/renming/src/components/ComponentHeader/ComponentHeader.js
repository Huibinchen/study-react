import React from 'react'

const styleComponentHeader = {
  header: {
    backgroundColor:'#333',
    color: '#fff',
    paddingTop:'15px',
    paddingBottom:'15px'
  }
}

import './ComponentHeader.less'

export default class ComponentHeader extends React.Component{

  render(){
    return (
      <header style={styleComponentHeader.header}>
        <h1 class="green">我是头部!</h1>
      </header>
      )
  }
}