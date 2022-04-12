import React, { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import { AppProvider } from './provider/AppPorvider';
import GlobalStyle from './style/global';

const App = () => {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
  }, []);
  return (
    mounted && (
      <AppProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppProvider>
    )
  );
};

export default App;
