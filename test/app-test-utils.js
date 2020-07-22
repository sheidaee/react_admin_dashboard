import React from 'react';
import * as rtl from '@testing-library/react';

const AppProviders = ({ children }) => {
  return <>{children}</>;
};

const render = (ui, options) =>
  rtl.render(ui, { wrapper: AppProviders, ...options });

// re-export everything
export * from '@testing-library/react';
export { render };
