import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
const useStyles = makeStyles({
    mainHeading: {
        color: '#FFFFFF',
        textShadow: '0px 3px 6px #00000029',
        fontSize:'36px',
        fontWeight:'800',
        '& .headingBordered':{
            borderBottom:'4px solid #62ADEC',
            borderRadius:'1px',
        },
        '& .blueHeading':{
            color:'#62ADEC',
        },
        '& .subHeading':{
            fontWeight:'300',
            fontSize:'30px',
            marginTop:'10px',
            display:'block'
        }
    },
});

function Heading(props){
    const {heading, heading2, start, colorHeading, textAlign, variant, component} = props
    const classes = useStyles();
    return(
        <Typography className={classes.mainHeading} align={textAlign} start={start} variant={variant} component={component}>
            {
                start === 'true' ? 
                <><span className='headingBordered'>{heading}</span> {heading2}</>
                :
                colorHeading === 'blue' ?
                <span className='blueHeading'>{heading}</span>
                :
                start === 'false' ? 
                <>{heading2} <span className='headingBordered'>{heading}</span></>
                :
                <span className='subHeading'>{heading}</span>
            }
        </Typography>
    )
}
export default Heading