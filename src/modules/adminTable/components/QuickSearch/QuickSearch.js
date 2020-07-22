import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      position: 'absolute',
      top: 0,
      right: 0,
    },
  },
}));

const QuickSearch = ({ state, setState }) => {
  const classes = useStyles();

  const handleSearch = ({ query, data }) => {
    if (!query) {
      return data;
    }

    const result = data.filter(
      ({ DeviceId, TableId }) => query == DeviceId || query == TableId
    );

    return result;
  };

  const handleChange = (e) => {
    const query = e.target.value;

    const searchResult = handleSearch({ query, data: state.data });

    setState((prevState) => ({
      ...prevState,
      query,
      controlledItems: searchResult,
    }));
  };

  return (
    <div className={classes.root}>
      <TextField
        value={state.query}
        onChange={handleChange}
        placeholder="Search"
        variant="outlined"
        size="small"
        autoFocus
      />
    </div>
  );
};

export default QuickSearch;
