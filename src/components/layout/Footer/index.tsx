import {type FC} from 'react';
import FooterList from "./List";
import {list1, list2} from "./config.ts";
import Button from "../../shared/Button";
import SocialNetworksList from "../../shared/SocialNetworksList";

const Footer: FC = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer--links">
                    <FooterList list={list1}/>
                    <FooterList list={list2}/>
                </div>
                <div className="footer--contacts">
                    <p className="contact--question">Есть вопросы или предложения?</p>
                    <p>Отправьте почту и мы свяжемся с вами в ближайшее время!</p>
                    <form action="#" className="email-form">
                        <label>
                            <input name="email" type="email" placeholder="Email" />
                        </label>
                        <Button className="submit-btn" type="submit">Отправить</Button>
                    </form>
                    <div className="footer--contacts--socialNetworks">
                        <p>Следите за нами в соцсетях:</p>
                        <SocialNetworksList />
                    </div>
                </div>
            </div>
            <div className="footer--additional-info">
                <p>© Alatau City, 2025</p>
                <p>Дизайн и разработка: KeipTech</p>
            </div>
        </footer>
    );
};

export default Footer;
