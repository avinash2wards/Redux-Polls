import React, { Component } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    handleInitialData();
  }

  render() {
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

export default connect(state => {
  return { polls: state.polls };
})(App);
