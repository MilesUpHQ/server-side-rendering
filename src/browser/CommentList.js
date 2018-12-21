import React, { Component } from "react";
import CommentItem from "./CommentItem";

class CommentList extends Component {
  render() {
    if (!this.props.comments) {
      return <h4>loading..</h4>;
    }
    return (
      <div>
        <ul>
          {this.props.comments.map(comment => (
            <CommentItem comment={comment} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentList;
