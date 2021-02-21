import React from 'react';

import { useThemeModeProvider } from '../../../context/ThemeModeContext';

import Text from '../../core/Text';
import Linkedin from '../icons/Linkedin';
import Instagram from '../icons/Instagram';
import Github from '../icons/Github';

import { FooterWrapper, IconButton, IconWrapper } from './styles';

function Footer() {
  const { themeMode } = useThemeModeProvider();
  return (
    <FooterWrapper themeMode={themeMode}>
      <Text
        variant={{ xs: 'smallFontParagraph', md: 'paragraph' }}
        tag="span"
        textAlign={{ xs: 'center', sm: 'left' }}
      >
        Feito para o bootcamp JAMStack da Alura
      </Text>
      <IconWrapper>
        <IconButton href="https://www.instagram.com/gmcotta34/" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </IconButton>
        <IconButton margin="0 32px" href="https://www.linkedin.com/in/gustavomatias/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </IconButton>
        <IconButton href="https://github.com/gmcotta" target="_blank" rel="noopener noreferrer">
          <Github />
        </IconButton>
      </IconWrapper>
    </FooterWrapper>
  );
}

export default Footer;
