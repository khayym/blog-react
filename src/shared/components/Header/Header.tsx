import { Burger } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import React, { useState } from 'react';
import { HeaderContainer } from './Header.Styled';

interface IHeader {
  children?: React.ReactNode;
}

export const CustomHeader: React.FC<IHeader> = ({ children }) => {
  const [scroll, scrollTo] = useWindowScroll();
  const [opened, setOpened] = useState(false);

  return (
    <HeaderContainer
      fixed
      position={{ top: 0 }}
      height={
        210 - Math.round(scroll.y) >= 80 ? 210 - Math.round(scroll.y) : 80
      }
      // p="xs"
    >
      <div className="div-container">
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          mr="xl"
        />

        <div className="text-icon">
          <b>Khayym</b>
          <small>.Blog</small>
        </div>

        <div className="login">Login</div>
      </div>
    </HeaderContainer>
  );
};
