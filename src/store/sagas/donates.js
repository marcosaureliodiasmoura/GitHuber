import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

// Util para usarmos com o put para enviarmos a informação pro reducer.
import { Creators as DonatesAction } from '../ducks/donations';

// Primeiro Saga a ser exportado que vai servir para buscar as informações de projetos
export function* getDonates() {
  try {
    // Chama a api
    const response = yield call(api.get, 'donations');
    // Envia os dados
    yield put(DonatesAction.getDonationsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
