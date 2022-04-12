import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Layout from '../shared/components/Layout';

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  );
};
