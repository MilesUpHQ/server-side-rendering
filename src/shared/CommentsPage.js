import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { fetchPopularRepos } from "./api";

class CommentsPage extends Component {
  constructor(props) {
    super(props);

    let repos;
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      repos = this.props.staticContext.data;
    }

    this.state = {
      repos,
      loading: repos ? false : true
    };
  }

  fetchRepos = lang => {
    this.setState(() => ({
      loading: true
    }));

    fetchPopularRepos(lang).then(repos =>
      this.setState(() => ({
        repos,
        loading: false
      }))
    );
  };

  render() {
    const { loading, repos } = this.state;

    if (loading === true) {
      return <p>LOADING</p>;
    }

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Comments page description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Comments Page</title>
        </Helmet>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {repos.map(({ name, owner, stargazers_count, html_url }) => (
            <li key={name} style={{ margin: 30 }}>
              <ul>
                <li>
                  <a href={html_url}>{name}</a>
                </li>
                <li>@{owner.login}</li>
                <li>{stargazers_count} stars</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addComment: comment => {
      dispatch({ type: "ADD_COMMENT", comment: comment });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage);
