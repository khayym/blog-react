import React from 'react';
import { CardContainer } from './Card.Styled';

export const CustomCard = () => {
  return (
    <CardContainer to="/">
      <img
        src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a3a2fc4ea78d8c735476_thumbnail_7.jpg"
        alt=""
        className="card-img"
      />
      <div className="card-con">
        <h5>Photographs</h5>
        <h6>JAN 16, 2022</h6>
      </div>
      <p className="card-text">ve won a million dollars in cash!</p>
    </CardContainer>
  );
};
