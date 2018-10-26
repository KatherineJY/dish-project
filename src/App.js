import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./component/Home";
import User from "./component/User";
import Shop from "./component/Shop";

import "./assets/css/index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="title">
            <Link to="/">首页组件</Link>

            <Link to="/user">用户页面</Link>

            <Link to="/shop">商户</Link>
          </header>

          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/shop" component={Shop} />
        </div>
      </Router>
    );
  }
}

export default App;
