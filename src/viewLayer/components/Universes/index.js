import React from 'react';

import { Card } from 'react-bootstrap';

import { useFetch } from '../../hooks';
import { UNIVERSE_URL, LOADING_MESSAGE } from '../../../dataLayer/env';

import './style.scss';

const Universes = () => {
  const [data, loading] = useFetch(UNIVERSE_URL);

  return (
    <>
      {loading ? (
        <h2>{`${LOADING_MESSAGE}`}</h2>
      ) : (
        <div className="universe-items">
          {data.map(({ maxSize, name }, index) => (
            <div key={index}>
              <Card
                bg={'Info'}
                style={{ width: '20rem' }}
                className="text-center"
              >
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Header>Max Size: {maxSize}</Card.Header>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Universes;
