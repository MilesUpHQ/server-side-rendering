import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Helmet from "react-helmet";
import Container from "./Container";
import CommentsPage from "./CommentsPage";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
          titleTemplate="%s | React App"
          titleAttributes={{ itemprop: "name", lang: "en" }}
        />
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
