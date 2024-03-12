import React, { useState } from "react";
import "./madal.scss";

const Modal1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="modal-button" onClick={() => setIsOpen(true)}>Отправить заявку</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-modal" onClick={closeModal}>
                            &times;
                        </button>
                        <div className="modal-title"><h3>Отправить заявку на расчет</h3></div>
                        <form onSubmit={handleSubmit}>
                            <label className="modal-label" htmlFor="name">ФИО:</label>
                            <input type="text" id="name" required/>
                            <label className="modal-label" htmlFor="phone">Телефон:</label>
                            <input type="tel" id="phone" required/>
                            <label  className="modal-label" htmlFor="email">EMAIL:</label>
                            <input type="email" id="email" required/>
                            <label className="modal-label" htmlFor="message">Сообщение:</label>
                            <input type="massage" id="message" required/>
                            <button className="input-button" type="submit">Отправить</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal1;