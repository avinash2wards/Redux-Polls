import { combineReducers } from "redux";

import { authedUser } from "./authedUser";
import { polls } from "./polls";
import { users } from "./users";
import { loadingBarReducer } from "react-redux-loading";

const reducers = combineReducers({
  polls: polls,
  users: users,
  authedUser: authedUser,
  loadingBar: loadingBarReducer
});

export { reducers };
