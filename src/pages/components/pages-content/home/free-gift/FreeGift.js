import { makeStyles } from '@mui/styles';
import {Container, Box, Grid, Typography} from '@mui/material';
import Heading from '../../../shared/Heading';
import Image from 'next/image'
import GiftForm from './giftForm';
const useStyles = makeStyles({
    freeGiftWrapper:{
        background: '#061823',
        backgroundSize: 'auto',
        color:'#fff',
        '& .banner-image':{
            width:'40px',
            height:'auto',
            maxHeight:'400px'
        }
    }
})

const FreeGift = () =>{
    const classes = useStyles();
    return(
        <div className={classes.freeGiftWrapper}>
            <Container maxWidth="lg">
                <Box pt={5} pb={5}>
                    <Heading heading="FREE" heading2="Get a" heading3="Gift" start="center" textAlign="center" />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5}>
                            <Image
                                className="banner-image"
                                src="/images/home/free-gift.png"
                                alt="Main Banner"
                                layout="responsive"
                                width='100'
                                height='100'
                                sizes='auto'
                                priority
                            />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <GiftForm />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
export default FreeGift;