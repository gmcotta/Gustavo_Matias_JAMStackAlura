import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme';
import { ThemeModeProvider } from '../src/context/ThemeModeContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio - Gustavo Matias</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeModeProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeModeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object).isRequired,
};
