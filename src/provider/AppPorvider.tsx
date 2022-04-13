import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Layout from '../shared/components/Layout';
import { AuthContextProvider } from '../context/AuthContext';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <AuthContextProvider>
      <ModalsProvider>
        <NotificationsProvider>
          <Provider store={store}>
            <Layout>{children}</Layout>
          </Provider>
        </NotificationsProvider>
      </ModalsProvider>
    </AuthContextProvider>
  );
};
