import {Grid} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckIcon from '@mui/icons-material/Check';
const useStyles = makeStyles({
    listStyleWrapper: {
        color:'#fff',
        '& .listStyle':{
            listStyle:'none',
            fontSize:'14px'
        },
        '& .listItem':{
            display:'flex',
            alignItems: 'start'
        },
        '& .checkIcon':{
            color: '#62ADEC',
            marginRight:'5px',
            '& svg':{
                fontSize:'18px',
                fontWeight:'bolder'
            }
        },
        '& .heading':{
            textAlign:'center',
            fontSize:'30px',
            color:'#62ADEC',
            display:'table',
            margin:'10px auto',
            position:'relative',
            padding:'20px',
            '& span':{
                position:'relative',
                zIndex:'2'
            },
            '&::before':{
                content:' " "',
                background: 'rgba(98, 173, 244, 0.7)',
                filter:'blur(25px)',
                height: '50px',
                width: '100%',
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%, -50%)',
                zIndex:'1'
            }
        }
    },
});
const listData = [
    {
        content:'Worried, How to Automate Your Business?'
    },
    {
        content:'Worried & struggling with Planning, Strategies & Processes in Your Business'
    },
    {
        content:'Want to Become a Good Leader?'
    },
    {
        content:'Ready to Become a Technical Product Manager?'
    },
    {
        content:'Worried, How to Start a Career?'
    },
    {
        content:'Eager to Monetize Your Skills, To Become Your Own Boss?'
    },
    {
        content:'Looking for Content OR Book Writing?'
    },
    {
        content:'Ready to Learn About System Design Concepts?'
    },
    {
        content:'Are You Looking For to Learn Full Product Development?'
    },
    {
        content:'Struggling for Productivity with Your Team?'
    },
    {
        content:'Struggling in Your Career, Having a Good Experience?'
    },
    {
        content:'Confused About Vision, Mission and Goals in Your Career or Business?'
    },
]
function ListDiscripton(){
    const classes = useStyles();
    return(
        <div className={classes.listStyleWrapper}>
            <h3 className='heading'><span>Are You?</span></h3>
            <Grid container spacing={2} className='listStyle'>
                {
                    listData.map((data, key)=>{
                        return(
                            <Grid item xs={4} sm={6} key={key} className='listItem'>
                                <span className='checkIcon'>
                                    <CheckIcon />
                                </span>
                                <span className="description">
                                    {data.content}
                                </span>
                            </Grid>
                        )
                        
                    })
                }
            </Grid>
        </div>
    )
}
export default ListDiscripton;