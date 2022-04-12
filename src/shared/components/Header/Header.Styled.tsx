import { Header } from '@mantine/core';
import styled from 'styled-components';

export const HeaderContainer = styled(Header)`
  border-bottom: 0px solid transparent;
  width: 100%;
  transition: all 0.1s;
  padding: 0 17px !important;
  display: flex;
  align-items: center;
  justify-content: center;

  .text-icon {
    b {
      font-size: 3rem;
    }

    small {
      font-size: 3rem;
      font-weight: 200;
      font-family: 'Lora', serif;
      letter-spacing: -4px;
    }
  }

  .div-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1125px;
  }

  .login {
    letter-spacing: 1.2px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
