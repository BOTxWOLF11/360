import * as React from 'react';
import "./Singin.scss"
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

const Singin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordConfirmError, setPasswordConfirmError] = useState('')

    const navigate = useNavigate()

    const onButtonClick = () => {
        setEmailError('')
        setPasswordError('')
        setPasswordConfirmError('')

        if ('' === email) {
            setEmailError('Введите Email')
            return
        }

        if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Пожалуйста введите корректные данные')
            return
        }

        if ('' === password) {
            setPasswordError('Введите пароль')
            return
        }

        if (password.length < 7) {
            setPasswordError('Пожалуйста введите пароль длиной не менее 7 символов')
            return
        }

        if (password !== passwordConfirm) {
            setPasswordConfirmError('Пароли не совпадают')
            return
        }

        console.log('Navigating to /login with email:', email)
    }


    return (
        <div className={'mainContainers'}>
            <button className={'backButton'} onClick={() => navigate(-1)}>
                Вернуться
            </button>
            <div className={'titleContainer'}>
                <div>Регистрация</div>
            </div>
            <br/>
            <div className={'inputContainer'}>
                <input
                    value={email}
                    placeholder="Введите Email"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br/>
            <div className={'inputContainer'}>
                <input
                    value={password}
                    type="password"
                    placeholder="Введите пароль"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br/>
            <div className={'inputContainer'}>
                <input
                    value={passwordConfirm}
                    type="password"
                    placeholder="Повторите пароль"
                    onChange={(ev) => setPasswordConfirm(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordConfirmError}</label>
            </div>
            <br/>
            <div className='buttonContainer'>
                <button className='inputButtons' type="button" onClick={onButtonClick}>
                    Зарегистрироваться
                </button>
            </div>
            <div className='alreadyHaveAccount'>
                <NavLink to={'/login'}>
                    <div>
                        У вас уже есть аккаунт?
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Singin;