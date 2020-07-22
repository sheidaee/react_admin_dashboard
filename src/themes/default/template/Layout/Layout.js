import React from 'react';
import PropTypes from 'prop-types';

import PanelView from '@theme/template/View';

const Layout = ({ children }) => {
  return <PanelView>{children}</PanelView>;
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
