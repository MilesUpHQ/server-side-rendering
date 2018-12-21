import React, { Component } from "react";
import CommentList from "../browser/CommentList";

class CommentsPage extends Component {
  constructor(props) {
    super(props);

    let data;

    if (__isBrowser__) {
      data = window.__DATA__;
    } else {
      data = [];
    }

    this.state = {
      commentInput: "",
      comments: data
    };
  }

  componentDidMount() {
    console.log(this.state.comments);
  }

  handleChange = () => {
    this.setState({
      commentInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      comments: [...this.state.comments, this.state.commentInput],
      commentInput: ""
    });
  };
  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentsPage;
