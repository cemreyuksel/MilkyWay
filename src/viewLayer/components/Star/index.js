import React from 'react';

import { Card } from 'react-bootstrap';

import { useFetch } from '../../hooks';
import { UNIVERSE_URL, LOADING_MESSAGE } from '../../../dataLayer/env';

const cardMap = {
  RED: 'danger',
  BLUE: 'primary',
  GREEN: 'success',
  YELLOW: 'warning',
  BLACK: 'dark',
};

const getUniverseName = (universes, universeId) => {
  const { name } = universes.find((universe) => universe.id === universeId);
  return name;
};

const Star = ({ name, color, universeId }) => {
  const [data, loading] = useFetch(UNIVERSE_URL);

  return (
    <>
      {loading ? (
        <h2>{`${LOADING_MESSAGE}`}</h2>
      ) : (
        <Card
          bg={`${cardMap[color]}`}
          style={{ width: '20rem' }}
          className="text-center"
        >
          <Card.Body>
            <Card.Title> {name}</Card.Title>
            <Card.Header>
              Universe: {getUniverseName(data, universeId)}
            </Card.Header>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Star;