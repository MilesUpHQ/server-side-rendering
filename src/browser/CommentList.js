import React, { Component } from "react";

class CommentList extends Component {
  render() {
    if (!this.props.comments) {
      return <h4>loading..</h4>;
    }
    return (
      <div>
        <ul>
          {this.props.comments.map(comment => (
            <li key={comment}>{comment}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentList;
