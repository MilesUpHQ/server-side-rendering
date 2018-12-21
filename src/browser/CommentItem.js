import React, { Component } from "react";

class CommentItem extends Component {
  render() {
    return (
      <div>
        <li key={this.props.comment}>{this.props.comment}</li>
      </div>
    );
  }
}

export default CommentItem;
