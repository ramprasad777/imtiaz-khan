import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from './Layout';
import MainBanner from './components/pages-content/home/MainBanner';
import { makeStyles } from '@mui/styles';
import AboutSection from './components/pages-content/home/about-section/AboutSection';
import QuickStart from './components/pages-content/home/quick-start-section/QuickStart';
import HappyToServe from './components/pages-content/home/happy-to-serve/HappyToServe';
import MyThaughts from './components/pages-content/home/my-thaughts/MyThaughts';
import RecordedThaughts from './components/pages-content/home/my-thaughts/RecordedThaughts';
const useStyles = makeStyles({
    mainWrapper: {
        position:'relative',
        padding:'0',
    },
});

function Home(){
    const classes = useStyles();
    return(
        <Layout>
            <Box className={classes.mainWrapper} component="main" sx={{ p: 0 }}>
                <MainBanner />
                <AboutSection />
                <QuickStart />
                <HappyToServe />
                <MyThaughts />
                <RecordedThaughts />
            </Box>
        </Layout>
    )
}
export default Home;