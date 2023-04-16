import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import {Box, Grid} from '@mui/material';
import Image from 'next/image'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Heading from '../../../shared/Heading';
import { useRouter } from "next/router";

const useStyles = makeStyles({
    mainAboutWrapper: {
        background:`url('/images/home/about/circle-mask.png') no-repeat right center #000`,
        backgroundSize:'contain',
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
function AboutSection(){
    const classes = useStyles();
    const router = useRouter();
    return(
        <div className={classes.mainAboutWrapper}>
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
                        <Grid item xs={12} sm={6} order={{ xs: 1, sm:2 }}>
                            <div className='content'>
                                <Heading heading="About" heading2="Me" start="true" variant="h2" component="h2" textAlign="left" />
                                <p>
                                    A writer, a thought leader, strategic thinker and a software professional having 16 years of experience in software development. A technology leader and start up lover, having 11 years solid working experience in start ups. Having a good understanding of life, career and universe. How to solve the life and human problems by automating them by simple ways. Understand the people, programming, technologies and how to use them to solve problems. Love to serve people by coaching, mentoring, writing and consulting.
                                </p>
                                {
                                    router.pathname != `/about` ?
                                    <Link href={`/about`}>
                                        Know More <ChevronRightIcon />
                                    </Link>
                                    :
                                    ''
                                }
                            </div>
                            <div>
                                <Image
                                    className=""
                                    src="/images/home/about/triangle-mask.png"
                                    alt="about traingle"
                                    width='135'
                                    height='118'
                                    priority
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
export default AboutSection;