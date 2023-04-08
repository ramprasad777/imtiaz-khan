import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  mainBanner: {
    position:'relative',
    padding:'0',
    '& img':{
      width:'100%',
      height: 'auto',
    }
  },
});

function MainBanner(){
  const classes = useStyles();
  return(
    <Box className={classes.mainBanner} component="main" sx={{ p: 0 }}>
      <Image
        className=""
        src="/images/home/main-banner.png"
        alt="Main Banner"
        layout="responsive" objectFit="contain"
        width='100'
        height='100'
        sizes='100vw'
        priority
      />
    </Box>
  )
}
export default MainBanner;