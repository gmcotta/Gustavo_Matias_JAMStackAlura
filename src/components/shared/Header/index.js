import React from 'react';

import HeaderWrapper from './styles';
import Text from '../../core/Text';
import Logo from '../icons/Logo';
import Dark from '../icons/Dark';

export default function Header() {
  const links = [
    {
      id: 1,
      text: 'Sobre mim',
      url: '#sobre',
    },
    {
      id: 2,
      text: 'Projetos',
      url: '#projetos',
    },
    {
      id: 3,
      text: 'Contato',
      url: '#contato',
    },
  ];

  return (
    <HeaderWrapper>
      <HeaderWrapper.LeftContent href="/">
        <Logo />
      </HeaderWrapper.LeftContent>
      <HeaderWrapper.CentralContent>
        {
          links.map(link => (
            <Text
              key={link.id}
              variant={{
                xs: 'smallFontParagraph',
                sm: 'paragraph',
                md: 'mediumFontParagraph',
              }}
              tag="a"
              href={link.url}
            >
              {link.text}
            </Text>
          ))
        }
      </HeaderWrapper.CentralContent>
      <HeaderWrapper.RightContent>
        <Dark />
      </HeaderWrapper.RightContent>
    </HeaderWrapper>
  );
}
