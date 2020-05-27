import { combineReducers } from "redux";

import { authedUser } from "./authedUser";
import { polls } from "./polls";
import { users } from "./users";

const reducers = combineReducers({
  polls: polls,
  users: users,
  authedUser: authedUser
});

export { reducers };
