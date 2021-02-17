import React from 'react';

import Logo from '../../shared/icons/Logo';
import Dark from '../../shared/icons/Dark';

export default function Header() {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <div>
        <span>Sobre mim</span>
        <span>Projetos</span>
      </div>
      <div>
        <Dark />
      </div>
    </header>
  );
}
