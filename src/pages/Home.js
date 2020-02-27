import React, { useContext, useEffect } from 'react';
import { CatContext } from '../contexts/CatContextProvider';
import { getBreedList } from '../services/CatService';
import { Select, Row, Col } from 'antd';
import '../assets/sass/Home.scss';

//created const from ant design
const { Option } = Select;

const HomePage = () => {
  const { dispatch, catsDataSource } = useContext(CatContext);
  const { catBreeds } = catsDataSource;

  useEffect(() => {
    getBreedList()
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: 'GET_BREEDS', data });
      })
  }, [dispatch]);

  return (
    <Row className='home-wrapper'>
      <Col md={{ span: 16, offset: 4 }} sm={{ span: 20, offset: 2 }} xs={{ span: 21, offset: 1 }}>
        <h1>CAT BROWSER</h1>
        <h4>Breed</h4>
        <Select
          className='catbreed-select'
          placeholder='Select Cat Breed'
          showSearch
          allowClear
        >
          {catBreeds.map(el =>
            <Option value={el.id} key={el.id}>{el.name}</Option>
          )}
        </Select>
      </Col>
    </Row>
  );
}

export default HomePage;