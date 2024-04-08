import React from 'react';
import { PropsWithChildren } from 'react';
import Header from './header';
import Footer from './Footer';
import styled from '@emotion/styled';

/** main layout */
export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
`;
