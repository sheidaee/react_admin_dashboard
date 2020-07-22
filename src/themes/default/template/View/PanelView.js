import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';

import AppBar from '@theme/components/AppBar';
import Sidebar from '@theme/components/Sidebar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100%',
    },
  };
});

const PanelView = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} />
      <Sidebar
        onClose={() => {}}
        open={true}
        variant="persistent"
        className={classes.drawer}
        drawerClassName={classes.drawerPaper}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default PanelView;
