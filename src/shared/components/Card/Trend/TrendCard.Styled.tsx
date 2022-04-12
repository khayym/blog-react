import styled from 'styled-components';

interface ITrendcard {
  bgUrl?: string;
  version?: string;
}

export const TrendStyledCard = styled.div<ITrendcard>`
  /* height: 710px; */
  min-height: 230px;
  border-radius: 8px !important;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    filter 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    -webkit-transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    -webkit-filter 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-style: preserve-3d;
  will-change: transform;
  display: flex;
  align-items: end;
  justify-content: center;

  :hover {
    overflow: hidden;
    box-shadow: 0 50px 80px -20px rgb(0 0 0 / 40%);
    filter: brightness(110%);
    cursor: pointer;

    transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
`;

export const CardContent = styled.div`
  padding: 16% 7% 7%;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  background: linear-gradient(180deg, transparent, #000);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  .content-head {
    display: flex;
    color: ${({ theme }) => theme.colors.white};

    p:first-child {
      padding: 6px 10px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      font-size: 11px;
      line-height: 110%;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    p:last-child {
      padding: 6px 10px;
      color: ${({ theme }) => theme.colors.white};
      font-size: 11px;
      line-height: 110%;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  h3 {
    font-size: 36px;
    line-height: 120%;
    font-weight: 700;
    letter-spacing: -0.4px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
