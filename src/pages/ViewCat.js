import React, { useContext, useEffect } from 'react';
import { CatContext } from '../contexts/CatContextProvider';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ViewCat = () => {
  const { catsDataSource } = useContext(CatContext);
  const { selectedCat } = catsDataSource;
  const checker = Object.keys(selectedCat).length ? true : false;

  useEffect(() => {
    console.log(catsDataSource)
  })

  return (
    <Row>
      <Col md={{ span: 16, offset: 4 }} sm={{ span: 20, offset: 2 }} xs={{ span: 21, offset: 1 }}>
        <Link to="/" >
          <Button style={{ display: 'block' }}>BACK</Button>
        </Link>
        {checker ?
          <Card
            hoverable
            cover={<img alt="example" src={selectedCat[0].url} />}
          >
            <Meta
              title={<div>
                <h3>{selectedCat[0].breeds[0].name}</h3>
                <h4>Origin: {selectedCat[0].breeds[0].origin}</h4>
                <h5>{selectedCat[0].breeds[0].temperament}</h5>
              </div>}
              description={selectedCat[0].breeds[0].description} />
          </Card>
          : null}
      </Col>
    </Row>
  );
}

export default ViewCat;