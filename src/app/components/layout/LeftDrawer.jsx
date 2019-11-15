import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppRouter from '../routers/AppRouters';
import { Link } from 'react-router-dom';
import AppNavBar from './AppNavBar';
import DrawerStyle from './DrawerStyle';

export default function MiniDrawer(props) {

  const classes = DrawerStyle();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppNavBar
      open={open}
      handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>

          <ListItem button key='home'>
            <ListItemIcon><Link to="/"><InboxIcon/></Link> </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          
          <ListItem button key='about'>
            <ListItemIcon><Link to="/about"><MailIcon/></Link> </ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>

        </List>
    
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <AppRouter />
      </main>
    </div>
  );
}
