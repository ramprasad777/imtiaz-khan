import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { Typography, Grid, Container, Box } from '@mui/material';
import InnerContactForm from '../contact/InnerContactForm';
import Thaughts from '../home/my-thaughts/Thaughts';

const useStyles = makeStyles({
    mainArticlePage:{
        background: '#061823',
        backgroundSize: 'auto',
        color:'#fff',
        '& .banner-container':{
            background:`url('/images/articles/articles-banner.png') no-repeat right top #000`,
            backgroundSize:'contain',
            minHeight:'272px',
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
        },
        '& .body-content':{
            background:"#000"
        }
    }
})
const ArticlePage = () =>{
    const classes = useStyles();
    return(
        <div className={classes.mainArticlePage}>
            <div className="banner-container">
                <Container>
                    <div className="banner-wrapper">
                        <Typography variant="h1" component="h1" align='center' className="banner-heading">
                            I Write My Thaughts
                        </Typography>
                    </div>
                </Container>
            </div>
            <div className="body-content">
                <Container maxWidth="lg">
                    <Thaughts />
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
export default ArticlePage;