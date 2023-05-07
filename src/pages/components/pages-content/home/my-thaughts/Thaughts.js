import { makeStyles } from '@mui/styles';
import {Container, Box, Grid, Typography} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";
const useStyles = makeStyles({
    thaughtsWrapper:{
        '& .thaughts-block':{
            listStyle:'none',
            margin:'0',
            padding:'0',
            '& li':{
                display:'flex',
                alignItems:'center',
                marginBottom:'20px'
            },
            '& .icon':{
                background: 'rgb(8,26,36)',
                background: 'linear-gradient(180deg, rgba(8,26,36,1) 0%, rgba(5,94,145,1) 100%)',
                borderRadius:'50%',
                padding:'15px',
                display:'flex',
                alignItems:'center',
                '& img':{
                    width:'40px',
                    height:'auto',
                    maxHeight:'50px'
                }
            },
            '& .content':{
                paddingLeft:'20px',
                '& h5':{
                    fontFamily:'"Poppins", sans-serif',
                    fontSize:'20px'
                },
                '& p':{
                    fontSize:'14px',
                }
            }
        }
    }
})
const thaughtsData = [
    {
        icon:'/images/home/icons/thaughts/resume.svg',
        title: 'Career Guidance Consultation',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon:'/images/home/icons/thaughts/resume.svg',
        title: 'Effective Resume Writing',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon:'/images/home/icons/thaughts/resume.svg',
        title: 'Digital Products/Courses',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon:'/images/home/icons/thaughts/resume.svg',
        title: 'How to Become Your Own Boss',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon:'/images/home/icons/thaughts/resume.svg',
        title: 'Career Guidance Consultation',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon:'/images/home/icons/thaughts/resume.svg',
        title: 'Effective Resume Writing',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon:'/images/home/icons/thaughts/resume.svg',
        title: 'Digital Products/Courses',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon:'/images/home/icons/thaughts/resume.svg',
        title: 'How to Become Your Own Boss',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
]
const Thaughts = () =>{
    const classes = useStyles();
    const router = useRouter();
    return(
        <Box className={classes.thaughtsWrapper} sx={{ flexGrow: 1 }} pt={5} pb={5}>
            <ul className='thaughts-block'>
                <>
                    {
                        router.pathname != `/articles` ?
                        <>
                            {
                            thaughtsData.slice(0, 3).map((data, index)=>{
                                return(
                                    <li key={index}>
                                        <div className='icon'>
                                            <Image
                                                className=""
                                                src={data.icon}
                                                alt="icon"
                                                width={70}
                                                height={70}
                                            />
                                        </div>
                                        <div className='content'>
                                            <Typography variant="h5" mt={0} mb={1} component="h5" align='left'>
                                                {data.title}
                                            </Typography>
                                            <Typography variant="p" mt={0} component="p" align='left'>
                                                {data.content}
                                            </Typography>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        </>
                        :
                        <Grid container spacing={2} mt={2} className='servicesWrapper'>
                            {
                                thaughtsData.map((data, index)=>{
                                    return(
                                        <Grid item xs={6} sm={3} mt={2} key={index}>
                                            <div className='servicesBlock'>
                                                <div>
                                                    <Image
                                                        className=""
                                                        src={data.icon}
                                                        alt="icon"
                                                        width={70}
                                                        height={70}
                                                    />
                                                </div>
                                                <div className='content'>
                                                    <Typography variant="p" mt={2} component="p" align='center'>
                                                        {data.title}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    }
                </>
                {
                    router.pathname != `/articles` ?
                    <Grid container spacing={2} className='thaughtsWrapper'>
                        <Grid item sm={2} sx={{display: { xs: "none", sm: "block"}}}>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <div className='content'>
                                <Typography variant="p" mt={3} component="p" align='left'>
                                    <Link href={`/articles`}>
                                        View More Thaughts <ChevronRightIcon />
                                    </Link>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    :
                    ''
                }
            </ul>
        </Box>
    )
}
export default Thaughts