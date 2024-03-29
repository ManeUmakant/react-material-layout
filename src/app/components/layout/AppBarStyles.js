import { makeStyles } from '@material-ui/core/styles';  

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: '1201',
    backgroundColor:'white',
    color:'black'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  }
}));


export default useStyles;