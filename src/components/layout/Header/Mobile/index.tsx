import {type FC, useState} from 'react';
import SearchIcon from '../../../../assets/icons/search.svg?react';
import ArrowIcon from '../../../../assets/icons/arrow.svg?react';
import SocialNetworksList from "../../../shared/SocialNetworksList";
import Button from "../../../shared/Button";

type MobileProps = {
    isHeaderOpen: boolean;
}

const HeaderMobile: FC<MobileProps> = ({isHeaderOpen}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={`header-mobile ${isHeaderOpen ? 'header-mobile--open' : ''}`}>
            <label>
                <input type="text" placeholder="Поиск"/>
                <SearchIcon/>
            </label>
            <div className="header-mobile--list">
                <p className="list-item" onClick={() => setIsOpen(!isOpen)}>
                    Об Алатау
                    <ArrowIcon/>
                </p>
                <ul className={`expandable-list ${isOpen ? 'expandable-list--expanded' : ''}`}>
                    {
                        [
                            'О городе Алатау',
                            'Районы города',
                            'Цифры и факты',
                            'Инфраструктура',
                            'Логистика',
                        ].map((item) => (
                            <li className="list-item"><a href="#">{item}</a></li>
                        ))
                    }
                </ul>
                <p className="list-item"><a href="#">Инвесторам</a></p>
                <p className="list-item"><a href="#">Для СМИ</a></p>
                <p className="list-item"><a href="#">Галерея</a></p>
                <p className="list-item"><a href="#">Контакты</a></p>
            </div>
            <SocialNetworksList className="header-mobile--social-networks-list"/>
            <Button className="header-mobile--btn">Связаться с нами</Button>
        </div>
    );
};

export default HeaderMobile;
