import styled from '@emotion/styled';
import Navigation from './Navigation';
import Logo from './Logo';

/** Header */
export default function Header() {
  return (
    <Container>
      <Logo />
      <Navigation />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 14.6rem;
  padding: 0 10rem;
  z-index: 10;
`;
