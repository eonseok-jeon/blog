import React from 'react';
import styled from '@emotion/styled';

/** Footer */
export default function Footer() {
  return (
    <Container>
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
  padding: 12rem 0;
`;
