import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Global } from '@emotion/react';
import reset from '@styles/reset';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Global styles={reset} />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
