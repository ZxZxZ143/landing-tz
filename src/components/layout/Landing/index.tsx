import {type FC} from 'react';
import BannerSlider from "./BannerSlider";
import ProductDescription from "./ProductDescription";

const Landing:FC = () => {
    return (
        <>
            <BannerSlider />
            <ProductDescription />
        </>
    );
};

export default Landing;
