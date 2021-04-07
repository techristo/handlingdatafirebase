import React from "react";
import axios from "axios";

class Poster extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      role: [],
      description: []
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      role: this.state.role,
      description: this.state.description
    };

    axios
      .post(
        `https://techvrecruitment-default-rtdb.europe-west1.firebasedatabase.app/test.json`,
        { data }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Role:</label>
          <br />
          <input type="text" name="role" onChange={this.handleChange} />

          <br />
          <label>Description:</label>
          <br />
          <textarea name="description" onChange={this.handleChange} />

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Poster;
