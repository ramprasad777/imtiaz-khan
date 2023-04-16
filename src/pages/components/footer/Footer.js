import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import {Box, Grid, Typography} from '@mui/material';
import Image from 'next/image'
import Link from 'next/link'
import FollowMe from './FollowMe';
const useStyles = makeStyles({
    mainFooterWrapper: {
        background:`#000`,
        color:'#fff',
        '& .footer-logo':{
            width:'250px',
            height:'auto'
        },
        '& .privacy-policy-wrapper, & a':{
            color:'#B2B2B2',
            fontSize:'12px',
            '& a:hover':{
                color:'#62ADEC',
                textDecoration:'underline'
            }
        }
    },
});
const Footer = () =>{
    const classes = useStyles();
    return(
        <div className={classes.mainFooterWrapper}>
            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1 }} p={2}>
                    <Grid container spacing={2} className='contentWrapper'>
                        <Grid item xs={12} sm={8} order={{ xs: 2, sm:1}}>
                            <FollowMe />
                        </Grid>
                        <Grid item xs={12} sm={4} order={{ xs: 1, sm:2 }} style={{textAlign
                        :'right'}}>
                            <Link href={`/`}>
                                <Image
                                    className="footer-logo"
                                    src="/images/imtiyaz-khan-logo.png"
                                    alt="Imtiyaz Khan"
                                    width={180}
                                    height={37}
                                    priority
                                />
                            </Link>
                        </Grid>
                    </Grid>
                    <Typography variant="p" mt={2} component="p" align='center' className='privacy-policy-wrapper'>
                        <Link href={`/privacy-policy`}>Privacy Policy</Link> | <Link href={`/terms-of-use`}>Terms of Use</Link> Copyright ©2022 - 2023 <Link href={`/`}>imtiyazkhan.com</Link>
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}
export default Footer;