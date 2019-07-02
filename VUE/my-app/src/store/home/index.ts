import { State } from '@/store/interface'
import { Commit } from 'vuex';
import { getMovieList } from '@/api/movie';
// -类型约束 报错
// - 代码 提示 更加友好
const getters = {}
// 添加类型约束 接口
const state: State = {
    movieList: []
}
const mutations = {}
// 向mutation提供数据修改请求  函数，参数类型返回值
const actions = {
    // commit一定遵守commit类型 vuex  any任意类型
    async movieList(context: { commit: Commit }, cate:string) {
        const res = await getMovieList(cate)
            .then((response: any) => response)
        return res;
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}