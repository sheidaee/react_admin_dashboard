import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactQueryConfigProvider } from 'react-query';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '@theme/materialUITheme';

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
  },
  mutations: {
    useErrorBoundary: true,
  },
};

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ReactQueryConfigProvider config={queryConfig}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ReactQueryConfigProvider>
    </Router>
  );
};

AppProviders.propTypes = {
  children: PropTypes.any,
};

export default hot(AppProviders);
