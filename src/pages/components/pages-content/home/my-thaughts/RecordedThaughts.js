import { makeStyles } from '@mui/styles';
import {Container, Box, Grid, Typography} from '@mui/material';
import Heading from '../../../shared/Heading';
import ThaughtsCarousel from './ThaughtsCarousel';
const useStyles = makeStyles({
    recordedThaughtsWrapper:{
        background:'#000',
        color:'#fff'
    }
})
const RecordedThaughts = () =>{
    const classes = useStyles();
    return(
        <div className={classes.recordedThaughtsWrapper}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid xs={12} sm={10} lg={6}>
                    <Box pt={5} pb={5}>
                        <Heading heading="I Record" heading2="My Thoughts" start="true" textAlign="center" />
                        <Typography variant="p" mt={2} component="p" align='center'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12}>
                    <Container>
                        <ThaughtsCarousel />
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}
export default RecordedThaughts;