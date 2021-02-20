import React from 'react';

import HeaderWrapper from './styles';
import Logo from '../icons/Logo';
import Dark from '../icons/Dark';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.LeftContent>
        <Logo />
      </HeaderWrapper.LeftContent>
      <HeaderWrapper.CentralContent>
        <span>Sobre mim</span>
        <span>Projetos</span>
        <span>Contato</span>
      </HeaderWrapper.CentralContent>
      <HeaderWrapper.RightContent>
        <Dark />
      </HeaderWrapper.RightContent>
    </HeaderWrapper>
  );
}
