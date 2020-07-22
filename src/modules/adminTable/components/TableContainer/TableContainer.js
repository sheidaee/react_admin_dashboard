import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

import { useColumns } from '@modules/adminTable/utils/hooks/useColumns';
import { usePassCode } from '@modules/adminTable/utils/hooks/usePassCode';
import Alert from '@components/Alert';
import PassCode from '../PassCode/index';
import ToolbarWrapper from '../Toolbar/Toolbar';

const TableContainer = ({ listItems }) => {
  const [isAlert, setIsAlert] = React.useState(false);

  const { columns } = useColumns();

  const { handleViewPassCode, passCode } = usePassCode({ setIsAlert });
  const [state, setState] = useState({
    columns,
    data: [],
    controlledItems: [],
    query: '',
  });

  useEffect(() => {
    setState((prevState) => ({ ...prevState, data: listItems }));
  }, [listItems]);

  return (
    <>
      <Alert
        isAlert={isAlert}
        setIsAlert={setIsAlert}
        title="Auth Code"
        closeButton={{ text: 'CANCEL' }}
      >
        <PassCode passCode={passCode?.current} />
      </Alert>
      <MaterialTable
        title="Table"
        columns={state.columns}
        data={state.controlledItems.length ? state.controlledItems : state.data}
        actions={[
          {
            icon: 'visibility',
            tooltip: 'View Auth Code',
            onClick: handleViewPassCode,
          },
          {
            icon: 'refresh',
            tooltip: 'Refresh',
            onClick: (event, rowData) => {
              // Do refresh operation
            },
          },
          {
            icon: 'print',
            tooltip: 'Print',
            onClick: (event, rowData) => {
              // Do print operation
            },
          },
        ]}
        options={{
          actionsColumnIndex: -1,
          search: false,
        }}
        components={{
          // eslint-disable-next-line react/display-name
          Toolbar: (props) => (
            <ToolbarWrapper {...props} state={state} setState={setState} />
          ),
        }}
      />
    </>
  );
};

TableContainer.propTypes = {
  listItems: PropTypes.array,
};

export default TableContainer;
