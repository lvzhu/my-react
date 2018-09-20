import React, { Component } from 'react';

class HomeOne extends Component {
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
  componentDidMount(){
    this.timerId =setInterval(()=>this.tick(),1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  tick(){
    this.setState({
      date:new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">开始学习react了</h1>
        </header>
        <p className="App-intro">
         现在是{this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

export default HomeOne;
