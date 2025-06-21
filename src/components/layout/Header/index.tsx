import {type FC, useState} from "react";
import LogoIcon from "../../../assets/icons/logo.svg?react"
import SearchIcon from "../../../assets/icons/search.svg?react"
import EyeIcon from "../../../assets/icons/eyes.svg?react"
import ArrowIcon from "../../../assets/icons/arrow.svg?react"
import Button from "../../shared/Button";
import BurgerMenuIcon from "../../../assets/icons/burger-menu.svg?react"
import HeaderMobile from "./Mobile";

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <header className="header">
            <div className="header--wrapper">
                <button className="header--func-btn header--mobile">
                    <EyeIcon/>
                </button>
                <div className="header--navigation">
                    <div className="header--logo">
                        <LogoIcon/>
                    </div>
                    <nav>
                        <ul className="header--list">
                            {
                                [
                                    "Об Алатау",
                                    "Инвесторам",
                                    "Для СМИ",
                                    "Галерея",
                                    "Контакты",
                                ].map(item => (
                                    <li key={item} className="header--list--item"><a href="#">{item}</a></li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                <div className="header--func-btns">
                    <button className="header--func-btn">
                        <SearchIcon/>
                    </button>
                    <button className="header--func-btn">
                        <EyeIcon/>
                    </button>
                    <button className="header--func-btn">
                        <span>RU</span>
                        <ArrowIcon className="arrow-icon"/>
                    </button>
                    <Button>Связаться с нами</Button>
                </div>
                <div className="header--func-btns--mobile">
                    <button className="header--func-btn">
                        <span>RU</span>
                        <ArrowIcon className="arrow-icon"/>
                    </button>
                    <button className="header--burger" onClick={() => setIsOpen(!isOpen)}>
                        <BurgerMenuIcon />
                    </button>
                </div>
            </div>
            <HeaderMobile isHeaderOpen={isOpen} />
        </header>
    );
};

export default Header;
