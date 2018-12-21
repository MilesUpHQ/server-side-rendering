import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: "",
      comments: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({
      commentInput: event.target.value
    });
  }

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
        <form>
          <textarea
            onChange={this.handleChange}
            type="text"
            className="form-control"
            value={this.state.commentInput}
            placeholder="comment"
          />
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Add
          </button>
        </form>
        <ul>
          {this.state.comments.map(comment => (
            <li key={comment}>{comment}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyComponent;
