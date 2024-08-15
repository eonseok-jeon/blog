import React from 'react';
import Layout from '@components/layout/Layout';
import SEO from '@components/SEO';
import Landing from '../views/mainPage/components/Landing';

const IndexPage = () => {
  return (
    <Layout isLanding={true}>
      <Landing />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEO />;
};
