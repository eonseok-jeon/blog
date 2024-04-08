import React, { useState } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '@components/layout/Layout';
import { Global, ThemeProvider } from '@emotion/react';
import global from '@styles/global';
import { darkTheme, lightTheme } from '@styles/theme';
import DarkMode from '@components/DarkMode';

const IndexPage: React.FC<PageProps> = () => {
  const [isDark, setIsDark] = useState(true);

  const handleChangeMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <DarkMode isDark={isDark} onChangeMode={handleChangeMode} />
      <Global styles={global} />
      <Layout>123</Layout>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
