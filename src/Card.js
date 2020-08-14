import React from 'react';

const Card = ({ value, suit, image }) => (
  <>
    <img src={image} alt={`${suit}-${value}-`} />
  </>
);

export default Card;