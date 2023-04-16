import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';

const ThaughtsCarousel = () =>{
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });
    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
    };
    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows:false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '0',
        vertical: true,
        responsive: [
            {
              breakpoint: 700,
              settings: {
                vertical: false,
              }
            },
        ]
    };
    const slidesData = [
        {
          id: 1,
          title: '6 Types of Health | Importance of Health in Life and Career',
          label: 'Feb 14, 2023 | 150K Views'
        }, {
          id: 2,
          title: 'excepturi consequatur est',
          label: 'Feb 14, 2023 | 150K Views'
        }, {
          id: 3,
          title: 'eius doloribus blanditiis',
          label: 'Feb 14, 2023 | 150K Views'
        }, {
          id: 4,
          title: 'nihil voluptates delectus',
          label: 'Feb 14, 2023 | 150K Views'
        }, {
          id: 5,
          title: 'nemo dolorem necessitatibus',
          label: 'Feb 14, 2023 | 150K Views'
        }, {
          id: 6,
          title: 'dolorem quibusdam quasi',
          label: 'Feb 14, 2023 | 150K Views'
        },
    ];
    return(
        <div className="App">
            <Box pt={5} pb={5}>
                <div className="slider-wrapper">
                    <Slider
                        {...settingsMain}
                        asNavFor={nav2}
                        ref={slider => (setSlider1(slider))}
                    >

                        {slidesData.map((slide) =>

                            <div className="slick-slide" key={slide.id}>
                                <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
                                <h2 className="slick-slide-title">{slide.title}</h2>
                                <label className="slick-slide-label">{slide.label}</label>
                            </div>
                        )}
                    </Slider>
                    <div className="thumbnail-slider-wrap">
                        <Slider
                            {...settingsThumbs}
                            asNavFor={nav1}
                            ref={slider => (setSlider2(slider))}>
                            {slidesData.map((slide) =>
                            <div className="slick-slide" key={slide.id}>
                                <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
                            </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </Box>
        </div>
    )
}
export default ThaughtsCarousel;