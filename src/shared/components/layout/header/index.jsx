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
