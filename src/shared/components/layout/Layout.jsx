import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './Footer';
import styled from '@emotion/styled';
import DarkMode from '@components/DarkMode';
import { darkTheme, lightTheme } from '@styles/theme';
import { DarkModeContext } from '@contexts/darkModeContext';
import { Global, ThemeProvider } from '@emotion/react';
import global from '@styles/global';

const isBrowser = typeof window !== 'undefined';

/** main layout */
export default function Layout({ children, isLanding = false }) {
  const getInitialMode = () => {
    if (!isBrowser) return;

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
            <Global styles={global} />
            <DarkMode />
            <Header />
            <Div>
              <Main isLanding={isLanding}>{children}</Main>
            </Div>
            {!isLanding && <Footer />}
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
  display: flex;
  justify-content: ${({ isLanding }) => (isLanding ? 'center' : 'end')};
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;

  /* 1110px */
  @media screen and (max-width: 69.375em) {
    justify-content: center;
  }
`;
