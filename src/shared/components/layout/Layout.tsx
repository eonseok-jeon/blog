import React from 'react';
import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

/** main layout */
export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
