import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Container from "./Container";
import CommentsPage from "./CommentsPage";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/comments" component={CommentsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
