import React from 'react';
import { useThemeModeProvider } from '../../../context/ThemeModeContext';

import HeaderWrapper from './styles';
import Text from '../../core/Text';
import Logo from '../icons/Logo';
import Dark from '../icons/Dark';
import Light from '../icons/Light';

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

  const { themeMode, setThemeMode } = useThemeModeProvider();

  function handleThemeClick() {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  }

  return (
    <HeaderWrapper themeMode={themeMode}>
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
      <HeaderWrapper.RightContent onClick={() => handleThemeClick()}>
        {themeMode === 'light' && <Dark />}
        {themeMode === 'dark' && <Light />}
      </HeaderWrapper.RightContent>
    </HeaderWrapper>
  );
}
