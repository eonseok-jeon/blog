import styled from '@emotion/styled';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import IcMenu from '@assets/icMenu.svg';
import { useState } from 'react';

/** Header */
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <LeftSide showMenu={showMenu} />
      <RightSide showMenu={showMenu} />
      <MenuButton
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        <IcMenu />
      </MenuButton>
    </Container>
  );
}

const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  padding: 0 7%;
  z-index: 10;
  background-color: rgba(18, 18, 18, 0.9);
`;

const MenuButton = styled.button`
  display: none;

  /* 665px */
  @media screen and (max-width: 41.5625em) {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
  }
`;
