import IcSun from '@assets/icSun.svg';
import IcMoon from '@assets/icMoon.svg';
import styled from '@emotion/styled';
import { useContext } from 'react';
import { DarkModeContext } from '@contexts/darkModeContext';

/** Light / Dark Mode Button */
export default function DarkMode() {
  const { isDark, onChangeMode } = useContext(DarkModeContext);

  return (
    <Container onClick={onChangeMode}>
      {isDark && <IcMoon />}
      {!isDark && <IcSun />}
    </Container>
  );
}

const Container = styled.button`
  position: fixed;
  top: 10rem;
  right: 4rem;
  width: 3rem;
  height: 3rem;
  z-index: 100;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;
