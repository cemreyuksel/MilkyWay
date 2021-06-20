import React from 'react';

import Star from '../Star';

import { useFetch } from '../../hooks';
import { STARS_URL, LOADING_MESSAGE} from '../../../dataLayer/env';

import './style.css';


const Stars = () => {
  const [stars, loading] = useFetch(STARS_URL);

  const starItems = stars.map(({ name, color, universeId }, index) => (
    <Star key={index} name={name} color={color} universeId={universeId} />
  ));

  return (
    <>
      {loading ? (
        `${LOADING_MESSAGE}`
      ) : (
        <div className="star-items">{starItems}</div>
      )}
    </>
  );
};

export default Stars;
