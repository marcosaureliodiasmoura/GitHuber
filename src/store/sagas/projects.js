import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

// Util para usarmos com o put para enviarmos a informação pro reducer.
import { Creators as ProjectsActions } from '../ducks/projects';

// Primeiro Saga a ser exportado que vai servir para buscar as informações de projetos
export function* getProjects() {
  try {
    // Chama a api
    const response = yield call(api.get, 'projects');
    // Envia os dados
    yield put(ProjectsActions.getProjectsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
