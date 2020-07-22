import React from 'react';
import Switch from '@material-ui/core/Switch';

function useColumns() {
  const columns = [
    {
      field: 'TableStatus',
      title: 'Table status',
      // eslint-disable-next-line react/display-name
      render: (rowData) => (
        <Switch
          checked={Boolean(rowData.TableStatus)}
          onChange={() => {}}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      ),
      sorting: false,
    },
    {
      field: 'DeviceId',
      title: 'Device ID',
    },
    {
      field: 'TableId',
      title: 'Table ID',
      type: 'numeric',
    },
  ];

  return { columns };
}

export { useColumns };
