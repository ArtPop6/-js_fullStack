// r入口文件，都从这开始
import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Layout from './page/Layout';
import 'antd/dist/antd.css';
// import './App.css';
function Table() {
  return (
    <div>Table</div>
  )
}
function Label() {
  return (
    <div>Label</div>
  )
}

function App() {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <Route path="/" component={Layout}></Route>
        {/* 传props */}
        <Route path="/table" component={Table}></Route>
        <Route path="/label" component={Label}></Route>
      </Route>
    </Router>
  );
}

export default App;
