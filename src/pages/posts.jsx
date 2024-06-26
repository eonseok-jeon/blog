import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout/Layout';
import Posts from '../views/postsPage/components/Posts';

export default function PostsPage({ data }) {
  return (
    <>
      <Layout>
        <Posts data={data} />
      </Layout>
    </>
  );
}

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
