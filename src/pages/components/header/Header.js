import React from 'react';
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import {Box, AppBar} from '@mui/material';
import Container from '@mui/material/Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';

function Header(){
    return(
        <AppBar component="nav" className='main-header-wrapper'>
            <Container>
                <Box className='header-inside-wrapper' sx={{ display: 'flex', margin:'0', flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
                    <a href='/'>
                        <Logo styles="" logo={`logo`} />
                    </a>
                    <HeaderMenu /> 
                </Box>
            </Container>
        </AppBar>
    )
}
export default Header;