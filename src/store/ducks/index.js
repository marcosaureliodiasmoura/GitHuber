// Responsável pelos reducers e actions
// Responsável por fazer o CombineReducers

import { combineReducers } from 'redux';
import { reducer as auth } from './auth';
import { reducer as projects } from './projects';
// import users from './users';
// import donations from './donations';
// import projectsDetails from './projectsDetails';
// import error from './error';

export default combineReducers({
  auth,
  projects,
  // users,
  // donations,
  // projectsDetails,
  // error,
});
