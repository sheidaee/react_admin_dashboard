import React from 'react';
import { MTableToolbar } from 'material-table';

import QuickSearch from '@modules/adminTable/components/QuickSearch';

const ToolbarWrapper = ({ state, setState, ...restProps }) => (
  <>
    <MTableToolbar {...restProps} />
    <QuickSearch state={state} setState={setState} />
  </>
);

export default ToolbarWrapper;
