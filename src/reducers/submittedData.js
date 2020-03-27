const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  /**
   *
   * if action of type x then return NEW state
   */
  if (action.type === "add new data") {
    return {
      ...state,
      users: [...state.users, action.user],
    };
  }

  return state;
};
