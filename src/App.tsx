import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import { AppProvider } from './provider/AppPorvider';

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
