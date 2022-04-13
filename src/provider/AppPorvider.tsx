import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Layout from '../shared/components/Layout';
import { AuthContextProvider } from '../context/AuthContext';
import { NotificationsProvider } from '@mantine/notifications';

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <AuthContextProvider>
      <NotificationsProvider>
        <Provider store={store}>
          <Layout>{children}</Layout>
        </Provider>
      </NotificationsProvider>
    </AuthContextProvider>
  );
};
