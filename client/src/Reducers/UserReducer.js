export const UserReducer = (state, action) => {
  switch (action.type) {
    case "SETUSER":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };

    default:
      return {
        ...state,
      };
  }
};
