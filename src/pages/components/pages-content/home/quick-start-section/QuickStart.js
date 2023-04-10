import { makeStyles } from '@mui/styles';
import {Container, Box, Grid} from '@mui/material';
import Image from 'next/image'
import Heading from '../../../shared/Heading';
import ListDiscripton from './ListDescription';

const useStyles = makeStyles({
    mainQuickStartWrapper: {
        backgroundColor:'#000',
        color:'#fff',
        '& .contentWrapper':{
            display:'flex',
            alignItems:'center;'
        },
        '& .content':{
            paddingLeft:'50px'
        }
    },
});
function QuickStart(){
    const classes = useStyles();
    return(
        <div className={classes.mainQuickStartWrapper}>
            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} className='contentWrapper'>
                        <Grid item xs={12} sm={4} order={{ xs: 2, sm:1}}>
                            <Image
                                className=""
                                src="/images/home/about/about-me.png"
                                alt="Main Banner"
                                layout="responsive" objectFit="contain"
                                width='100'
                                height='100'
                                sizes='100vw'
                                priority
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} order={{ xs: 1, sm:2}}>
                            <div className='content'>
                                <Heading heading="EXPERT" heading2="from a QUICK START to become an" start="false" />
                                <ListDiscripton />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Heading heading="Trust Me You Are On A Right Place" colorHeading="blue" variant="h2" component="h2" textAlign="center" />
                    <Heading heading="I Help People In All Areas Of Their Career, Life And Businesses. I Am Happy To Assist You..." variant="h3" component="h3" textAlign="center" />
                </Box>
            </Container>
        </div>
    )
}
export default QuickStart;