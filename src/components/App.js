import React, { Component } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return <div>{JSON.stringify(this.props.polls)}</div>;
  }
}

export default connect(state => ({ polls: state.users }))(App);
