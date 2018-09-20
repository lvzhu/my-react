import React, { Component } from 'react';
import '../assets/css/login.css';
import logo from '../logo.svg';

class login extends Component {
  constructor(props) {
    super(props);
    this.loginIn = this.loginIn.bind(this);
  }
  // 登录 路由跳转
  loginIn() {
    this.props.history.push('/wrapper/HomeOne');
  }
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
          <h3 className="Login-title">欢迎使用</h3>
          <form className="Login-form">
            <div><input type="text" placeholder="用户名" /></div>
            <div><input type="password" placeholder="密码" /></div>
            {/* <div><Link to='/wrapper'><button onClick={this.loginIn}>登录</button></Link></div> */}
            <div><button onClick={this.loginIn}>登录</button></div>
          </form>
        </header>
      </div>
    );
  }
}
export default login;
