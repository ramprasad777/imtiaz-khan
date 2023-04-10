import { makeStyles } from '@mui/styles';
import {Container, Box, Grid, Typography} from '@mui/material';
import Heading from '../../../shared/Heading';
import Image from 'next/image'

const useStyles = makeStyles({
    happyToServeWrapper: {
        backgroundColor:'#000',
        color:'#fff',
        '& .servicesWrapper':{
            '& div':{
                display:'inline-table',
            },
            '& div:nth-child(even) .servicesBlock':{
                background: 'rgb(7,5,5)',
                background: 'linear-gradient(180deg, rgba(7,5,5,1) 0%, rgba(3,77,119,1) 100%)',
            },
            '& div:nth-child(odd) .servicesBlock':{
                border:'1px solid #3BA5E0',
            },
            '& .servicesBlock':{
                textAlign:'center',
                borderRadius:'10px',
                padding:'20px',
                display:'table-cell',
                '& img':{
                    width:'70px',
                    height:'auto',
                    maxHeight:'70px'
                },
                '&:hover':{
                    backgroundColor:'#3BA5E0',
                    color:'#fff',
                    '& img':{
                        filter: 'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)',
                    }
                }
            },
        },
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
    }
]
function HappyToServe(){
    const classes = useStyles();
    return(
        <div className={classes.happyToServeWrapper}>
            <Container maxWidth="lg">
                <Heading heading2="I am Happy to" heading="Serve You" textAlign="center" start="false" />
                <Typography variant="p" mt={2} component="p" align='center'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy
                </Typography>
                <Grid container spacing={2} mt={2} className='servicesWrapper'>
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
                </Grid>
            </Container>
        </div>
    )
}
export default HappyToServe;