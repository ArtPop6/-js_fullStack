import Vue from 'vue'
import axios from 'axios'
const vue = new Vue()  // vue的实例，具有vue本身所有属性

// axios配置 请求时间，axios请求数据超过十秒就报错
axios.defaults.timeout = 10000
// 后端代码放服务器，'/' 前面域名一样，写入所有项目域名，可以直接写baseURL + ''
// 提供测试环境ip去访问后端，线上服务器  
axios.defaults.baseURL = 'http://localhost:3000'

// 返回状态判断 axios封装，不能请求数据,请求出错就统一用这个
axios.interceptors.response.use((res) => {
    if (res.data.code !==200) {
        // $toast不是vue api 在某处挂载在vue原型链上 
        // 为什么不能直接this.$toast  this指向vue实例。因为this作用域不再这个对象里面
        vue.$toast('网络异常')
        // 转转隐藏掉
        vue.$hideLoading()
        // 能在.catch里面接收到
        return Promise.reject(res)
    }
    return res
    // 状态吗是200但就是拿不到数据
}, (err) => {
    vue.$toast('网络异常')
        // 转转隐藏掉
    vue.$hideLoading()
    return Promise.reject(error)
})

// 抛出封装的
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: param
        })
        .then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

//登陆时直接调用login方法，执行axios.get
export default {
    // 用户登录
    Login(params) {
        return fetchGet('/login', params)
    },
    // banners头部图片 请求来的  封装成方法
    BannerList() {
        return fetchGet('/banner')
    },
    // 歌单 电脑泡成服务器发代理请求
    DiscLists(params) {
        return fetchGet('/top/playlist', params)
    },
    // 歌单详情
    SongList(params) {
        return fetchGet('/playlist/detail', params)
    }

}