import styled from '@emotion/styled';
import Layout from '../shared/components/layout/Layout';
import SEO from '../shared/components/SEO';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';

function TableOfContents({ toc }) {
  return (
    <TOCWrapper>
      {toc.map(({ items, url, title }, i) => (
        <TOCItem key={`${url}${i}}`}>
          {title && <Link to={`${url}`}>{title}</Link>}
          {items && <TableOfContents toc={items} />}
        </TOCItem>
      ))}
    </TOCWrapper>
  );
}

const TOCWrapper = styled.ol`
  color: ${({ theme }) => theme.lightText};
  list-style: none;

  li li {
    padding-left: 3rem;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

const TOCItem = styled.li`
  margin-bottom: 0.2rem;

  a {
    display: inline-block;
    width: 100%;
    padding: 0.2rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.lightText};
    word-break: break-all;
    word-wrap: break-word;
    transition: all 0.1s ease;

    :hover {
      color: ${({ theme }) => theme.text};
      transform: scale(1.05);
    }
  }
`;

/** 포스트 템플릿 */
export default function PostTemplate({ children, data }) {
  const toc = data.mdx.tableOfContents;
  const { title, subTitle, date, tag, thumbnail, thumbnail_alt } =
    data.mdx.frontmatter;
  const featuredImg = getImage(thumbnail?.childImageSharp?.gatsbyImageData);

  return (
    <>
      <Layout>
        <PostArticle>
          <p>
            @{tag} / {date}
          </p>
          <Title>{title}</Title>
          <GatsbyImage image={featuredImg} alt={thumbnail_alt} />
          <SubTitle>{subTitle}</SubTitle>
          <Content>
            <MDXProvider>{children}</MDXProvider>
          </Content>
        </PostArticle>
        <Aside>
          <TOCNav>
            <TableOfContents toc={toc.items} />
          </TOCNav>
        </Aside>
      </Layout>
    </>
  );
}

export const Head = ({ data }) => {
  const { title, subTitle, tag, thumbnail } = data.mdx.frontmatter;

  return (
    <SEO
      title={title}
      description={subTitle}
      pathname={`${tag}-${title}`}
      ogImage={thumbnail}
    />
  );
};

const Aside = styled.aside`
  position: relative;
  top: 0;
  right: 0;
  width: 20%;
  max-width: 30rem;
  padding-top: 15rem;
  padding-right: 2rem;
  border-radius: 10px;

  /* 1110px */
  @media screen and (max-width: 69.375em) {
    display: none;
  }
`;

const TOCNav = styled.nav`
  position: sticky;
  width: 100%;
  top: 15rem;
  left: 0;
  padding: 0 1.5rem;
  border-left: ${({ theme }) => `1px solid ${theme.lightText}`};
`;

const PostArticle = styled.article`
  position: relative;
  max-width: 88rem;
  padding: 2%;
`;

const Title = styled.h1`
  margin: 1.5rem 0;
  font-size: 4rem;
  font-weight: 700;
`;

const SubTitle = styled.p`
  margin: 1.5rem 0;
  font-size: 2.6rem;
  font-weight: 600;
`;

const Content = styled.article`
  h1 {
    margin: 13rem 0 2rem;
    border-radius: 1rem;
    padding: 10rem 1rem 0.5rem;
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.25;
  }

  h2 {
    margin: 2rem 0;
    padding-top: 10rem;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.25;
  }

  h3 {
    margin-bottom: 2rem;
    padding-top: 10rem;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.25;
  }

  p {
    margin: 3.2rem 0 4.8rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.7;
    word-wrap: break-word;
    letter-spacing: 0.03rem;
    vertical-align: middle;
  }

  a {
    position: relative;
    display: inline-block;
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

  p:has(> a:first-child + a) {
    display: flex;
    flex-direction: column;

    a:not(:has(img)) {
      width: fit-content;
    }
  }

  ol,
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 0 0 4rem;
    margin: 1.5rem 0;
    font-size: 1.8rem;
  }

  li > ul {
    list-style: circle;
  }

  blockquote {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    padding: 2.4rem;
    margin: 3.2rem 0 4.8rem;
    border-left: ${({ theme }) => `5px solid ${theme.reverseBackground}`};
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.blockquoteBackground};

    p {
      margin: 0;
      line-height: 1.25;
    }
  }

  code {
    padding: 0.1rem 1rem;
    font-size: 1.8rem;
    background: ${({ theme }) => theme.codeBackground};
    border-radius: 8px;
    color: ${({ theme }) => theme.codeColor};
  }

  p:has(+ pre),
  p:has(+ ol),
  p:has(+ ul),
  p:has(+ del) {
    margin: 3.2rem 0;
  }

  pre {
    padding: 2rem;
    background-color: ${({ theme }) => theme.preBackground};
    border-radius: 1rem;
  }

  pre > code {
    white-space: pre-wrap;
    word-break: break-all;
    font-size: 1.6rem;
    background: none;
    color: ${({ theme }) => theme.text};
    padding: 0;
  }

  span:first-child:has(img) {
    a {
      color: transparent;
    }

    img {
      text-align: start;
      border-radius: 5px;
      display: inline-block;
    }
  }

  em {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.lightText};
  }

  del {
    font-size: 1.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.lightText};
  }

  strong {
    color: ${({ theme }) => theme.strongText};
    font-weight: 700;
  }
`;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      tableOfContents
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
