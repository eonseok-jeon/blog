import styled from '@emotion/styled';
import Layout from '../shared/components/layout/Layout';
import { MDXProvider } from '@mdx-js/react';
import { Global } from '@emotion/react';
import global from '@styles/global';

const Div = styled.div`
  font-size: 100px;
`;

const shortcodes = { Div };

/** 포스트 템플릿 */
export default function PostTemplate({ children }) {
  return (
    <>
      <Global styles={global} />
      <Layout>
        <PostArticle>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </PostArticle>
      </Layout>
    </>
  );
}

const PostArticle = styled.article`
  max-width: 104rem;
  border: 1px solid blue;
  margin: 0 auto;
  padding: 7%;

  h1 {
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: 700;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-size: 3.2rem;
    font-weight: 600;
  }

  h3 {
    margin: 4rem 0 1rem;
    font-size: 3rem;
    font-weight: 600;
  }

  h4 {
    margin: 2rem 0 0.5rem;
    font-size: 2.2rem;
    font-weight: 600;
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

  blockquote {
    border-left: 5px solid black;
    padding: 0.7rem 0rem 0.7rem 1rem;
    margin: 1rem 0;
  }

  strong {
    font-weight: 700;
  }

  span {
    margin: 2rem 0 1rem;
  }

  img {
    border-radius: 5px;
    display: inline-block;
  }

  del {
    font-size: 1.4rem;
    font-weight: 300;
    color: #777;
  }

  hr {
    width: 100%;
    margin: 1rem 0;
    border-top: 1px solid black;
  }

  pre {
    border: 1px solid black;
    padding: 1rem;
    margin: 2rem 0;
    font-size: small;
    overflow-x: auto;
    border-radius: 0.5rem;
  }

  code {
    display: inline-block;
    background-color: #e5e7eb;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem 0.2rem;
    font-size: small;
    counter-reset: line;
  }

  pre > code {
    display: inline;
    padding: 0 0.25rem;
    background-color: transparent;
  }

  /* pre {
    display: inline-block;
    width: 100%;
    overflow: auto;
    margin: 2rem 0;
    padding: 0.1rem 2rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #222;
    border: 0.1rem solid #666;
  } */
`;
