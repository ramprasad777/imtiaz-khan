import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar} from '@mui/material';
import Link from 'next/link';
import {makeStyles} from '@mui/styles';
const drawerWidth = 240;
const navItems = ['home', 'about', 'Services', 'Articles', 'Videos', 'Contact'];

const useStyles = makeStyles({
  menuWrapper:{
    width:'100%',
    '& .menuItem':{
      width:'100%',
      textAlign:'right',
      '& ul':{
        listStyle:'none',
        '& li':{
          display:'inline-block',
          padding:'0 10px'
        }
      }
    }
  }
})

function HeaderMenu(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} sx={{ textAlign: 'right' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();
  return (
    <>
      <Toolbar className={classes.menuWrapper}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          ==
        </IconButton>
        <Box className='menuItem' sx={{ display: { xs: 'none', sm: 'block'} }}>
          <ul>
            {navItems.map((item) => (
              <li style={{}}>
                <Link href={`/${item}`} key={item} sx={{ color: '#fff' }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Toolbar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

HeaderMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HeaderMenu;