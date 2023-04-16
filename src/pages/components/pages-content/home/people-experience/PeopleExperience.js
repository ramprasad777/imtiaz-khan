import React, {useState, useEffect} from "react";
import { makeStyles } from '@mui/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Typography } from '@mui/material';
import Heading from "../../../shared/Heading";
import PeopleExperienceCarousel from "./PeopleExperienceCarousel";
const useStyles = makeStyles({
    peopleExperienceWrapper:{
        background: '#000',
        color:'#fff',
    }
})
const PeopleExperience = () =>{
    const classes = useStyles();
    return(
        <div className={classes.peopleExperienceWrapper}>
            <Container maxWidth="lg">
                <Box pt={5} pb={5}>
                    <Heading heading="Experienced" heading2="What People" start="false" textAlign="center" />
                    <Typography variant="p" mt={2} mb={1} component="p" align='center'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    </Typography>
                    <div className="people-carousel">
                        <PeopleExperienceCarousel />
                    </div>
                </Box>
            </Container>
        </div>
    )
}
export default PeopleExperience;