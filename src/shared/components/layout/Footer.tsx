import React from 'react';
import styled from '@emotion/styled';
import IcGitHubLogo from '@assets/icGitHubLogo.svg';
import IcInstagramLogo from '@assets/icInstagramLogo.svg';
import { Link } from 'gatsby';

/** Footer */
export default function Footer() {
  return (
    <Container>
      <LogoWrapper>
        <Link to="https://github.com/eonseok-jeon" target="_blank">
          <IcGitHubLogo />
        </Link>
        <Link to="https://www.instagram.com/___seeeok/" target="_blank">
          <IcInstagramLogo />
        </Link>
      </LogoWrapper>
      <p>Copyright &copy;2024, Designed By Eonseok Jeon</p>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  svg {
    width: 4rem;
    height: 4rem;
  }
`;
