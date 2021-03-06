import React, { useContext, useEffect, useState } from 'react';
import { CatContext } from '../contexts/CatContextProvider';
import { getBreedList, getCats } from '../services/CatService';
import { Select, Row, Col, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import '../assets/sass/Home.scss';

//created const from ant design
const { Option } = Select;
const { Meta } = Card;

const HomePage = () => {
  const { dispatch, catsDataSource } = useContext(CatContext);
  const { catBreeds, catList, catID } = catsDataSource;
  const [page, setPage] = useState(1);
  const [disableHandler, setDisableHandler] = useState(true);
  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    getBreedList()
      .then(({ data }) => {
        dispatch({ type: 'GET_BREEDS', data });
      })
  }, [dispatch]);

  const handleBreedSelect = (e) => {
    if (!e) {
      return handleClear();
    }
    getCats({ id: e, page })
      .then(({ data }) => {
        const catID = e;
        console.log(data);
        setPage(page + 1);
        setDisableHandler(false);
        dispatch({ type: 'CAT_ID', catID })
        dispatch({ type: 'GET_CATS', data })
      });
  }

  const handleLoadMore = () => {
    getCats({ id: catID, page })
      .then(({ data }) => {
        console.log(data);
        const moreData = [];
        data.map(el => {
          const index = catList.findIndex(e => e.id === el.id);
          return index === -1 ? moreData.push(el) : null;
        });
        if (moreData.length > 0) {
          setPage(page + 1);
          dispatch({ type: 'LOAD_MORE', moreData })
        } else {
          setShowBtn(false)
        }
      });
  }

  const handleClear = () => {
    const data = [];
    const catID = undefined;
    setPage(1);
    setDisableHandler(true);
    dispatch({ type: 'CAT_ID', catID })
    dispatch({ type: 'GET_CATS', data })
  }

  const handleViewDetails = (id) => {
    console.log(id)
    dispatch({ type: 'SELECTED_CAT', id })
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
          defaultValue={catID}
          onChange={handleBreedSelect}
        >
          {catBreeds.map(el =>
            <Option value={el.id} key={el.id}>{el.name}</Option>
          )}
        </Select>
      </Col>

      <Col md={{ span: 16, offset: 4 }} sm={{ span: 20, offset: 2 }} xs={{ span: 21, offset: 1 }} className="mt20">
        <Row type="flex" justify="start" align="top" gutter={[16, 16]}>
          {catList.map(el => {
            return (
              <Col md={{ span: 6 }} sm={{ span: 12 }} xs={{ span: 24 }} key={el.id}>
                <Card
                  hoverable
                  key={el.id}
                  cover={<img alt="example" src={el.url} />}
                >
                  <Meta className="text-center" description={<Link to={`/${el.id}`}><Button onClick={() => { handleViewDetails(el.id) }}>View Details</Button></Link>} />
                </Card>
              </Col>
            )
          })}
        </Row>
        {showBtn ?
          <Button
            className="mt20"
            type="primary"
            disabled={disableHandler}
            onClick={handleLoadMore}>
            Load more</Button>
          : null}
      </Col>
    </Row>
  );
}

export default HomePage;