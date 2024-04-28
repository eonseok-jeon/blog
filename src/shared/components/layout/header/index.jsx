import styled from '@emotion/styled';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

/** Header */
export default function Header() {
  return (
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  );
}

const Container = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
  padding: 0 7%;
  z-index: 10;
`;
