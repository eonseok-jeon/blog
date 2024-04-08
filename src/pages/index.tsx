import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Global } from '@emotion/react';
import global from '@styles/global';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Global styles={global} />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
