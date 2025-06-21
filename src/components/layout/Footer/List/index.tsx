import {type FC} from 'react';

export type FooterListProps = {
    list: string[];
};

const FooterList:FC<FooterListProps> = ({list}) => {
    return (
        <ul className="footer-list">
            {
                list.map((item) => (
                    <li className="footer-list--item"><a href="#">{item}</a></li>
                ))
            }
        </ul>
    );
};

export default FooterList;
