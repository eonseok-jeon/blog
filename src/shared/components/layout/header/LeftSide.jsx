import styled from '@emotion/styled';
import { Link } from 'gatsby';
import IcSleepingMan from '@assets/icSleepingMan.svg';
import IcWorkingMan from '@assets/icWorkingMan.svg';
import { LEFT_NAV_ITEMS } from '../../../constants/LEFT_NAV_ITEMS';

/** header left nav */
function LeftNav() {
  return (
    <nav>
      <NavList>
        {LEFT_NAV_ITEMS.map(({ label, link }) => (
          <Link to={link}>
            <NavItem key={label}>{label}</NavItem>
          </Link>
        ))}
      </NavList>
    </nav>
  );
}

const NavList = styled.ol`
  display: flex;
  gap: 4.8rem;
  align-items: center;
  justify-content: center;
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
export default function LeftSide() {
  const randomNumber = Math.floor(Math.random() * 2);

  return (
    <Container>
      <LogoWrapper to="/">
        {randomNumber === 0 && <IcSleepingMan />}
        {randomNumber === 1 && <IcWorkingMan />}
      </LogoWrapper>
      <LeftNav />
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
