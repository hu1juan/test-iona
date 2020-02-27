import React, { useContext, useEffect } from 'react';
import { CatContext } from '../contexts/CatContextProvider';
import { getBreedList } from '../services/CatService';

const HomePage = () => {
  const { dispatch } = useContext(CatContext);

  useEffect(() => {
    getBreedList()
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: 'GET_BREEDS', data });
      })
  }, [dispatch]);

  return (
    <h1>Hello World!!!</h1>
  );
}

export default HomePage;