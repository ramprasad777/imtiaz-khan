import { makeStyles } from '@mui/styles';
import RecordedThaughts from "../home/my-thaughts/RecordedThaughts";
import Image from 'next/image';
import { Typography, Grid, Container } from '@mui/material';

const useStyles = makeStyles({
    mainVideoPage:{
        background: '#061823',
        backgroundSize: 'auto',
        color:'#fff',
        '& .banner-image':{
            width:'40px',
            height:'auto',
            maxHeight:'400px'
        },
        '& .banner-container':{
            background:`url('/images/videos/video-banner.png') no-repeat right top #000`,
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
                fontWeight:'600',
            }
        }
    }
})
const VideosPage = () =>{
    const classes = useStyles();
    return(
        <div className={classes.mainVideoPage}>
            <div className="banner-container">
                <Container>
                    <div className="banner-wrapper">
                        {/* <Image
                            className="banner-image"
                            src="/images/videos/video-banner.png"
                            alt="Main Banner"
                            layout="responsive"
                            width='100'
                            height='100'
                            sizes='auto'
                            priority
                        /> */}
                        <Typography variant="h1" component="h1" align='center' className="banner-heading">
                            I Record My Thoughts
                        </Typography>
                    </div>
                </Container>
            </div>
            <RecordedThaughts />
        </div>
    )
}
export default VideosPage;