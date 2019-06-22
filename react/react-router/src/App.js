import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
function Index() {
  return (
    <div>Home</div>
  )
}
function About() {
  return (
    <div>About</div>
  )
}
function User() {
  return (
    <div>user</div>
  )
}
function Protect() {
  return (
    <div>Protect</div>
  )
}

function Login() {
  return (
    <div>Login</div>
  )
}
// 进入页面之前 鉴权
// <PrivateRoute path="/user" component={} />
function PrivateRoute(props) {
  const { path, component:Component } = props;
  return (
    <Route path={ path } render={
      () => {
        return false ? <Component /> : <Redirect to={{
          pathname: "/login"
        }}></Redirect>
      }
    }>
    </Route>
  )
}
function App() {
  // 配置配好之后处理
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          {/* 新组件pro 登陆或者授权才能看到  配置路由*/}
          <Link to="/protect">protect page</Link>
        </li>
      </ul>
      {
        // 精准匹配到斜杠的时候才会到home
        true ? <Route path="/" exact component={Index}></Route> : <div>no router</div>
      }
      {/* 组件 */}
      <Route path="/about" component={About}></Route>
      {/* <Route path="/user" component={User}></Route> */}
      {/* 路由对应的组件  自定义组件是一个方法需要返回值*/}
      <Route path="/login" component={Login}></Route>
      {/* <Router path="/post" component={Post}></Router> */}
      <PrivateRoute path="/user" component={User}></PrivateRoute>
      <Route path="/protect" render={() => {
        return false ? <Protect /> : <Redirect to={{
          pathname: '/login',
          state: { from: '/protect' }
        }}/>
      }}></Route>
    </Router>
  );
}

export default App;
