const INITIAL_STATE = {
  isLoading: true,
  advantage: [],
  disadvantage: [],
};

export default function types(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_DAMAGE_RELATIONS':
      return {
        ...state,
        advantage: [...state.advantage, ...action.advantage],
        disadvantage: [...state.disadvantage, ...action.disadvantage],
        isLoading: false,
      };
    case 'REQ_RELATIONS':
      return { ...state, isLoading: true };
    case 'CHANGE_RELATIONS':
      return {
        ...state,
        advantage: [],
        disadvantage: [],
      };
    default:
      return state;
  }
}
