import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {date:new Date()};
//   }
//   componentDidMount(){
//     this.timerId =setInterval(()=>this.tick(),1000);
//   }
//   componentWillUnmount(){
//     clearInterval(this.timerId);
//   }
//   tick(){
//     this.setState({
//       date:new Date()
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">开始学习react了</h1>
//         </header>
//         <p className="App-intro">
//          现在是{this.state.date.toLocaleTimeString()}
//         </p>
//       </div>
//     );
//   }
// }

// class Website extends Component{
//   constructor(){
//     super();
//     this.state={
//       name:"菜鸟教程",
//       site:"lvzhu://github.com"
//     }
//   }
//   render(){
//     return (
//       <div>
//         <Name name={this.state.name}/>
//         <Link site={this.state.site}/>
//       </div>
//     )
//   }
// }
// class Name extends Component{
//   render(){
//     return(
//       <h1>{this.props.name}</h1>
//     )
//   }
// }
// class Link extends Component{
//   render(){
//     return(
//       <h1>{this.props.site}</h1>
//     )
//   }
// }

// export default App;


//权限路由S
// const AuthExample = () => (
//   <Router>
//     <div>
//       <AuthButton />
//       <ul>
//         <li>
//           <Link to="/public">Public Page</Link>
//         </li>
//         <li>
//           <Link to="/protected">Protected Page</Link>
//         </li>
//       </ul>
//       <Route path="/public" component={Public} />
//       <Route path="/login" component={Login} />
//       <PrivateRoute path="/protected" component={Protected} />
//     </div>
//   </Router>
// );

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const AuthButton = withRouter(
//   ({ history }) =>
//     fakeAuth.isAuthenticated ? (
//       <p>
//         Welcome!{" "}
//         <button
//           onClick={() => {
//             fakeAuth.signout(() => history.push("/"));
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     ) : (
//         <p>You are not logged in.</p>
//       )
// );

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       fakeAuth.isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//     }
//   />
// );

// const Public = () => <h3>Public</h3>;
// const Protected = () => <h3>Protected</h3>;

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false
//   };

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true });
//     });
//   };

//   render() {
//     const { from } = this.props.location.state || { from: { pathname: "/" } };
//     const { redirectToReferrer } = this.state;

//     if (redirectToReferrer) {
//       return <Redirect to={from} />;
//     }

//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }

// export default AuthExample;
//权限路由E

//路由S
// const CustomLinkExample = () => (
//   <Router>
//     <div>
//       <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
//       <OldSchoolMenuLink to="/about" label="About" />
//       <hr />
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//     </div>
//   </Router>
// );

// const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
//   <Route
//     path={to}
//     exact={activeOnlyWhenExact}
//     children={({ match }) => (
//       <div className={match ? "active" : ""}>
//         {match ? "> " : ""}
//         <Link to={to}>{label}</Link>
//       </div>
//     )}
//   />
// );

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// export default CustomLinkExample;
//路由E

//导航路由S
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

const SidebarExample = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bubblegum">Bubblegum</Link>
          </li>
          <li>
            <Link to="/shoelaces">Shoelaces</Link>
          </li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default SidebarExample;
//导航路由E