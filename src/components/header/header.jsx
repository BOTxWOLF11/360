import logo from '../../assets/visma-logo.svg'
import logo1 from '../../assets/icon-user.svg'
import { NavLink  } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './style_header.scss'


const Header = () => {
    const location = useLocation()
    if (location.pathname === '/singin' || location.pathname === '/login' || location.pathname === '/d') {
        return null;
    }
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <NavLink to="/" className="navbar__logo">
                    <img src={logo} alt="Company Logo"/>
                </NavLink>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <NavLink to="/" className="navbar__link">
                            Главная
                        </NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/calculator" className="navbar__link">
                            Калькулятор
                        </NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/about" className="navbar__link">
                            О нас
                        </NavLink>
                    </li>
                </ul>
                <NavLink to="/login" className="navbar__button">
                    <img src={logo1} alt="Login Logo" className="navbar__button-logo"/>
                    Вход
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;