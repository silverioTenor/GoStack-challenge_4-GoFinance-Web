import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  activatedLink: 'list' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  activatedLink,
  size = 'large',
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className={activatedLink === 'list' ? 'enable' : ''} to="/">
          Listagem
        </Link>
        <Link className={activatedLink === 'import' ? 'enable' : ''} to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
