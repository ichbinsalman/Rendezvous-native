import { combineReducers } from 'redux';
import userReducer from './user';
import meetupsReducer from './meetups';
import UIReducer from './UI';

export default combineReducers({
  user: userReducer,
  meetups: meetupsReducer,
  UI: UIReducer
});
