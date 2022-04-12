import React from 'react';
import { AppShell } from '@mantine/core';
import { LayoutStyled } from './Layout.Styled';
import CustomHeader from '../Header';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <AppShell padding="md" header={<CustomHeader />}>
      <LayoutStyled size="lg" px="sm">
        {children}
      </LayoutStyled>
    </AppShell>
  );
};
