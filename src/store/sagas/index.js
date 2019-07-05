import { all, takeLatest } from 'redux-saga/effects';

// import { Types as ProjectsTypes } from '../ducks/projects';
// import { Types as UsersTypes } from '../ducks/users';
// import { Types as DonatesTypes } from '../ducks/donations';
// import { Types as ProjectsDetailsTypes } from '../ducks/projectsDetails';

// import { getProjects } from './projects';
// import { getUsers } from './users';
// import { getDonates } from './donates';
// import { getProjectsDetails } from './projectsDetails';

import { signIn, init, signOut } from './auth';
import { AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    // takeLatest(AuthTypes.SIGN_OUT, signOut),

    // takeLatest(ProjectsTypes.GET_REQUEST, getProjects),
    // takeLatest(UsersTypes.GET_REQUEST, getUsers),
    // takeLatest(DonatesTypes.GET_REQUEST, getDonates),
    // takeLatest(ProjectsDetailsTypes.GET_REQUEST, getProjectsDetails),
  ]);
}
