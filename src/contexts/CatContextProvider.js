import React, { createContext, useReducer } from 'react';
import { catReducers } from '../reducers/CatReducers';

export const CatContext = createContext();

const CatContextProvider = (props) => {
  const initState = { catBreeds: [] }
  const [catsDataSource, dispatch] = useReducer(catReducers, initState)

  return (
    <CatContextProvider.Provider value={{ catsDataSource, dispatch }}>
      {props.children}
    </CatContextProvider.Provider>
  );
}

export default CatContextProvider;