import styled from '@emotion/styled';
import Layout from '../shared/components/layout/Layout';
import { MDXProvider } from '@mdx-js/react';
import { Global } from '@emotion/react';
import global from '@styles/global';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

/** 포스트 템플릿 */
export default function PostTemplate({ children, data }) {
  const { title, subTitle, date, tag, thumbnail, thumbnail_alt } =
    data.mdx.frontmatter;
  const featuredImg = getImage(thumbnail?.childImageSharp?.gatsbyImageData);

  return (
    <>
      <Global styles={global} />
      <Layout>
        <PostArticle>
          <p>
            @{tag} / {date}
          </p>
          <h1>{title}</h1>
          <GatsbyImage image={featuredImg} alt={thumbnail_alt} />
          <h2>{subTitle}</h2>
          <hr />
          <MDXProvider>{children}</MDXProvider>
        </PostArticle>
      </Layout>
    </>
  );
}

const PostArticle = styled.article`
  max-width: 104rem;
  margin: 0 auto;
  padding: 7%;

  h1 {
    margin: 1.5rem 0;
    font-size: 4rem;
    font-weight: 700;
  }

  h1 + p {
    text-align: end;
  }

  h2 {
    margin: 1.5rem 0;
    font-size: 3.2rem;
    font-weight: 600;
  }

  h3 {
    margin: 8rem 0 1rem;
    font-size: 3rem;
    font-weight: 600;
  }

  h4 {
    margin: 4rem 0 0.5rem;
    font-size: 2.2rem;
    font-weight: 600;
  }

  h5 {
    margin: 3rem 0 0;
    font-size: 1.8rem;
    font-weight: 500;
  }

  ol,
  ul {
    padding: 1rem 0;
  }

  ol > li {
    list-style: decimal inside;
  }

  ul > li {
    list-style: disc inside;
  }

  p > a {
    position: relative;
    display: inline-block;
    margin-top: 1rem;
    color: ${({ theme }) => theme.linkColor};

    &::after {
      position: absolute;
      opacity: 0;
      width: 0%;
      height: 0.2rem;
      content: '';
      background: currentColor;
      transition: all 0.3s;
    }

    &::after {
      left: 0;
      bottom: 0;
    }

    &:hover::after {
      opacity: 1;
      width: 100%;
    }
  }

  blockquote {
    padding: 0.7rem 0rem 0.7rem 1rem;
    margin: 1rem 0;
    border-left: ${({ theme }) => `5px solid ${theme.reverseBackground}`};

    p:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 700;
  }

  span {
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 2rem;
  }

  img {
    border-radius: 5px;
    display: inline-block;
  }

  del,
  em {
    font-size: 1.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.lightText};
  }

  hr {
    width: 100%;
    margin: 1rem 0;
    border-top: ${({ theme }) => `1px solid ${theme.text}`};
  }

  pre {
    border: ${({ theme }) => `1px solid ${theme.reverseBackground}`};
    padding: 1rem;
    margin: 2rem 0;
    font-size: small;
    overflow-x: auto;
    border-radius: 0.5rem;
  }

  code {
    display: inline-block;
    background-color: ${({ theme }) => theme.codeBox};
    border-radius: 0.5rem;
    padding: 0rem 0.5rem;
    margin: 0.5rem 0.2rem;
    font-size: small;
    counter-reset: line;
  }

  pre > code {
    display: inline;
    padding: 0 0.25rem;
    background-color: transparent;
  }
`;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subTitle
        date
        tag
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 1040)
          }
        }
        thumbnail_alt
      }
    }
  }
`;
