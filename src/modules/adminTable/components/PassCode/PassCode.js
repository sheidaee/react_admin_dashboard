import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MinimizeIcon from '@material-ui/icons/Minimize';

const useStyles = makeStyles((theme) => ({
  root: {},
  passCode: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: theme.spacing(0, 4),
    marginTop: '10px',
  },
  passCodeItem: {
    padding: theme.spacing(2),
    width: '50px',
    textAlign: 'center',
    border: '1px solid #c8c8c8',
    borderRadius: '6px',
  },
  passCodeFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(2),
  },
}));

const PassCode = ({ passCode: { TableOtp } }) => {
  const [a, b, c, d] = `${TableOtp}`?.split('');

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.passCode}>
        <div className={classes.passCodeItem}>{a}</div>
        <MinimizeIcon fontSize="small" />
        <div className={classes.passCodeItem}>{b}</div>
        <MinimizeIcon fontSize="small" />
        <div className={classes.passCodeItem}>{c}</div>
        <MinimizeIcon fontSize="small" />
        <div className={classes.passCodeItem}>{d}</div>
      </div>
    </div>
  );
};

PassCode.propTypes = {
  passCode: PropTypes.object,
};

export default PassCode;
