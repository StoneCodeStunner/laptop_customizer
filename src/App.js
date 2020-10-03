import React, { Component } from "react";
// import Features from "./Components/Features";
import Summary from "./Components/Summary";
import Header from "./Components/Header";
import Main from "./Components/Main";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import store from "./Components/Store";
import "./App.css";

// This object will allow us to
// easily convert numbers into US dollar values

class App extends Component {
  state = {
    features: store.FEATURES,
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };
  handleUpdate = (feature, newValue) => {
    this.updateFeature(feature, newValue);
  };
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Main
            clickUpdate={this.handleUpdate}
            features={this.state.features}
            currency={store.USCurrencyFormat}
          />
          <Summary
            selected={this.state.selected}
            currency={store.USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}
export default App;
