import React from 'react';
import Layout from '@components/layout/Layout';
import Landing from '../views/mainPage/components/Landing';

const IndexPage = () => {
  return (
    <Layout isLanding={true}>
      <Landing />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
