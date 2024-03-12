import * as React from 'react';
import './Home1.scss'

const Home1 = () => {
    return (
        <div className="page__services services">
            <div className="services__container _container">
                <div className="services__body">
                    <div className="services__column">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img src="src/assets/services/01.svg" alt="Environmental Consulting"/>
                            </div>
                            <h3 className="item-service__title">Environmental Consulting</h3>
                            <div className="item-service__text">
                                We focus on ergonomics and meeting you where you work.
                            </div>
                        </div>
                    </div>
                    <div className="services__column">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img src="src/assets/services/02.svg" alt="Finance and consultancy"/>
                            </div>
                            <h3 className="item-service__title">Finance and consultancy</h3>
                            <div className="item-service__text">Just type whats on your mind and well get you there.
                            </div>
                        </div>
                    </div>
                    <div className="services__column">
                        <div className="services__item item-service item-service_green">
                            <div className="item-service__icon">
                                <img src="src/assets/services/03.svg" alt="Financial Services Consulting"/>
                            </div>
                            <h3 className="item-service__title">Financial Services Consulting</h3>
                            <div className="item-service__text">the quick fox jumps over the lazy dog</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home1;