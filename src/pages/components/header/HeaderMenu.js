import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar} from '@mui/material';
import Link from 'next/link';
import {makeStyles} from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 240;
const navItems = ['home', 'about', 'services', 'articles', 'videos', 'contact'];
import { useRouter } from "next/router";

const useStyles = makeStyles( (theme) =>({
  menuWrapper:{
    width:'100%',
    '& .menuItem':{
      width:'100%',
      textAlign:'right',
      '& ul':{
        listStyle:'none',
        '& li':{
          display:'inline-block',
          padding:'0 10px',
          textTransform:'capitalize',
          fontSize:'16px',
        },
        '& li.active a':{
          color: '#62ADEC'
        },
        '& a':{
          color:'#30343E',
          textDecoration:'none',
        },
        '& a:hover':{
          color:'#000',
          textDecoration:'underline'
        }
      }
    },
  },
  // [theme.breakpoints.down('md')]: {
  //   '& .menu-icon':{
  //     color:'red'
  //   }
  // },
}));

function HeaderMenu(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} sx={{ textAlign: 'right' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} className={router.pathname == `/${item}` ? "active" : ""} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <Link href={`/${item}`} key={item} sx={{ color: '#fff' }}>
                <ListItemText primary={item} />
              </Link>
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
          <MenuIcon className='menu-icon' />
        </IconButton>
        <Box className='menuItem' sx={{ display: { xs: 'none', sm: 'block'} }}>
          <ul style={{listStyle:'none'}}>
            {navItems.map((item) => (
              <li style={{display:'inline-block'}} className={router.pathname == `/${item}` ? "active" : ""}>
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