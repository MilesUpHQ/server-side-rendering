import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import CommentList from "../browser/CommentList";

class CommentsPage extends Component {
  state = {
    commentInput: ""
  };

  handleChange = () => {
    this.setState({
      commentInput: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Comments page description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Comments Page</title>
        </Helmet>
        {/* <form> */}
        <textarea
          onChange={this.handleChange}
          type="text"
          className="form-control"
          value={this.state.commentInput}
          placeholder="comment"
        />
        <button
          onClick={() => this.props.addComment(this.state.commentInput)}
          className="btn btn-primary"
        >
          Add
        </button>
        {/* </form> */}
        <CommentList comments={this.props.comments} />
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
