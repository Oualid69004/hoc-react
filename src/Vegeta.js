import React, { Component } from "react";
import "./styles.css";
import vegeta from "./vegeta.png";
import countHits from "./countHits";

class Vegeta extends Component {
  render() {
    const { name, addonehit, hocState, life } = this.props;
    const lifeValue =
      life > 0 ? (
        <td>{life} % </td>
      ) : (
        <td>
          <span className="badge badge-danger">Perdu!!!</span>
        </td>
      );
    const button =
      life > 0 ? (
        <button onClick={addonehit} className="btn btn-success m-3">
          {name} Frappe
        </button>
      ) : (
        <button className="btn btn-danger m-3 disabled">{name} Mort</button>
      );
    return (
      <div className="col">
        <img src={vegeta} alt="" />
        <br />
        {button}

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"> Coups </th>
              <th scope="col"> Vie </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              {lifeValue}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default countHits(Vegeta);
