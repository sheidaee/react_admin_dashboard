import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = ({ children, title, isAlert, setIsAlert, closeButton }) => {
  const handleClose = () => {
    setIsAlert(false);
  };

  return (
    <Dialog
      open={isAlert}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {closeButton && (
          <Button onClick={handleClose} color="primary">
            {closeButton?.text}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  children: PropTypes.any,
  isAlert: PropTypes.any,
  setIsAlert: PropTypes.func,
  title: PropTypes.any,
  closeButton: PropTypes.any,
};

export default AlertDialog;
