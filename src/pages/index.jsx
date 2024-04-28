import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout/Layout';
import { Global } from '@emotion/react';
import global from '@styles/global';
import Posts from '../views/mainPage/components/Posts';

const IndexPage = ({ data }) => {
  return (
    <>
      <Global styles={global} />
      <Layout>
        <Posts data={data} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          subTitle
          date(formatString: "MMMM DD, YYYY")
          tag
          url
          thumbnail_alt
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
