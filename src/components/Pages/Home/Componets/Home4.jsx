import * as React from 'react';
import './Home4.scss'

const Home4 = () => {
    return (
        <div className="subscribe__container _container">
            <div className="subscribe__body">
                <h4 className="subscribe__title">Subscribe For Latest Newsletter</h4>
                <form action="#" className="subscribe__form">
                    <input autoComplete="off" type="email" required name="form[]" placeholder="Your Email"
                           className="subscribe__input"/>
                    <button type="submit" className="subscribe__button">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Home4;