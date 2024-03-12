import * as  React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './style_footer.scss'
import icontg from '../../assets/icon-telegram.svg'
import iconwat from '../../assets/icon-whatsapp.svg'
import iconvk from '../../assets/icon-vk.svg'
import Modal1 from "./Component/modal.jsx";

const Footer = () => {
    React.useState()
    const handleEmailClick = () => {
        window.location.href = 'mailto:example@mail.ru';
    };
    const location = useLocation()
    if (location.pathname === '/login') {
        return null
    }
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column footer__column--first">
                    <h3 className="footer__title">Наши контакты</h3>
                    <a
                        href="#"
                        className="footer__email"
                        onClick={handleEmailClick}
                    >
                        example@mail.ru
                    </a>
                    <p className="footer__contact-center">
                        Контактный центр: <a href="tel:+74958566544">+7 495 856-65-44</a>
                    </p>
                    <p className="footer__address">
                        г. Москва, ул. Вавилова д. 32
                    </p>
                </div>
                <div className="footer__column footer__column--second">
                    <h3 className="footer__title">Навигация</h3>
                    <NavLink to="/" className="footer__link">
                        Главная
                    </NavLink>
                    <NavLink to="/calculator" className="footer__link">
                        Калькулятор
                    </NavLink>
                    <NavLink to="/about" className="footer__link">
                        О нас
                    </NavLink>
                </div>
                <div className="footer__column footer__column--third">
                    <h3 className="footer__title">Ресурсы</h3>
                    <NavLink to="/" className="footer__link">
                        <span className="footer__icon">
                            <img src={icontg} alt="TG_logo"/>
                        </span> Telegram
                    </NavLink>
                    <NavLink to="/" className="footer__link">
                        <span className="footer__icon">
                            <img src={iconvk} alt="VK_logo"/>
                        </span> Vkontakte
                    </NavLink>
                    <NavLink to="/" className="footer__link">
                        <span className="footer__icon">
                            <img src={iconwat} alt="Whatsapp_logo"/>
                        </span> Whatsapp
                    </NavLink>
                </div>
                <div className="footer__column footer__column--fourth">
                    <h3 className="footer__title">Контакты</h3>
                    <p className="footer__text">
                        Остались вопросы? Оставьте заявку, мы вам перезвоним
                    </p>
                    <Modal1/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;