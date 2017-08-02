import React from 'react'

export default class DetailUser extends React.Component{

  constructor () {
    super()
    this.state = {
      userList: [
        { 'userId' : 1001, userName : '李达康', userAge : 18},
        { 'userId' : 1002, userName : '高玉良', userAge : 20},
        { 'userId' : 1003, userName : '祁同伟', userAge : 16},
        { 'userId' : 1004, userName : '侯亮平', userAge : 22},
        { 'userId' : 1005, userName : '白百何', userAge : 33}
      ]
    }
  }

  render () {
    // console.log(this.props.match.params.id)
    let userInfo = {}
    let id = this.props.match.params.id
    for (var i=0; i<this.state.userList.length; i++) {
      if (Number(id) === this.state.userList[i].userId){
        userInfo = this.state.userList[i]
      }
    }
    console.log(userInfo)
    return (
        <div class="detail">
          <div>用户名: {userInfo.userName}</div>
          <div>年龄: {userInfo.userAge}</div>
          <div>id号: {userInfo.userId}</div>
        </div>
      )
  }
}