import React from 'react';
import styled from 'styled-components';

import Header from '../src/components/core/Header';

const Title = styled.h1`
  font-size: 50px;
  margin-top: 1000px;
  color: ${({ theme }) => theme.colors.light.typography.main};
`;

export default function Home() {
  return (
    <>
      <Header />
      <Title>My page</Title>
    </>
  );
}
