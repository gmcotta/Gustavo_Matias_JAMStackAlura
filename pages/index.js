import React from 'react';
import styled from 'styled-components';

import Header from '../src/components/shared/Header';
import Box from '../src/components/core/layout/Box';
import Grid from '../src/components/core/layout/Grid';
import Text from '../src/components/core/Text';
import Card from '../src/components/shared/Card';

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
            height="95vh"
            marginTop={{
              xs: '40px',
            }}
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
              <Text
                variant={{ xs: 'titleXS', lg: 'title' }}
                tag="h1"
                textAlign="center"
              >
                Olá, meu nome é Gustavo
              </Text>
              <Text
                variant={{ xs: 'subtitleXS', lg: 'subtitle' }}
                tag="p"
                textAlign="center"
              >
                E esse é meu portfolio de front-end do bootcamp JAMStack!
              </Text>
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
          <Grid.Row>
            <Grid.Col
              value={12}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                variant={{ xs: 'titleXS', lg: 'title' }}
                tag="h2"
                textAlign="center"
                textTransform="uppercase"
              >
                Sobre mim
              </Text>
              <img
                src="/images/maintenance.png"
                alt="Imagem de uma pessoa sentada em uma cadeira, usando um laptop"
                width="80%"
              />
              <Text
                variant={{ xs: 'smallFontParagraph', lg: 'mediumFontParagraph' }}
                tag="h2"
                textAlign="center"
              >
                Seção em construção
              </Text>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col>
              <Text
                variant={{ xs: 'titleXS', lg: 'title' }}
                tag="h2"
                textAlign="center"
                textTransform="uppercase"
              >
                Projetos
              </Text>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col
              value={12}
            >
              <Card
                main="true"
                title="Projeto 1"
                description="Descrição do projeto super descritiva, com o objetivo de encher linguiça para tentar preencher todo o espaço destinado à descrição do projeto em destaque."
                imageSrc="/images/mainProject.png"
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col
              value={{ xs: 12, md: 6, lg: 4 }}
              marginTop="16px"
            >
              <Card
                title="Projeto 2"
                imageSrc="/images/otherProject.png"
              />
            </Grid.Col>
            <Grid.Col
              value={{ xs: 12, md: 6, lg: 4 }}
              marginTop="16px"
            >
              <Card
                title="Projeto 3"
                imageSrc="/images/otherProject.png"
              />
            </Grid.Col>
            <Grid.Col
              value={{ xs: 12, md: 6, lg: 4 }}
              marginTop="16px"
            >
              <Card
                title="Projeto 4"
                imageSrc="/images/otherProject.png"
              />
            </Grid.Col>
          </Grid.Row>

          <Title>My page</Title>
        </Grid.Container>
      </Box>
    </>
  );
}
