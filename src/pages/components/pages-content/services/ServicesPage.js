import { makeStyles } from '@mui/styles';
import HappyToServe from "../home/happy-to-serve/HappyToServe";
import Image from 'next/image';
import { Typography, Container, Box } from '@mui/material';
import InnerContactForm from '../contact/InnerContactForm';

const useStyles = makeStyles({
    mainServicesPage:{
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
            minHeight:'300px',
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
const ServicesPage = () =>{
    const classes = useStyles();
    return(
        <div className={classes.mainServicesPage}>
            <div className="banner-container">
                <Container>
                    <div className="banner-wrapper">
                        <Typography variant="h1" component="h1" align='center' className="banner-heading">
                            I am Happy to Serve You
                        </Typography>
                    </div>
                </Container>
            </div>
            <HappyToServe />
            <Container maxWidth="lg">
                <Box pt={5} pb={5}>
                    <InnerContactForm />
                </Box>
            </Container>
        </div>
    )
}
export default ServicesPage;