const meetupsReducer = (state = [], action) => {
  switch (action.type) {
    case 'MEETUPS_LOADED':
      return action.meetups
    default:
      return state
  }
};

export default meetupsReducer;
