import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout/Layout';
import { Global, ThemeProvider } from '@emotion/react';
import global from '@styles/global';
import { darkTheme, lightTheme } from '@styles/theme';
import DarkMode from '@components/DarkMode';
import { DarkModeContext } from '@contexts/darkModeContext';
import Posts from '../views/mainPage/components/Posts';

const IndexPage = ({ data }) => {
  const getInitialMode = () => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode != null ? savedMode : 'dark';
  };

  const [changeMode, setChangeMode] = useState(getInitialMode());

  const handleChangeMode = () => {
    setChangeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const darkModeValue = {
    isDark: changeMode === 'dark' ? true : false,
    onChangeMode: handleChangeMode,
  };

  useEffect(() => {
    localStorage.setItem('darkMode', changeMode);
  }, [changeMode]);

  return (
    <DarkModeContext.Provider value={darkModeValue}>
      <DarkModeContext.Consumer>
        {({ isDark }) => (
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <DarkMode />
            <Global styles={global} />
            <Layout>
              <Posts data={data} />
            </Layout>
          </ThemeProvider>
        )}
      </DarkModeContext.Consumer>
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
