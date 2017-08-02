// 设置state的初始默认值为false
export default (state=false, action)=>{

  // 初始化state,如果传入了state就接受，如果为false，就初始化
  state = state || {count: 0}

  // 判断action 传过来的是啥并执行对应的处理
  switch (action.type) {
    // 添加
    case "ADD":
      // 必须返回一个全新对象
      console.log('添加' + action.price)
      return {count: state.count + action.price}
    case "DEC":
      return {count: state.count - action.price}
    default: 
      return state
  }
}