const INITIAL_STATE = {
  username: '',
  password: ''
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOGIN_USERNAME':
      return {
        ...state,
        username: action.username
      }
    case 'SET_LOGIN_PASSWORD':
      return {
        ...state,
        password: action.password
      }
    default:
      return state
  }
};

export default loginReducer;
