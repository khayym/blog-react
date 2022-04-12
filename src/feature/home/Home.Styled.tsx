import { Grid } from '@mantine/core';
import styled from 'styled-components';
export const HomeStyledContainer = styled.div``;

export const TrendBox = styled(Grid)`
  margin-bottom: 30px;

  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
  }
`;

export const Feed = styled(Grid)`
  margin-top: 30px;
`;
