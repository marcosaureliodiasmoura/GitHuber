// 1. Criamos os Types de Projetos
export const Types = {
  GET_REQUEST: 'projectsDetails/GET_REQUEST',
  GET_SUCCESS: 'projectsDetails/GET_SUCCESS',
};

const INITIAL_STATE = {
  // O data será um objeto, retornando apenas um projeto.
  data: [],
  loading: false,
};

// 2. Criamos os reducers e a action, cada reducer possui um efeito, ou seja, o que ele vai fazer quando for disparado.
export default function projectsDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    default:
      return state;
  }
}

// 3. Criamos os nossos ActionCreators, ou seja, nossa actions getProjectsRequest e Success.
// 3.1 O getProjectsRequest vai ser disparado por um componente e;
// 3.2 O getProjectsSuccess vai ser disparado pelo SAGA, e os dados da data vai ser passado dentro do payload (entenda a linha 18 e 29-31) (AQUI MESMO ELE CHAMA I GET_REQUEST E SUCCESS).

// Diferencial no ProjectDetails:
// Vou receber um id informando qual o projeto que ele irá buscar
// E irei enviar esse id ao saga pelo payload
export const Creators = {
  getProjectsDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),

  getProjectsDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
