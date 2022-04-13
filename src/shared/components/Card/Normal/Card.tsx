import React from 'react';
import { CardContainer } from './Card.Styled';
import { Link } from 'react-router-dom';

export const CustomCard = ({ data }: any) => {
  return (
    <Link to="/home">
      <CardContainer>
        <img src={data?.imgUrl} alt="" className="card-img" />
        <div className="card-con">
          <h5>{data?.category}</h5>
          <h6>JAN 16, 2022</h6>
        </div>
        <p className="card-text">{data.title}</p>
      </CardContainer>
    </Link>
  );
};
