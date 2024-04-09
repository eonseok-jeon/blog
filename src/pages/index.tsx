import React, { useState } from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import Layout from '@components/layout/Layout';
import { Global, ThemeProvider } from '@emotion/react';
import global from '@styles/global';
import { darkTheme, lightTheme } from '@styles/theme';
import DarkMode from '@components/DarkMode';
import { DarkModeContext } from '@contexts/darkModeContext';
import Posts from '../views/mainPage/components/Posts';

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const [isDark, setIsDark] = useState(true);

  const handleChangeMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={isDark}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <DarkMode isDark={isDark} onChangeMode={handleChangeMode} />
        <Global styles={global} />
        <Layout>
          <Posts data={data} />
        </Layout>
      </ThemeProvider>
    </DarkModeContext.Provider>
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
        }
        id
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
