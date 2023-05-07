import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { Typography, Grid, Container, Box } from '@mui/material';
import InnerContactForm from './InnerContactForm';

const useStyles = makeStyles({
    mainContactPage:{
        background: '#061823',
        backgroundSize: 'auto',
        color:'#fff',
        '& .banner-image':{
            width:'40px',
            height:'auto',
            maxHeight:'400px'
        },
        '& .banner-container':{
            background:`url('/images/services/services-banner.png') no-repeat right top #000`,
            backgroundSize:'contain',
            minHeight:'270px',
            position:'relative',
            '& .banner-wrapper':{
                position:'absolute',
                top:'50%',
                transform:'translateY(-50%)'
            },
            '& .banner-heading':{
                fontSize:'48px',
                fontWeight:'600'
            }
        }
    }
})
const ContactPage = () =>{
    const classes = useStyles();
    return(
        <div className={classes.mainContactPage}>
            <div className="banner-container">
                <Container>
                    <div className="banner-wrapper">
                        <Typography variant="h1" component="h1" align='center' className="banner-heading">
                            Contact page
                        </Typography>
                    </div>
                </Container>
            </div>
            <Container maxWidth="lg">
                <Box pt={5} pb={5}>
                    <InnerContactForm />
                </Box>
            </Container>
        </div>
    )
}
export default ContactPage;