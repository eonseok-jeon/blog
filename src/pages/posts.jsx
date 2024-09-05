import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout/Layout';
import SEO from '@components/SEO';
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

export const Head = () => {
  return (
    <SEO
      title="eonseok blog - posts"
      description="언석's blog posts"
      pathname="posts"
    />
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
