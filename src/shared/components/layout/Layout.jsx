import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './Footer';
import styled from '@emotion/styled';
import DarkMode from '@components/DarkMode';
import { darkTheme, lightTheme } from '@styles/theme';
import { DarkModeContext } from '@contexts/darkModeContext';
import { ThemeProvider } from '@emotion/react';

/** main layout */
export default function Layout({ children }) {
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
            <Header />
            <Div>
              <Main>{children}</Main>
            </Div>
            <Footer />
          </ThemeProvider>
        )}
      </DarkModeContext.Consumer>
    </DarkModeContext.Provider>
  );
}

const Div = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 144rem;
`;
