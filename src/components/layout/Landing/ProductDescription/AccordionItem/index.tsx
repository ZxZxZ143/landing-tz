import {type FC, type SVGProps} from 'react';
import ArrowIcon from '../../../../../assets/icons/arrow.svg?react';

export type AccordionItemProps = {
    id: number;
    isOpen?: boolean;
    title: string;
    description: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    onClick?: (id: number) => void;
}

const AccordionItem:FC<AccordionItemProps> = ({Svg, isOpen, onClick, id, description, title}) => {
    return (
        <div className="accordion-item" onClick={() => onClick ? onClick(id) : ''}>
            <div className="accordion-item--header">
                <div className="accordion-item--title">
                    {<Svg />}
                    <p>{title}</p>
                </div>
                <ArrowIcon className={isOpen ? 'upwards': ''}/>
            </div>
            <div className={`accordion-item--body ${isOpen ? 'accordion-item--body--open' : ''}`}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AccordionItem;
