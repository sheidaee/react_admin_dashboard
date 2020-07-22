import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import AdminTable from '@modules/adminTable/components/AdminTable';

import { ErrorBoundary } from '@modules/errorHandler/components/ErrorBoundary';

const routes = [
  {
    path: '/table',
    component: AdminTable,
    exact: true,
  },
];

/**
 * return a component wrapped in an Error Boundary component.
 */
function ComponentWithErrorBoundary({ Component, componentProps }) {
  return (
    <ErrorBoundary>
      <Component {...componentProps} />
    </ErrorBoundary>
  );
}

const RouteList = ({ routes, Layout }) => (
  <Layout>
    <Switch>
      {routes.map(({ path, component, exact }) => (
        <Route
          key={path}
          path={path}
          component={(props) => (
            <ComponentWithErrorBoundary
              Component={component}
              componentProps={props}
            />
          )}
          exact={exact}
        />
      ))}
    </Switch>
  </Layout>
);

RouteList.propTypes = {
  routes: PropTypes.any,
  Layout: PropTypes.any,
};

export default RouteList;

export { routes };
