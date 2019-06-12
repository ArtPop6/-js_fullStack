// 有三个路由， a点击， 切换content 显示对应的组件 不能刷新
// router.js前端 与 index.js后端nodemon服务器端命令运行
class Router {
    // 路由的配置，什么链接出现什么内容
    constructor(options) {
        this.routes = {}; // k=>v
        this.init();
        this.bindEvent();
        // options是路由初始项目
        options.forEach(item => {
            this.route(item.path, () => {
                document.getElementById('content').innerHTML = item.component;
            })
        })
        console.log(this.routes);
    }
    bindEvent () {
        const _this = this;
        const links = document.getElementsByTagName('a');
        [].forEach.call(links, link => {
            link.addEventListener('click', function() {
                const url = this.getAttribute('data-href');
                _this.push(url);
            })
            // const url = this.getAttribute('data-href');
        });
    }
    push(url) {
        // 进入浏览器历史history栈
        window.history.pushState({}, null, url);
        this.updateView();
    }
    route (path, cb) {
        this.routes[path] = cb;
    }
    init () {
        // 点击另一个事件pushstate,弹出popstate 
        window.addEventListener('load', this.updateView.bind(this))
        window.addEventListener('popstate', this.updateView.bind(this))
    }
    updateView () {
        // 当前的url
        // || 防止出错
        const currentUrl = window.location.pathname || '/';
        // 有这个路由的定义，就拿到这个函数 第一个为真才会执行
        this.routes[currentUrl] && this.routes[currentUrl]();
    }
}