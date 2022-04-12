import React, { useEffect, useState } from 'react';
import { CardContent, TrendStyledCard } from './TrendCard.Styled';

type ITrendcard = {
  version?: string;
  img?: string;
};

export const TrendCard = ({ version, img }: ITrendcard) => {
  const [height, setHeight] = useState('710px');

  useEffect(() => {
    version === 'small' ? setHeight('340px') : setHeight('710px');
  }, []);

  return (
    <TrendStyledCard
      style={{
        height: height,
        backgroundImage: `url(${img})`
      }}
    >
      <CardContent>
        <div className="content-head">
          <p>Category</p>
          <p>JAN 16,2022</p>
        </div>
        <h3>The next 7 things to immediately do about car</h3>
      </CardContent>
    </TrendStyledCard>
  );
};
