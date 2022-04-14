import { Spoiler } from '@mantine/core';
import React from 'react';
import { CommentBox } from './Comment.Styled';

export const Comment = () => {
  return (
    <CommentBox>
      <Spoiler maxHeight={50} showLabel="Show more" hideLabel="Hide">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        labore obcaecati iusto iste quisquam, asperiores ullam nulla
        exercitationem, aliquam repellat molestias? Dolor ab quibusdam modi
        dolores minus eos cupiditate aliquid, iure blanditiis accusantium
        sapiente debitis aliquam eveniet perspiciatis? Quisquam non officiis
        aliquid mollitia illum? Iure neque necessitatibus ut ipsa quas!
      </Spoiler>
    </CommentBox>
  );
};
