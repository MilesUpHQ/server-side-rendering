import React, { Component } from "react";

class CommentItem extends Component {
  strikeOut = event => {
    event.target.style.textDecoration = "line-through";
  };

  render() {
    return (
      <div>
        <li onClick={this.strikeOut} key={this.props.comment}>
          {this.props.comment}
        </li>
      </div>
    );
  }
}

export default CommentItem;
