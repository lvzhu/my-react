import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import './App.css';
import './assets/css/login.css';


//页面路由
import login from './pages/login' // 登录页
import wrapper from './pages/navWrap' // 导航页
import HomeOne from './pages/home/home1' // 首页一
import HomeTwo from './pages/home/home2' // 首页二
import HomeThree from './pages/home/home3' // 首页二

const router = [
  {
    path: "/",
    exact: true,
    component: login
  },
  {
    path: "/wrapper",
    component: wrapper,
    childRoutes: [
      {
        path: "/HomeOne",
        sidebar: HomeOne,
        component: HomeOne
      },
      {
        path: "/HomeTwo",
        sidebar: HomeTwo,
        component: HomeTwo
      },
      {
        path: "/HomeThree",
        sidebar: HomeThree,
        component: HomeThree
      }
    ]
  }
];

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="Contianer">
          <Route exact path="/" component={login} />
          <Route path="/wrapper" component={wrapper} />
        </div>
      </Router>
    );
  }
}

export default App;
