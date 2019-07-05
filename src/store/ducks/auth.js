import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Types e Action Creators

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token', 'user'],
  signOut: null,
  initCheckSuccess: null,
  // getPermissionRequest: null,
  // getPermissionSuccess: ['permission'],
});

export const AuthTypes = Types;
export default Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
  roles: [],
  permissions: [],
});

// Reducers

export const success = (state, { token }) => state.merge({ signedIn: true, token });

export const checkSuccess = state => state.merge({ authChecked: true });

export const logout = state => state.merge({ signedIn: false, token: null });

// export const permissionsSuccess = (state, { roles, permissions }) => state.merge({ roles, permissions });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  [Types.INIT_CHECK_SUCCESS]: checkSuccess,
  // [Types.GET_PERMISSIONS_SUCCESS]: permissionsSuccess,
});
