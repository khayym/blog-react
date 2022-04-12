import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from '../style/theme';
import GlobalStyle from '../style/global';
import { store } from '../store';
import Layout from '../shared/components/Layout';

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>{children}</Layout>
      </ThemeProvider>
    </Provider>
  );
};
