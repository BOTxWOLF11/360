import * as React from 'react';
import "./Home.scss"
import { NavLink } from 'react-router-dom';
import Home1 from "./Componets/Home1.jsx";
import Home2 from "./Componets/Home2.jsx";
import Home3 from "./Componets/Home3.jsx";
import Home4 from "./Componets/Home4.jsx";
const Home = () => {
    return (
        <div className="page">
        <div className="page__main-block main-block">
            <div className="main-block__container _container">
                <div className="main-block__body">
                    <h1 className="main-block__title">Finance and Consultancy Solution</h1>
                    <div className="main-block__text">
                        We know how large objects will act, but things on a small scale.
                    </div>
                    <div className="main-block__buttons">
                        <div className="main-block__buttons">
                            <NavLink to="/calculator" className="main-block__button main-block__button_orange" activeClassName="selected">
                                Get Quote Now
                            </NavLink>
                            <NavLink to="/about" className="main-block__button main-block__button_border" activeClassName="selected">
                                Learn More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img"></div>
        </div>
            <Home1 />
            <Home2 />
            <Home3 />
            <Home4 />
        </div>
    );
};

export default Home;