import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    mainHeading: {
        color: '#FFFFFF',
        textShadow: '0px 3px 6px #00000029',
        fontSize:'36px',
        fontWeight:'800',
        '& span':{
            borderBottom:'4px solid #62ADEC',
            borderRadius:'1px',
        }
    },
});

function Heading(props){
    const {heading, heading2, start} = props
    const classes = useStyles();
    return(
        <h2 className={classes.mainHeading}>
            {
                start === 'true' ? 
                <><span>{heading}</span> {heading2}</>
                :
                <>{heading2} <span>{heading}</span></>
            }
        </h2>
    )
}
export default Heading