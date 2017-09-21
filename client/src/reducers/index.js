import { combineReducers } from 'redux';
import userReducers from './userReducers';
import groupReducers from './groupReducers'

const rootReducer = combineReducers({
  user: userReducers,
  groups: groupReducers, 
});

export default rootReducer;
