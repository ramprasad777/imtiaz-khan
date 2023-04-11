import { makeStyles } from '@mui/styles';
import {Container, Box, Grid, Typography} from '@mui/material';
const useStyles = makeStyles({
    myThaughtsWrapper:{
        backgroundColor:'#000',
        color:'#fff',
    }
})
const MyThaughts = () =>{
    const classes = useStyles();
    return(
        <div className={classes.myThaughtsWrapper}>
            <Container maxWidth="lg">
                <Grid container spacing={2} pt={5} pb={5} className='thaughtsWrapper'>
                    <Grid item xs={12} sm={4} mdOffset={4}>
                        left panel
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        right panel
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default MyThaughts;