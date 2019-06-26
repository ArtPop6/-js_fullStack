npm init -y
yarn add webpack-cli webpack-dev-server -D
yarn global add @types/react @types/react-dom -D
yarn add babel-core babel-cli babel-preset-env -D
yarn add bootstrap
yarn add min-css-extract-plugin -D
webpack打包优化

- typescript 将js 弱类型变成强类型 
    类型  生命  文件  @type/react
- webpack-dev-server 不会刷新浏览器
  webpack-dev-server --inline  刷新浏览器
  webpack-dev-server --inline --hot  刷新浏览器需要更新的局部 热更新 
- typescript 是js 超集， js 是在ts 里可以完全运行的
  跟 java 一样， 静态类型 语言， 运行前先编译一下
- 强制类型声明 