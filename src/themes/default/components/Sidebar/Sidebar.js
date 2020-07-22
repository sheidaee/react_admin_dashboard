import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Typography } from '@material-ui/core';
import PaletteIcon from '@material-ui/icons/Palette';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';

import SidebarNav from '@theme/components/Sidebar/SidebarNav';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2, 0),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  name: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(0, 2),
    textAlign: 'center',
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = (props) => {
  const { open, variant, onClose, className, drawerClassName, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <PaletteIcon />,
    },
    {
      title: 'Order',
      href: '/orders',
      icon: <PeopleIcon />,
    },
    {
      title: 'table',
      href: '/table',
      icon: <LocalBarIcon />,
    },
    {
      title: 'Menu',
      href: '/menu',
      icon: <MenuIcon />,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />,
    },
  ];

  return (
    <nav className={className}>
      <Drawer
        anchor="left"
        classes={{ paper: drawerClassName }}
        onClose={onClose}
        open={open}
        variant={variant}
      >
        <div {...rest} className={classes.root}>
          <Typography variant="h6" className={classes.name}>
            Hi, Good Afternoon
          </Typography>
          <Divider className={classes.divider} color="sidebarDivider" />
          <SidebarNav className={classes.nav} pages={pages} />
        </div>
      </Drawer>
    </nav>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  drawerClassName: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
