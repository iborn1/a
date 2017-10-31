import axios from 'axios'
// 存放数据
const state = {
  orderList: [],
  params: {}
}
// 调用state里的数据
const getters = {
  getOrderList: state => state.orderList
}
// 异步操作
const actions = {
  fetchOrderList({commit, state}) {
    axios({
      method: "post",
      url: "./api/getOrderList",
      data: state.params
    }).then((res) => {
      commit('updateOrderList', res.data.list)
    }).catch((err) => {

    })
  }
}
// 同步操作
const mutations = {
  // 获取列表数据
  updateOrderList(state, payload) {
    state.orderList = payload
  },
  // 获取传递参数
  updateParams(state, {key, val}) {
    staet.params[key] = val
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
