import {type FC, useRef} from 'react';
import Slider from 'react-slick';
import SliderItem from "./SliderItem";
import ArrowIcon from './../../../../assets/icons/arrow.svg?react';

const BannerSlider: FC = () => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div style={{position: 'relative'}}>
            <Slider ref={sliderRef} {...settings}>
                <SliderItem/>
                <SliderItem/>
                <SliderItem/>
            </Slider>
            <div className="button-group">
                <button className="arrow arrow--prev" onClick={() => sliderRef.current?.slickPrev()}>
                    <ArrowIcon/>
                </button>
                <button className="arrow arrow--next" onClick={() => sliderRef.current?.slickNext()}>
                    <ArrowIcon/>
                </button>
            </div>
        </div>
    )
        ;
};

export default BannerSlider;
