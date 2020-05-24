import React, { Component } from "react";
import "./styles.css";
import Vegeta from "./Vegeta";
import Goku from "./Goku";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    vegeta: 100,
    goku: 100
  };
  reduceLife = params => {
    if (params === "Vegeta") {
      this.setState({
        goku: this.state.goku - 10
      });
    } else {
      this.setState({
        vegeta: this.state.vegeta - 10
      });
    }
  };

  render() {
    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <hr />
        <div className="row">
          <Vegeta
            name="vegeta"
            life={this.state.vegeta}
            reduceHndler={this.reduceLife}
          />
          <Goku
            name="goku"
            life={this.state.goku}
            reduceHndler={this.reduceLife}
          />
        </div>
      </div>
    );
  }
}
export default App;
