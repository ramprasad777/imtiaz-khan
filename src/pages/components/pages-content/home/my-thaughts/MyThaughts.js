import { makeStyles } from '@mui/styles';
import {Container, Box, Grid, Typography} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Heading from '../../../shared/Heading';
import Thaughts from './Thaughts';
const useStyles = makeStyles({
    myThaughtsWrapper:{
        background: 'url(/images/home/dotted-bg.svg) no-repeat left center #000',
        backgroundSize: 'auto',
        color:'#fff',
    }
})
const MyThaughts = () =>{
    const classes = useStyles();
    return(
        <div className={classes.myThaughtsWrapper}>
            <Container maxWidth="lg">
                <Box pt={5} pb={5}>
                    <Grid container spacing={2} className='thaughtsWrapper'>
                        <Grid item sm={2} sx={{display: { xs: "none", sm: "block"}}}>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Heading heading="Thoughts" heading2="I Write My" start="false" />
                            <Typography variant="p" mt={2} component="p" align='left'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </Typography>
                            <Typography variant="p" mt={2} component="p" align='left'>
                                <PlayArrowIcon /><PlayArrowIcon /><PlayArrowIcon /><PlayArrowIcon /><PlayArrowIcon />
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Thaughts />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
export default MyThaughts;