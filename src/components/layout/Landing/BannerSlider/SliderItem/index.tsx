import {type FC} from 'react';
import Button from '../../../../shared/Button';

const SliderItem:FC = () => {
    return (
        <div className="slider-item">
            <div className="slider-item--content">
                <h1 className="slider-item--title">Alatau City</h1>
                <p className="slider-item--text">Территория опережающего развития</p>
                <Button className="slider-item--btn">Подробнее</Button>
            </div>
        </div>
    );
};

export default SliderItem;
