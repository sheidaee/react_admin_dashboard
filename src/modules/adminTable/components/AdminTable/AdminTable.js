import React from 'react';
import { makeStyles } from '@material-ui/styles';

import TableContainer from '@modules/adminTable/components/TableContainer';

import { usePaginatedListItems } from '@modules/adminTable/utils/dataProvider/dataProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const AdminTable = () => {
  const classes = useStyles();

  // fetch data - fetch admin list items
  let options = {};
  const {
    listItems,
    total,
    status,
    error,
    refetch,
    isFetching,
  } = usePaginatedListItems({
    options,
  });

  console.log({
    listItems,
    total,
    status,
    error,
    refetch,
    isFetching,
  });

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <TableContainer listItems={listItems} />
      </div>
    </div>
  );
};

export default AdminTable;
