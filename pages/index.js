import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.light.typography.main};
`;

export default function Home() {
  return <Title>My page</Title>;
}