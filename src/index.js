import 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalErrorBoundary } from '@modules/errorHandler/components/ErrorBoundary';
import AppProviders from './AppProviders';
import App from './App';

const app = (
  <GlobalErrorBoundary>
    <AppProviders>
      <App />
    </AppProviders>
  </GlobalErrorBoundary>
);
const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(app, wrapper) : false;
