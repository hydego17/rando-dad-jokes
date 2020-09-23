import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = { myJoke: "" };

  componentDidMount() {
    this.fetchJoke();
  }

  fetchJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        const myJoke = response.data.joke;
        this.setState({ myJoke });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { myJoke } = this.state;
    return (
      <div className="app">
        <div className="container">
          <p>😜 Random dad joke</p>
          <h1 className="heading">{myJoke}</h1>
          <button className="button" onClick={this.fetchJoke}>
            <span>alright next</span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
