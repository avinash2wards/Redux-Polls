import React, { Component } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";
import Leaderboard from "./LeaderBorad";
import AddPoll from "./AddPoll";
import Poll from "./Poll";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <Poll match={{ params: { id: "loxhs1bqm25b708cmbf3g" } }} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authedUser === null
  };
}

export default connect(mapStateToProps)(App);
