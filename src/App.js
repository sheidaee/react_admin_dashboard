import React from 'react';

import Loading from '@components/Loading';

const AuthenticatedApp = React.lazy(() =>
  import(
    /* webpackChunkName: "AuthenticatedApp" */ '@modules/router/components/Views/AuthenticatedApp'
  )
);

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <AuthenticatedApp />
    </React.Suspense>
  );
};

export default App;
