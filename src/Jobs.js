import React from "react";
import axios from "axios";

class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://techvrecruitment-default-rtdb.europe-west1.firebasedatabase.app/test.json"
      )
      .then((results) => {
        const xkey = "-MXarKeBQg5RHY12z-NP";
        console.log(results.data[xkey].data);
        const fetchedResults = [];
        for (let key in results.data) {
          fetchedResults.unshift({
            ...results.data[key].data,
            id: key
          });
        }
        this.setState({ results: fetchedResults });
      });
  }

  render() {
    return (
      <div className="jobs">
        {this.state.results.map((results) => (
          <Results
            key={results.id}
            role={results.role}
            description={results.description}
          />
        ))}
      </div>
    );
  }
}

const Results = (props) => (
  <div>
    Role:{props.role}
    <br />
    Desription:{props.description}
  </div>
);

export default Jobs;
