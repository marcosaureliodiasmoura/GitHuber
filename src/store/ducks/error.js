// 1. Criação dos Types para erros
export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
};

// 2. Criação do Estado
const INITIAL_STATE = {
  visible: false,
  message: null,
};

// 3. Reducer de error
export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, message: action.payload.message };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

// 4. As Actions também são chamadas de Creators
export const Creators = {
  setError: message => ({
    type: Types.SET,
    payload: { message },
  }),
  hideError: () => ({ type: Types.HIDE }),
};
