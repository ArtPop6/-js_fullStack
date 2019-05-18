- npm init -y变成node项目
生产线 Webpack 代码生产工艺 工作流(work flow)

- html + css + js = development   html template {{}} ;  css stylus ; js  es6,7,8,9 => es5
考虑最后代码运行的env环境

- js
  处理js用babel  
  可以让使用最新的技术开发， babel会 编译成es5，
  npm install -g yarn包管理器
  yarn add babel-core babel-cli命令行  babel-preset-env 按照环境编译版本预处理降级
  npm run 
          build变成了编译后文件

babelrc 告诉如何编译  npm run build 运行

- babel-core 核心的转译库
  npm run build(脚本名字) "babel ...."
  babel-cli 
  babel-preset-env  .babelrc
  {
      "presets": ["env"]  编译成env与处理文件
  } 

  build 
  dev

  yarn global add babel-core babel-cli全局安装

  yarn add babel-plugin-proposal-object-reset-spread处理展开
  yarn add babel-plugin-transform-object-reset-spread 不能编译的就找插件

  build
  env

- preset 预处理
  env 搞不定 安装插件 

   yarn add eslint
   创建配置文件写规则
   npm run eslint

   yarn add webpack终极工作流
   yarn add webpack webpack-cli webpack-dev-server 有一个live-server效果

   装好后删掉
   "build": "babel index.js -o babel-compile.js",
    "eslint": "eslint test.js",
    "test": "echo \"Error: no test specified\" && exit 1"

    不交给babel了 交给webpack
    npm run build

    yarn global add webpack webpack-cli


- webpack 是一切工作流的主宰
  webpack --mode development
  /src 开发目录
  /dist 发布出去

  改成production上线代码

- 开发时 development  强调 代码的可读性 dev阶段  本地  localhost
- 上线时 production   强调 代码要压缩，混淆代码 build  服务器  域名访问
- 测试  test  局域网
  

