import React from 'react';

import Text from '../../core/Text';
import Linkedin from '../icons/Linkedin';
import Instagram from '../icons/Instagram';
import Github from '../icons/Github';

import { FooterWrapper, IconButton, IconWrapper } from './styles';

function Footer() {
  return (
    <FooterWrapper>
      <Text
        variant={{ xs: 'smallFontParagraph', md: 'paragraph' }}
        tag="span"
        textAlign={{ xs: 'center', sm: 'left' }}
      >
        Feito para o bootcamp JAMStack da Alura
      </Text>
      <IconWrapper>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton margin="0 32px">
          <Linkedin />
        </IconButton>
        <IconButton>
          <Github />
        </IconButton>
      </IconWrapper>
    </FooterWrapper>
  );
}

export default Footer;
