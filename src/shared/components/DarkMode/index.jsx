import IcSun from '@assets/icSun.svg';
import IcMoon from '@assets/icMoon.svg';
import styled from '@emotion/styled';

/** Light / Dark Mode Button */
export default function DarkMode({ isDark, onChangeMode }) {
  return (
    <Container onClick={onChangeMode}>
      {isDark && <IcMoon />}
      {!isDark && <IcSun />}
    </Container>
  );
}

const Container = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;