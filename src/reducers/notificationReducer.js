const initialState = "";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.message;
    default:
      break;
  }

  return state;
};

export const setNotification = (notificationText, time) => {

  return async (dispatch) => {
    dispatch({
      type: "SET_NOTIFICATION",
      message: notificationText,
    });

    setTimeout(() => {
      dispatch({
        type: "SET_NOTIFICATION",
        message: "",
      });
    }, time);
  };
};


export default reducer;
