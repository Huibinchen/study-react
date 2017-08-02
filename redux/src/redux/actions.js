// 定义一些action的方法
export default {
  // 增加
  inc(price){
    // 异步的操作
    return {type: 'ADD',price: price}
  },
  // 减少
  dec(price){
    return {type: 'SUB',price: price}
  }
}