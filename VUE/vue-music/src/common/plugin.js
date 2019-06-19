let Toast = {}
// 第一个参数vue实例
// 定义toast组件
Toast.install = function (Vue, options) {
    let opt = {
        defaultType: 'center', // ‘网络异常’默认显示的位置
        duration: '1500'  //持续的事件
    }
    //es6循环数组，用不到下标 let .. of ..针对于数组  let a in object对象
    // 对象后用中括号 选择器
    for (let property in options) {
        opt[property] = options[property]  // 使用options的配置
    }
    // 挂载到原型链 内容 位置
    Vue.prototype.$toast = (tips, type) => {
        if (type) {
            opt.defaultType = type
        }
        // 整个dom找，会获取到数组 存在就是在展示，其实就是$toast 只存在一秒钟，不能出现第二次
        if (document.getElementsByClassName('vue-toast').length) {
            return //如果toast此时在页面是出现状态， 则不再执行
        }
        // vue自带extend 组件
        let toastTpl = Vue.extend({
            template: '<div class="vue-toast toast-' + opt.defaultType +'">' + tips + '</div>'
        })
        // el dom结构
        let tpl = new toastTpl.$mount().$el
        // 与其他的盒子不会嵌入
        document.body.appendChild(tpl)
        setTimeout(() => {
            document.body.removeChild
        }, opt.duration)
    }
    ['bottom', 'center', 'top'].forEach(type => {
        Vue.prototype.$toast[type] = (tips) => {
            return vue.prototype.$toast(tips, type)
        }
    })
}

let Loading = {}
Loading.install = function (Vue) {
    let tpl
    Vue.prototype.$showLoading = () => {
        if (document.getElementsByClassName('vue-loading').length) {
            return 
        } 
        let loadingTpl = Vue.extend({ //创建构造器， 定义好提示信息的模板
            template: '<div calss="vue-loading"></div>'
        })
        tpl = new loadingTpl().$mount.$el 
        document.body.appendChild(tpl)
    }
    Vue.prototype.$hideLoading = () => {
        if (document.getElementsByClassName('vue-loading').length) {
            document.body.removeChild(tpl)
        }
    }
}

// 定义好的组件 放出来
export {
    Toast,
    Loading
}
