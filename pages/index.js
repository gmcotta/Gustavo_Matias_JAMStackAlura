import React from 'react';
import styled from 'styled-components';

import Header from '../src/components/core/Header';
import Box from '../src/components/core/layout/Box';
import Grid from '../src/components/core/layout/Grid';

const Title = styled.h1`
  font-size: 50px;
  margin-top: 1000px;
  color: ${({ theme }) => theme.colors.light.typography.main};
`;

export default function Home() {
  return (
    <>
      <Header />
      <Box
        display="flex"
        flex={1}
        flexWrap="wrap"
        flexDirection="column"
      >
        <Grid.Container>
          <Grid.Row
            height="100vh"
          >
            <Grid.Col
              value={{
                xs: 12, lg: 6,
              }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="green"
            >
              <span>Olá, meu nome é Gustavo</span>
              <span>E esse é meu portfolio de front-end do bootcamp JAMStack!</span>
            </Grid.Col>
            <Grid.Col
              value={{
                xs: 12, lg: 6,
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="blue"
            >
              <img
                src="/images/home.png"
                alt="Imagem de uma pessoa sentada em uma cadeira, usando um laptop"
                width="100%"
              />
            </Grid.Col>
          </Grid.Row>
          <Title>My page</Title>
        </Grid.Container>
      </Box>
    </>
  );
}
