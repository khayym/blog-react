import React, { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomePage from './pages/home';
import Login from './pages/login';
import { AppProvider } from './provider/AppPorvider';
import GlobalStyle from './style/global';
import { theme } from './style/theme';

const App = () => {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
  }, []);
  return (
    mounted && (
      <AppProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </AppProvider>
    )
  );
};

export default App;
