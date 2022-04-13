import axios from 'axios';
import React, { useEffect } from 'react';
import Home from '../../feature/home';
import { useAppDispatch } from '../../hooks/redux';
import { fillPosts } from '../../store/slices/post/postSlices';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios('https://bloggy-api.herokuapp.com/posts');
      dispatch(fillPosts(data));
    };
    getData();
  }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
