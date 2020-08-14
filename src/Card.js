import React from 'react';

const Card = ({ value, suit, image }) => (
  <>
    <div>
      <img src={image} alt={`${suit}-${value}-`} />
    </div>
  </>
);

export default Card;