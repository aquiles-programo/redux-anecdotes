const initialState = "";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      break;
  }

  return state;
};

export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    filter,
  };
};

export default reducer;
