import { makeStyles } from '@mui/styles';
import {Container, Box, Grid, Typography} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Heading from '../../../shared/Heading';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";

const useStyles = makeStyles({
    happyToServeWrapper: {
        backgroundColor:'#000',
        color:'#fff',
    },
});
const servicesData = [
    {
        icon:'/images/home/icons/coaching.svg',
        content:'Coaching and Mentoring'
    },
    {
        icon:'/images/home/icons/business-planning.svg',
        content:'Business Planning, Strategies & Automation'
    },
    {
        icon:'/images/home/icons/technical-product-management.svg',
        content:'Technical Product Management'
    },
    {
        icon:'/images/home/icons/articles.svg',
        content:'Articles, Blog And Book Writing'
    },
    {
        icon:'/images/home/icons/fullstack-development.svg',
        content:'Fullstack Development'
    },
    {
        icon:'/images/home/icons/advance-skill.svg',
        content:'Advance Skill Development'
    },
    {
        icon:'/images/home/icons/digital-courses.svg',
        content:'Digital Courses'
    },
    {
        icon:'/images/home/icons/skill-development.svg',
        content:'Skill Monetization'
    },
    {
        icon:'/images/home/icons/coaching.svg',
        content:'Coaching and Mentoring'
    },
    {
        icon:'/images/home/icons/business-planning.svg',
        content:'Business Planning, Strategies & Automation'
    },
    {
        icon:'/images/home/icons/technical-product-management.svg',
        content:'Technical Product Management'
    },
    {
        icon:'/images/home/icons/articles.svg',
        content:'Articles, Blog And Book Writing'
    },
    {
        icon:'/images/home/icons/fullstack-development.svg',
        content:'Fullstack Development'
    },
    {
        icon:'/images/home/icons/advance-skill.svg',
        content:'Advance Skill Development'
    },
    {
        icon:'/images/home/icons/digital-courses.svg',
        content:'Digital Courses'
    },
    {
        icon:'/images/home/icons/skill-development.svg',
        content:'Skill Monetization'
    }
]
function HappyToServe(){
    const classes = useStyles();
    const router = useRouter();
    return(
        <div className={classes.happyToServeWrapper}>
            <Container maxWidth="lg">
                <Box pt={5} pb={5}>
                    {
                        router.pathname != `/services` ?
                        <>
                            <Heading heading2="I am Happy to" heading="Serve You" textAlign="center" start="false" />
                            <Typography variant="p" mt={2} component="p" align='center'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy
                            </Typography>
                        </>
                        :
                        ''
                    }
                    <Grid container spacing={2} mt={2} className='servicesWrapper'>
                        {
                            router.pathname != `/services` ?
                            <>
                                {
                                    servicesData.slice(0, 8).map((data, i)=>{
                                        return(
                                            <Grid item xs={6} sm={3} mt={2} key={i}>
                                                <div className='servicesBlock'>
                                                    <div>
                                                        <Image
                                                            className=""
                                                            src={data.icon}
                                                            alt="Main Banner"
                                                            width={70}
                                                            height={70}
                                                        />
                                                        <Typography variant="p" mt={2} component="p" align='center'>
                                                            {data.content}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </Grid>
                                        )
                                    })
                                }
                            </>
                            :
                            <>
                                {
                                    servicesData.map((data, i)=>{
                                        return(
                                            <Grid item xs={6} sm={3} mt={2} key={i}>
                                                <div className='servicesBlock'>
                                                    <div>
                                                        <Image
                                                            className=""
                                                            src={data.icon}
                                                            alt="Main Banner"
                                                            width={70}
                                                            height={70}
                                                        />
                                                        <Typography variant="p" mt={2} component="p" align='center'>
                                                            {data.content}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </Grid>
                                        )
                                    })
                                }
                            </>
                        }
                    </Grid>
                    {
                        router.pathname != `/services` ?
                        <Typography variant="p" mt={3} component="p" align='center'>
                            <Link href={`/services`}>
                                View More Services <ChevronRightIcon />
                            </Link>
                        </Typography>
                        :
                        ''
                    }
                </Box>
            </Container>
        </div>
    )
}
export default HappyToServe;