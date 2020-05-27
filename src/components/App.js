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
          <Poll match={{ params: { id: "xj352vofupe1dqz9emx13r" } }} />
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
