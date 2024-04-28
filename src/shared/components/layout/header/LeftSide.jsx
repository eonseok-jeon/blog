import styled from '@emotion/styled';
import { Link } from 'gatsby';
import IcSleepingMan from '@assets/icSleepingMan.svg';
import IcWorkingMan from '@assets/icWorkingMan.svg';
import { LEFT_NAV_ITEMS } from '../../../constants/LEFT_NAV_ITEMS';
import { css } from '@emotion/react';

/** header left nav */
function LeftNav({ showMenu }) {
  return (
    <Nav showMenu={showMenu}>
      <NavList>
        {LEFT_NAV_ITEMS.map(({ label, link }) => (
          <Link to={link}>
            <NavItem key={label}>{label}</NavItem>
          </Link>
        ))}
      </NavList>
    </Nav>
  );
}

const Nav = styled.nav`
  display: inline-block;

  /* 665px */
  @media screen and (max-width: 41.5625em) {
    background-color: rgba(3, 3, 3, 0.9);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in;
    padding-top: 20rem;
    z-index: 2;

    ${({ showMenu }) =>
      showMenu
        ? css`
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transform: translateX(0);
          `
        : css`
            opacity: 0;
            pointer-events: none;
            visibility: hidden;
            transform: translateX(100%);
          `}
  }
`;

const NavList = styled.ol`
  display: flex;
  gap: 4.8rem;
  align-items: center;
  justify-content: center;

  /* 665px */
  @media screen and (max-width: 41.5625em) {
    flex-direction: column;
    gap: 6rem;
  }
`;

const NavItem = styled.li`
  position: relative;
  padding: 0.2rem 0;

  &::before,
  &::after {
    position: absolute;
    opacity: 0;
    width: 0%;
    height: 0.2rem;
    content: '';
    background: currentColor;
    transition: all 0.3s;
  }

  &::before {
    right: 0;
    top: -0.2rem;
  }

  &::after {
    left: 0;
    bottom: 0;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
    width: 100%;
  }
`;

/** header left side */
export default function LeftSide({ showMenu }) {
  const randomNumber = Math.floor(Math.random() * 2);

  return (
    <Container>
      <LogoWrapper to="/">
        {randomNumber === 0 && <IcSleepingMan />}
        {randomNumber === 1 && <IcWorkingMan />}
      </LogoWrapper>
      <LeftNav showMenu={showMenu} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  gap: 2rem;
  align-items: center;
  cursor: pointer;

  & svg {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
`;
