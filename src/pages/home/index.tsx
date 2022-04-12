import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from '../../feature/home';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios('https://bloggy-api.herokuapp.com/posts');
      setPosts(data);
    };

    getData();
  }, []);

  return (
    <>
      <Home posts={posts} />
    </>
  );
};

export default HomePage;
