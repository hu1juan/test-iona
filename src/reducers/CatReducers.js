export const catReducers = (state, action) => {
  switch (action.type) {
    case 'GET_BREEDS':
      return { ...state, catBreeds: action.data };
    case 'GET_CATS':
      return { ...state, catList: action.data };
    default:
      return state;
  }
}