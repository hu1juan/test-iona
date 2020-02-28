import React, { createContext, useReducer } from 'react';
import { catReducers } from '../reducers/CatReducers';

export const CatContext = createContext();

const CatContextProvider = (props) => {
  const initState = { catBreeds: [], catList: [], catID: undefined, selectedCat: {} }
  const [catsDataSource, dispatch] = useReducer(catReducers, initState)

  return (
    <CatContext.Provider value={{ catsDataSource, dispatch }}>
      {props.children}
    </CatContext.Provider>
  );
}

export default CatContextProvider;