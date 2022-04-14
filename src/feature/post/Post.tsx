import { Button, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';
import Comment from '../../shared/components/Comments';
import { CommentBox } from '../../shared/components/Comments/Comment.Styled';
import { HomeStyled } from './Post.Styled';

export const PostContanier = () => {
  const postData = useAppSelector((state) => state.post.singleData);

  const form = useForm({
    initialValues: {
      body: '',
      postId: postData.id
    }
  });

  const getComments = async (value: any) => {
    console.log(value);
    await axios.post(`https://bloggy-api.herokuapp.com/comments`, value);
    console.log('postData', postData);
  };
  return (
    <HomeStyled>
      <div>
        <img src={postData?.imgUrl} alt="" />
        <h1>{postData?.title}</h1>
        <p>{postData?.content}</p>
      </div>
      <div className="comment-div">
        <h2>Comments</h2>
        <Comment />

        <div className="cb">
          <h3>Comment yaz</h3>
          <Textarea autosize minRows={3} {...form.getInputProps('body')} />
          <Button color="dark" onClick={() => getComments(form.values)} mt="sm">
            Submit
          </Button>
        </div>
      </div>
    </HomeStyled>
  );
};
