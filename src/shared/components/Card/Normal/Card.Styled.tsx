import { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface ICard {
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export const CardContainer = styled.div<ICard>`
  text-decoration: none;
  .card-img {
    border-radius: 8px;
    height: 230px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 17px;
    transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
      filter 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
      box-shadow 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
      -webkit-transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
      -webkit-filter 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-style: preserve-3d;
    will-change: transform;

    :hover {
      overflow: hidden;
      box-shadow: 0 50px 80px -20px rgb(0 0 0 / 40%);
      filter: brightness(110%);
      cursor: pointer;

      transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  .card-text {
    font-size: 24px;
    line-height: 125%;
    font-weight: 700;
    letter-spacing: -0.4px;
    color: ${({ theme }) => theme.colors.black};
  }

  .card-con {
    display: flex;
    align-items: center;

    h5 {
      padding: 6px 10px;
      border-radius: 4px;
      background-color: #efefef;
      transition: background-color 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
        color 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      color: rgba(0, 0, 0, 0.6);
      font-size: 11px;
      line-height: 110%;
      font-weight: 600;
      letter-spacing: 1px;
      text-decoration: none;
      text-transform: uppercase;

      :hover {
        background-color: #000;
        color: #fff;
      }
    }

    h6 {
      padding: 6px 10px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 11px;
      line-height: 110%;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
`;
