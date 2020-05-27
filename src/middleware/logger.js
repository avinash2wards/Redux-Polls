const logger = store => next => action => {
  console.group(action.type);
  console.log("The action is ", action);
  console.log("The current state is", store.getState());
  const returnValues = next(action);
  console.log("The next state is", store.getState());
  console.groupEnd();
  return returnValues;
};

export { logger };
