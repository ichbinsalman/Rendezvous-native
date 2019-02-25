const userReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESSFUL':
      return true
    case 'LOGOUT_SUCCESSFUL':
      return false
    default:
      return state
  }
};

export default userReducer;
