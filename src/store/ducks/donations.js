// / 1. Criamos os Types de Projetos
export const Types = {
  GET_REQUEST: 'donations/GET_REQUEST',
  GET_SUCCESS: 'donations/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

// 2. Criamos os reducers e a action, cada reducer possui um efeito, ou seja, o que ele vai fazer quando for disparado.
export default function donations(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

// 3. Criamos os nossos ActionCreators, ou seja, nossa actions getProjectsRequest e Success.
// 3.1 O getProjectsRequest vai ser disparado por um componente e;
// 3.2 O getProjectsSuccess vai ser disparado pelo SAGA, e os dados da data vai ser passado dentro do payload (entenda a linha 18 e 29-31) (AQUI MESMO ELE CHAMA I GET_REQUEST E SUCCESS).
export const Creators = {
  getDonationsRequest: () => ({ type: Types.GET_REQUEST }),
  getDonationsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
