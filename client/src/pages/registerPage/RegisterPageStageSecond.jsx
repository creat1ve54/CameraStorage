import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './registerPage.scss'
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import { updateOne } from '../../redux/auth-reducer';



const RegisterPageStageSecondContainer = (props) => {
    return (
        <RegisterPageStageSecond updateOne={props.updateOne} user={props.user} />
    )
}



const RegisterPageStageSecond = (props) => {
    const [name, setName] = useState('')

    const navigate = useNavigate()

    const [passport, setPassport] = useState('')
    const [dataOfIssue, setDataOfIssue] = useState('')
    const [residenceAddress, setResidenceAddress] = useState('')
    const [residentialAddress, setResidentialAddress] = useState('')
    const [whoIssuedThePassport, setWhoIssuedThePassport] = useState('')

    const userState = props.user;
    useEffect(() => {
        if (userState === undefined) {
            navigate('/')
        }
    }, [userState, navigate])




    const user = {
        passport: passport,
        dataOfIssue: dataOfIssue,
        residenceAddress: residenceAddress,
        residentialAddress: residentialAddress,
        whoIssuedThePassport: whoIssuedThePassport,
    }

    const addActive = (e) => {
        const scrollY = 500
        window.scrollTo(scrollY, 0);
        const a = document.querySelector('body')
        a.className = 'body__active'
        setName('register__popup register__popup--active')
    }
    const close = (e) => {
        const a = document.querySelector('body')
        a.className = ''
        setName('')
    }
    const updateOneUser = (e) => {
        props.updateOne(user)
        navigate('/register/stage2')
    }
    return (
        <div className='register'>
            <div className={name === '' ? 'register__popup' : name}>
                <div className='popup popup--register'>
                    <div onClick={close} className='popup__close'></div>
                    <h2 className='popup__title'>Вы вошли, используя свой профиль социальной сети</h2>
                    <p className='popup__desc'>Мы убедительно просим Вас перед заказом проверить и при необходимости дополнить свои персональные данные в личном кабинете, для оперативной проверки службой безопасности. </p>
                    <p className='popup__desc'>Данные не передаются третьим лицам и подлежат обработке согласно 152-ФЗ “О персональных данных.</p>
                    <button onClick={close} className='popup__exit'>Заполнить данные</button>
                    <Link to={'/my'} className='popup__reg popup__reg--close'>Позже</Link>
                </div>
            </div>
            <div className='container'>
                <div className='register__breadcrumbs breadcrumbs'>
                    <Link className='breadcrumbs__link' to={'/'}>Главная</Link>
                    <Link className='breadcrumbs__link' to={'/register'}>Регистрация</Link>
                    <p className='breadcrumbs__link'>Этап 2</p>
                </div>
                <h1 className='register__title'>Регистрация <span>Этап 2</span></h1>
                <div className='register__text'>Следующая информация необходима нам для решения о необходимости и размере залога по Вашему заказу. Пожалуйста, заполните её для снижения суммы залога. Если Вы хотите взять технику на условиях 100% залога, нажмите <Link to={'/register/stage3'}>Пропустить</Link></div>
                <ul className='register__list'>
                    <li className='register__item'>
                        <InputMask mask="99 99 9999" className='register__input' type="text" value={passport} onChange={e => setPassport(e.target.value)} />
                        <label className='register__label'>Паспорт (Серия, No)</label>
                    </li>
                    <li className='register__item'>
                        <input className='register__input' type="date" value={dataOfIssue} onChange={e => setDataOfIssue(e.target.value)} />
                        <label className='register__label'>Дата рождения</label>
                    </li>
                    <li className='register__item'>
                        <input className='register__input' type="text" value={residenceAddress} onChange={e => setResidenceAddress(e.target.value)} />
                        <label className='register__label'>Адрес прописки</label>
                    </li>
                    <li className='register__item'>
                        <input className='register__input' type="text" value={residentialAddress} onChange={e => setResidentialAddress(e.target.value)} />
                        <label className='register__label'>Адрес проживания, если отличается</label>
                    </li>
                    <li className='register__item register__item--last'>
                        <input className='register__input' type="text" value={whoIssuedThePassport} onChange={e => setWhoIssuedThePassport(e.target.value)} />
                        <label className='register__label'>Кем выдан</label>
                    </li>
                </ul>
                <div className='register__info'>
                    <div className='register__desc'>Для увеличения вероятности положительного решения по залогу заполните данные о месте учебы/работы</div>
                </div>
                <div className='register__btn'>
                    <button onClick={updateOneUser} className='register__link' >Продолжить регистрацию</button>
                    <button onClick={addActive} className='register__complete'>Завершить регистрацию</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // status: state.authPage.status
        user: state.authPage.user
    }
}

export default connect(mapStateToProps, { updateOne })(RegisterPageStageSecondContainer)