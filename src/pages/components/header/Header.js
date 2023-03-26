import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Container from '@mui/material/Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';

function Header(){
    return(
        <header>
            <Container maxWidth="sm">
                <Logo styles={styles} />
                <HeaderMenu /> 
            </Container>
        </header>
    )
}
export default Header;