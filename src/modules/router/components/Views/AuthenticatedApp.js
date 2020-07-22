import React from 'react';

import Layout from '@theme/template/Layout';
import RouteList, { routes } from '@modules/router/components/RouteList';

function LayoutWithNavigation({ children }) {
  return <Layout>{children}</Layout>;
}

const AuthenticatedApp = () => {
  return (
    <main>
      <RouteList routes={routes} Layout={LayoutWithNavigation} />
    </main>
  );
};

export default AuthenticatedApp;
