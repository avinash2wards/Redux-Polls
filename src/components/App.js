import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "./Nav";
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
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/polls/:id" component={Poll} />
                <Route path="/add" component={AddPoll} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authedUser === null
  };
}

export default connect(mapStateToProps)(App);
