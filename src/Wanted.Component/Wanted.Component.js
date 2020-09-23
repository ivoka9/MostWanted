import React from "react";
import "./Wanted.Component.css";

class Wanted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doIHaveAPerson: false,
      person: null,
      bounty: null,
    };
  }
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const data = await fetch(url);
    const person = await data.json();
    if (person.results[0]) {
      this.setState({
        doIHaveAPerson: true,
        person: person.results[0],
        bounty: Math.floor(Math.random() * 100_000),
      });
    }
  }

  render() {
    if (!this.state.doIHaveAPerson) {
      return <h1>Loading</h1>;
    }

    return (
      <div className="Wanted">
        <h2>Dead or Alive</h2>
        <img src={this.state.person.picture.large} />
        <h2>{this.state.person.name.first}</h2>
        <h2>{this.state.person.name.last}</h2>
        <h2>Reward : {this.state.bounty} $</h2>
      </div>
    );
  }
}

export default Wanted;
