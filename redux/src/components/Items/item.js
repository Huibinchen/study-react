import React from 'react'

export default class ComponentTv extends React.Component{

  render(){
    console.log(this.props.match)
    return (
      <div>
        <h1>详情商品</h1>
        <h2>{this.props.match.params.type}</h2>
      </div>
      )
  }
}