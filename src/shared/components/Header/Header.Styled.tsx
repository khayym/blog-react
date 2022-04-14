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

  a {
    text-decoration: none;
    all: unset;

    :hover {
      cursor: pointer;
    }
  }

  .text-icon {
    b {
      font-size: 3rem;

      @media (max-width: 500px) {
        font-size: 1.5rem;
      }
    }

    small {
      font-size: 3rem;
      font-weight: 200;
      font-family: 'Lora', serif;
      letter-spacing: -4px;

      @media (max-width: 500px) {
        font-size: 2rem;
      }
      @media (max-width: 380px) {
        display: none;
      }
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

  .login-add {
    letter-spacing: 1.2px;
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
