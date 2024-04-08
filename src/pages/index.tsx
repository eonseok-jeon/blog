import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '@components/layout/Layout';
import { Global } from '@emotion/react';
import global from '@styles/global';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Global styles={global} />
      <Layout>123</Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
