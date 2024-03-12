import * as React from 'react';
import './Home2.scss'

const Home2 = () => {
    return (
       <div className="page__advantages advantages">
            <div className="advantages__container _container">
                <div className="advantages__header header-block">
                    <h2 className="header-block__title">Designing Better Experience</h2>
                    <div className="header-block__sub-title">
                        Problems trying to resolve the conflict between the two major realms
                    </div>
                </div>
                <div className="advantages__body">
                    <div className="advantages__column">
                        <div className="advantages__item">
                            <div className="advantages__icon">
                                <img src="src/assets/advantages/01.svg" alt="Consumer Products">
                                </img>
                            </div>
                            <div className="advantages__value">972 +</div>
                            <div className="advantages__text">Consumer Products</div>
                        </div>
                    </div>
                    <div className="advantages__column">
                        <div className="advantages__item">
                            <div className="advantages__icon">
                                <img src="src/assets/advantages/02.svg" alt="Financial Services">
                                </img>
                            </div>
                            <div className="advantages__value">181 +</div>
                            <div className="advantages__text">Financial Services</div>
                        </div>
                    </div>
                    <div className="advantages__column">
                        <div className="advantages__item">
                            <div className="advantages__icon">
                                <img src="src/assets/advantages/03.svg" alt="Environmental">
                                </img>
                            </div>
                            <div className="advantages__value">98%</div>
                            <div className="advantages__text">Environmental</div>
                        </div>
                    </div>
                    <div className="advantages__column">
                        <div className="advantages__item">
                            <div className="advantages__icon">
                                <img src="src/assets/advantages/04.svg" alt="Business & Finance">
                                </img>
                            </div>
                            <div className="advantages__value">746 +</div>
                            <div className="advantages__text">Business & Finance</div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Home2;