import React, { useContext, useEffect, useState } from 'react';
import { CatContext } from '../contexts/CatContextProvider';
import { getBreedList, getCats } from '../services/CatService';
import { Select, Row, Col, Button } from 'antd';
import '../assets/sass/Home.scss';

//created const from ant design
const { Option } = Select;

const HomePage = () => {
  const { dispatch, catsDataSource } = useContext(CatContext);
  const { catBreeds } = catsDataSource;
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const [disableHandler, setDisableHandler] = useState(true);

  useEffect(() => {
    getBreedList()
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: 'GET_BREEDS', data });
      })
  }, [dispatch]);

  const handleBreedSelect = (e) => {
    getCats({ id: e, page })
      .then(({ data }) => {
        console.log(data);
        setId(e);
        setPage(page + 1);
        setDisableHandler(false);
        dispatch({ type: 'GET_CATS', data })
      });
  }

  const handleLoadMore = () => {
    getCats({ id, page })
      .then(({ data }) => {
        console.log(data);
        setPage(page + 1);
        setDisableHandler(false);
        dispatch({ type: 'GET_CATS', data })
      });
  }

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
          onChange={handleBreedSelect}
        >
          {catBreeds.map(el =>
            <Option value={el.id} key={el.id}>{el.name}</Option>
          )}
        </Select>
        <Button className="mt20" type="primary" disabled={disableHandler} onClick={handleLoadMore}>Load more</Button>
      </Col>
    </Row>
  );
}

export default HomePage;