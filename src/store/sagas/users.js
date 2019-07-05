import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

// Util para usarmos com o put para enviarmos a informação pro reducer.
import { Creators as UsersActions } from '../ducks/users';

// Primeiro Saga a ser exportado que vai servir para buscar as informações de projetos
export function* getUsers() {
  try {
    // Chama a api
    const response = yield call(api.get, '/users');
    // Envia os dados
    yield put(UsersActions.getUsersSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
