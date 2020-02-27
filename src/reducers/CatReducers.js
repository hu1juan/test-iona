export const catReducers = (state, action) => {
  switch (action.type) {
    case 'GET_BREEDS':
      return { ...state, catBreeds: action.data };
    case 'GET_CATS':
      return { ...state, catList: action.data };
    case 'LOAD_MORE':
      return { ...state, catList: state.catList.concat(action.moreData) };
    default:
      return state;
  }
}