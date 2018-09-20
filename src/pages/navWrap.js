import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import HomeOne from '../pages/home/home1' // 首页一
import HomeTwo from '../pages/home/home2' // 首页二
import HomeThree from '../pages/home/home3' // 首页二
import '../assets/css/wrap.css';
import navHead from '../assets/images/profile_small.jpg'

const routes = [
  {
    path: "/wrapper/HomeOne",
    sidebar: HomeOne,
    main: HomeOne
  },
  {
    path: "/wrapper/HomeTwo",
    sidebar: HomeTwo,
    main: HomeTwo
  },
  {
    path: "/wrapper/HomeThree",
    sidebar: HomeThree,
    main: HomeThree
  }
];

class Wrap extends Component {
  constructor(props) {
    super(props);
    this.toWrapOne = this.toWrapOne.bind(this);
  }
  // 路由跳转到首页1
  toWrapOne() {
    this.props.history.push('/wrapper/HomeOne');
  }
  render() {
    return (
      <Router>
        {/* 左侧导航 */}
        <div className="Wraper-cont">
          <div className="Nav-left">
            <div className="Nav-head">
              <img src={navHead} />
              <p>超级管理员</p>
            </div>
            <div className="Nav-list">
              <ul className="List-block">
                {/* <li onClick={this.toWrapOne}><span className="List-icon"></span>主页</li> */}
                <Link to="/wrapper/HomeOne"><li><span className="List-icon"></span>主页</li></Link>
                <Link to="/wrapper/HomeTwo"><li><span className="List-icon"></span>布局</li></Link>
                <Link to="/wrapper/HomeThree"><li><span className="List-icon"></span>信息</li></Link>
                <Link to="/wrapper/HomeOne"><li><span className="List-icon"></span>表单</li></Link>
                <Link to="/wrapper/HomeOne"><li><span className="List-icon"></span>页面</li></Link>
                <Link to="/wrapper/HomeOne"><li><span className="List-icon"></span>图表</li></Link>
              </ul>
            </div>
          </div>
          <div className="Nav-cont">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default Wrap;
