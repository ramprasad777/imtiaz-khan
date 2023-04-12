import { makeStyles } from '@mui/styles';
import {Container, Box, Grid, Typography} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image'
import Link from 'next/link';
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
        icon:'/images/home/icons/thaughts/career-guidance.svg',
        title: 'Career Guidance Consultation',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon:'/images/home/icons/thaughts/resume.svg',
        title: 'Effective Resume Writing',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon:'/images/home/icons/thaughts/digital-products.svg',
        title: 'Digital Products/Courses',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
]
const Thaughts = () =>{
    const classes = useStyles();
    return(
        <Box className={classes.thaughtsWrapper} sx={{ flexGrow: 1 }}>
            <ul className='thaughts-block'>
                {
                    thaughtsData.map((data, index)=>{
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
                <Grid container spacing={2} className='thaughtsWrapper'>
                    <Grid item sm={2} sx={{display: { xs: "none", sm: "block"}}}>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <div className='content'>
                            <Typography variant="p" mt={3} component="p" align='left'>
                                <Link href={`/thaughts`}>
                                    View More Thaughts <ChevronRightIcon />
                                </Link>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </ul>
        </Box>
    )
}
export default Thaughts