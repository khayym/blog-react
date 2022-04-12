import { Divider, Grid } from '@mantine/core';
import React from 'react';
import CustomCard from '../../shared/components/Card/Normal/';
import TrendCard from '../../shared/components/Card/Trend';
import { Feed, HomeStyledContainer, TrendBox } from './Home.Styled';

interface IPosts {
  posts?: string[];
}

export const Home = ({ posts }: IPosts) => {
  return (
    <HomeStyledContainer>
      <TrendBox columns={24} gutter={30}>
        <Grid.Col xl={14} lg={14} md={14} sm={14}>
          <TrendCard
            img={
              'https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a4b516f8db6e392c8d78_thumbnail_13.jpg'
            }
          />
        </Grid.Col>
        <Grid.Col xl={10} lg={10} md={10} sm={10} className="right-side">
          <TrendCard
            version={'small'}
            img="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a48f2cfee655d66dc21c_thumbnail_12.jpg"
          />
          <TrendCard
            version={'small'}
            img="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a46c87eb451645c627af_thumbnail_11.jpg"
          />
        </Grid.Col>
      </TrendBox>
      <Divider my="sm" />
      <Feed gutter="xl">
        {posts?.map((item: any) => (
          <Grid.Col xl={4} lg={4} md={4} sm={4} key={item?.id}>
            <CustomCard />
          </Grid.Col>
        ))}

        <Grid.Col xl={4} lg={4} md={4} sm={4}>
          <CustomCard />
        </Grid.Col>
        <Grid.Col xl={4} lg={4} md={4} sm={4}>
          <CustomCard />
        </Grid.Col>
        <Grid.Col xl={4} lg={4} md={4} sm={4}>
          <CustomCard />
        </Grid.Col>
      </Feed>
    </HomeStyledContainer>
  );
};
