import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import {NavLink} from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const onButtonClick = () => {
        setEmailError('')
        setPasswordError('')

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
            setPasswordError('Пожалуйста введите корректные данные')
            return
        }

        navigate('/')
    }

    return (
        <div className={'mainContainer'}>
            <button className={'backButton'} onClick={() => navigate(-1)}>
                Вернуться
            </button>

            <div className={'titleContainer'}>
                <div>Вход</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={email}
                    placeholder="Введите Email"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Введите пароль"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className='buttonContainer'>
                <button className='inputButton' type="button" onClick={onButtonClick}>
                    Войти
                </button>
                <NavLink to="/singin" className="SinginButton" activeClassName="selected">
                    Зарегестрироваться
                </NavLink>
            </div>
        </div>
    )
}

export default Login