import shop from '../../api/shop'
const state = {
    all: []
}
const getters = {

}
const actions = {
    // 向mutation提交修改  vuex管理数据，本身没有数据
    getAllProducts ({commit}) {
        // 前后端分离 action去调api  cb
        shop.getProducts (products => {
            commit('setProducts', products);
        });
    }
}
const mutations = {
    setProducts (state, products) {
        state.all = products
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}