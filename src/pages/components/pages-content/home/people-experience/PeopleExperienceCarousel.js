import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { makeStyles } from '@mui/styles';
import Rating from '@mui/material/Rating';
import Image from 'next/image'

const useStyles = makeStyles({
    experienceCarouselWrapper:{
        background: '#000',
        color:'#fff',
        '& .slider-wrapper':{
            width:'100%',
            alignItems:'center',
            // display:'block',
            '& .slick-slider':{
                width:'100%',
                maxWidth:'80%',
                margin:'auto',
                // '& .slick-slide': {
                //     margin: '0 10px',
                //     border: '15px solid transparent'
                // },
                '& .slick-list':{
                    paddingTop:'50px!important',
                },
            },
            '& .slide-box':{
                background:'#061823',
                textAlign:'center',
                position:'relative',
                padding:'80px 20px 0',
                width:'auto!important',
                borderLeft:'5px solid #000',
                borderCollapse:'collapse',
                '& h6':{
                    fontSize:'16px',
                    fontFamily:'"Poppins", sans-serif',
                },
                '& .designation':{
                    fontSize:'12px'
                },
                '& .author-image':{
                    position:'absolute',
                    top:'-50px',
                    margin:'auto',
                    left:'50%',
                    transform:'translatex(-50%)'
                },
                '& .description':{
                    fontSize:'14px',
                    lineHeight:'18px'
                },
                '& .quote-sign':{
                    transform:'rotate(180deg)',
                    color:'#62ADEC',
                    '& svg':{
                        fontSize:'50px'
                    }
                }
            }
        }
    }
})
const PeopleExperienceCarousel = () =>{
    const [value, setValue] = React.useState(2);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:'10px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    const slidesData = [
        {
            id: 1,
            authorName:'Pijush Verma',
            authorDesignation:'ABC, Co-founder',
            rating:'4.5',
            postDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 2,
            authorName:'Pijush Verma',
            authorDesignation:'ABC, Co-founder',
            rating:'5',
            postDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 3,
            authorName:'Pijush Verma',
            authorDesignation:'ABC, Co-founder',
            rating:'3',
            postDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 4,
            authorName:'Pijush Verma',
            authorDesignation:'ABC, Co-founder',
            rating:'4',
            postDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 5,
            authorName:'Pijush Verma',
            authorDesignation:'ABC, Co-founder',
            rating:'2',
            postDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ];
    const classes = useStyles()
    return(
        <div className={`${classes.experienceCarouselWrapper}`}>
            <Box pt={1} pb={1} alignContent={"center"}>
                <div className="slider-wrapper">
                    <Slider {...settings}>
                        {
                            slidesData.map((item, index)=>{
                                return(
                                    <div className="slide-box" key={index}>
                                        <div className="author-image">
                                            <Image
                                                className=""
                                                src="/images/home/testimonials/author.png"
                                                alt="author"
                                                width={130}
                                                height={130}
                                            />
                                        </div>
                                        <Typography variant="h6" mt={1} mb={1} component="h6" align='center'>
                                            {item.authorName}
                                        </Typography>
                                        <span className="designation">{item.authorDesignation}</span>
                                        <div className="ratings">
                                            <Rating name="read-only" value={item.rating} readOnly />
                                        </div>
                                        <Typography variant="p" mt={1} mb={1} component="p" align='center' className="description">
                                            {item.postDescription}
                                        </Typography>
                                        <div className="quote-sign">
                                            <FormatQuoteIcon />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </Box>
        </div>
    )
}
export default PeopleExperienceCarousel;