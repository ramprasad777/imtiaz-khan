import { makeStyles } from '@mui/styles';
import {Typography} from '@mui/material';
import Image from 'next/image'
import Link from 'next/link'

const useStyles = makeStyles({
    followMeWrapper:{
        background:'#000',
        color:'#fff',
        '& .follow-me-icon':{
            listStyle:'none',
            padding:'0',
            '& li':{
                display:'inline-block',
                marginLeft:'20px'
            },
            '& li:first-child':{
                marginLeft:'0'
            }
        }
    }
})
const followMeData = [
    {
        id:1,
        title:'facebook',
        icon:'/images/home/icons/footer/facebook.svg',
        url:'facebook.com'
    },
    {
        id:2,
        title:'twitter',
        icon:'/images/home/icons/footer/twitter.svg',
        url:'twitter.com'
    },
    {
        id:3,
        title:'pinterest',
        icon:'/images/home/icons/footer/pinterest.svg',
        url:'pinterest.com'
    },
    {
        id:4,
        title:'linkedin',
        icon:'/images/home/icons/footer/linkedin.svg',
        url:'linkedin.com'
    },
    {
        id:5,
        title:'instagram',
        icon:'/images/home/icons/footer/instagram.svg',
        url:'instagram.com'
    },
    {
        id:6,
        title:'rss',
        icon:'/images/home/icons/footer/rss.svg',
        url:'rss.com'
    }
]
const FollowMe =() =>{
    const classes = useStyles();
    return(
        <div className={classes.followMeWrapper}>
            <Typography variant="p" mt={2} component="p" align='left'>
                Follow Me
            </Typography>
            <ul className='follow-me-icon'>
                {
                    followMeData.map((item)=>{
                        return(
                            <li>
                                <Link href={item.url} title={item.title}>
                                    <Image
                                        className=""
                                        src={item.icon}
                                        alt={item.title}
                                        width={40}
                                        height={40}
                                        priority
                                    />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default FollowMe;