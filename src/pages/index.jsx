import React from 'react';
import Layout from '@components/layout/Layout';
import { Global } from '@emotion/react';
import global from '@styles/global';

const IndexPage = () => {
  return (
    <>
      <Global styles={global} />
      <Layout></Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
