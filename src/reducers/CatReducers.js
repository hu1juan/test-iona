export const catReducers = (state, action) => {
  switch (action.type) {
    case 'GET_BREEDS':
      return { ...state, catBreeds: action.data };
    case 'GET_CATS':
      return { ...state, catList: action.data };
    case 'LOAD_MORE':
      return { ...state, catList: state.catList.concat(action.moreData) };
    case 'CAT_ID':
      return { ...state, catID: action.catID };
    case 'SELECTED_CAT':
      const selectedCat = state.catList.filter(el => el.id === action.id);
      return { ...state, selectedCat };
    default:
      return state;
  }
}