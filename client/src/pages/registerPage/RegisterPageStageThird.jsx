import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './registerPage.scss'
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import { updateTwo } from '../../redux/auth-reducer';


const RegisterPageStageThirdContainer = (props) => {
    return (
        <RegisterPageStageThird updateTwo={props.updateTwo} user={props.user} />
    )
}




const RegisterPageStageThird = (props) => {

    const navigate = useNavigate()

    const [placeOfWorOrStudy, setPlaceOfWorOrStudy] = useState('')
    const [officePhone, setOfficePhone] = useState('')
    const [positionOrSpecialty, setPositionOrSpecialty] = useState('')
    const [howDidYouFindOut, setHowDidYouFindOut] = useState('')


    const userState = props.user;
    useEffect(() => {
        if (userState === undefined) {
            navigate('/')
        }
    }, [userState, navigate])

    const user = {
        placeOfWorOrStudy: placeOfWorOrStudy,
        officePhone: officePhone,
        positionOrSpecialty: positionOrSpecialty,
        howDidYouFindOut: howDidYouFindOut,
    }

    const updateTwoUser = (e) => {
        props.updateTwo(user)
        navigate('/my')
    }
    return (
        <div className='register'>
            <div className='container'>
                <div className='register__breadcrumbs breadcrumbs'>
                    <Link className='breadcrumbs__link' to={'/'}>Главная</Link>
                    <Link className='breadcrumbs__link' to={'/register'}>Регистрация</Link>
                    <Link className='breadcrumbs__link' to={'/register/stage2'}>Этап 2</Link>
                    <p className='breadcrumbs__link'>Этап 3</p>
                </div>
                <h1 className='register__title'>Регистрация <span>Этап 3</span></h1>
                <div className='register__text'>Спасибо за введенную информацию! Пожалуйста, ответьте еще на несколько вопросов для увеличения вероятности положительного решения по залогу.</div>
                <ul className='register__list'>
                    <li className='register__item'>
                        <input className='register__input' type="text" value={placeOfWorOrStudy} onChange={e => setPlaceOfWorOrStudy(e.target.value)} />
                        <label className='register__label'>Место работы/учебы</label>
                    </li>
                    <li className='register__item'>
                        <input className='register__input' type="text" value={positionOrSpecialty} onChange={e => setPositionOrSpecialty(e.target.value)} />
                        <label className='register__label'>Должность/специальность</label>
                    </li>
                    <li className='register__item'>
                        <InputMask mask="+7(999)999-99-99" className='register__input' type="text" value={officePhone} onChange={e => setOfficePhone(e.target.value)} />
                        <label className='register__label'>Рабочий телефон</label>
                    </li>
                    <li className='register__item'>
                        <input className='register__input' type="text" value={howDidYouFindOut} onChange={e => setHowDidYouFindOut(e.target.value)} />
                        <label className='register__label'>Откуда вы о нас узнали</label>
                    </li>
                    {/* <li className='register__item register__item--last'>
                        <input className='register__input' type="text"  />
                        <label className='register__label'>Кто может Вас порекомендовать?</label>
                    </li> */}
                </ul>
                <div className='register__btn'>
                    <button onClick={updateTwoUser} className='register__complete register__complete--last'>Завершить регистрацию</button>
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

export default connect(mapStateToProps, { updateTwo })(RegisterPageStageThirdContainer)