import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './registerPage.scss'
import InputMask from 'react-input-mask';
import { connect } from 'react-redux'
import { registerUser } from '../../redux/auth-reducer';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const RegisterPageContainer = (props) => {
    return (
        <RegisterPage user={props.user} status={props.status} registerUser={props.registerUser} />
    )
}



const RegisterPage = (props) => {
    const [name, setName] = useState('')

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [previousSurname, setPreviousSurname] = useState('')
    const [dataOfBirth, setDataOfBirth] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneSecond, setPhoneSecond] = useState('')

    const [disabled, setDisabled] = useState(true)

    const navigate = useNavigate()


    const userState = props.user;
    useEffect(() => {
        if (!userState === undefined) {
            navigate('/')
        }
    }, [userState, navigate])

    const { register, handleSubmit, formState: { errors } } = useForm();




    const user = {
        login: login,
        password: password,
        lastName: lastName,
        firstName: firstName,
        middleName: middleName,
        previousSurname: previousSurname,
        dataOfBirth: dataOfBirth,
        email: email,
        phone: phone,
        phoneSecond: phoneSecond,
    }


    useEffect(() => {
        if (login !== '' && password !== '' && lastName !== '' && firstName !== '' && middleName !== '' && email !== '' && phone !== '') {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [login, password, firstName, lastName, middleName, email, phone])



    const addUser = (e) => {
        const a = document.querySelector('body')
        a.className = ''
        setName('')
        props.registerUser(user)
        if (props.status === 'Пользователь с таким логином существует') {
            toast('Пользователь с таким логином существует!')
        }
        if (props.status === 'Пользователь с таким email существует') {
            toast('Пользователь с таким email существует!')
        }
        // navigate('/register/stage2')
    }

    const addActive = () => {
        const scrollY = 500
        window.scrollTo(scrollY, 0);
        const a = document.querySelector('body')
        a.className = 'body__active'
        toast('Вы авторизованы!')
        setName('register__popup register__popup--active')
    }

    const close = (e) => {
        const a = document.querySelector('body')
        a.className = ''
        setName('')
    }
    return (
        <div className='register'>
            <div className={name === '' ? 'register__popup' : name}>
                <div className='popup popup--register'>
                    <div onClick={close} className='popup__close'></div>
                    <h2 className='popup__title'>Вы уверены, что хотите  завершить регистрацию?</h2>
                    <p className='popup__desc'>Если вы укажете о себе больше данных, у вас будет возможность арендовать технику со сниженной суммой залога или без залога вообще. </p>
                    <p className='popup__desc'>Если вы все же хотите завершить регистрацию - пожалуйста, дайте согласие на обработку ваших персональных данных.</p>
                    <label className='popup__text'><input type="checkbox" />Даю согласие на обработку персональных данных</label>
                    <Link onClick={addUser} to={'/'} className='popup__exit'>Завершить регистрацию</Link>
                    <Link onClick={close} to={'/register'} className='popup__reg popup__reg--close'>Отмена</Link>
                </div>
            </div>
            <div className='container'>
                <div className='register__breadcrumbs breadcrumbs'>
                    <Link className='breadcrumbs__link' to={'/'}>Главная</Link>
                    <p className='breadcrumbs__link'>Регистрация</p>
                </div>
                <h1 className='register__title'>Регистрация</h1>
                <form>
                    <ul className='register__list'>
                        <li className='register__item'>
                            {errors.login?.type ?
                                <>
                                    <input {...register('login', { required: true, minLength: 4, maxLength: 20 })} onChange={e => setLogin(e.target.value)} value={login} className='register__input register__input--error' />
                                    <label className='register__label'>Логин *</label>
                                </>

                                :
                                <>
                                    <input {...register('login', { required: true, minLength: 4, maxLength: 20 })} onChange={e => setLogin(e.target.value)} value={login} className='register__input' />
                                    <label className='register__label'>Логин *</label>
                                </>
                            }
                            {errors.login?.type === 'required' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле Логин не должно быть пустое</div>}
                            {errors.login?.type === 'maxLength' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле Логин не должно быть больше 20 символов</div>}
                            {errors.login?.type === 'minLength' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле Логин не должно быть меньше 4 символов</div>}

                        </li>
                        <li className='register__item'>
                            {errors.password?.type ?
                                <>
                                    <input {...register('password', { required: true, minLength: 4 })} onChange={e => setPassword(e.target.value)} value={password} className='register__input register__input--error' />
                                    <label className='register__label'>Пароль *</label>
                                </>

                                :
                                <>
                                    <input {...register('password', { required: true, minLength: 4 })} onChange={e => setPassword(e.target.value)} value={password} className='register__input' />
                                    <label className='register__label'>Пароль *</label>
                                </>
                            }
                            {errors.password?.type === 'required' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле Пароль не должно быть пустое</div>}
                            {errors.password?.type === 'minLength' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле Пароль не должно быть меньше 4 символов</div>}
                        </li>
                        <li className='register__item'>
                            {errors.lastName?.type ?
                                <>
                                    <input {...register('lastName', { required: true })} onChange={e => setLastName(e.target.value)} value={lastName} className='register__input register__input--error' />
                                    <label className='register__label'>Фамилия *</label>
                                </>

                                :
                                <>
                                    <input {...register('lastName', { required: true })} onChange={e => setLastName(e.target.value)} value={lastName} className='register__input' />
                                    <label className='register__label'>Фамилия *</label>
                                </>
                            }
                            {errors.lastName?.type === 'required' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле Фамилия не должно быть пустое</div>}
                        </li>
                        <li className='register__item'>
                            {errors.firstName?.type ?
                                <>
                                    <input {...register('firstName', { required: true })} onChange={e => setFirstName(e.target.value)} value={firstName} className='register__input register__input--error' type="text" />
                                    <label className='register__label'>Имя *</label>
                                </>

                                :
                                <>
                                    <input {...register('firstName', { required: true })} onChange={e => setFirstName(e.target.value)} value={firstName} className='register__input' type="text" />
                                    <label className='register__label'>Имя *</label>
                                </>
                            }
                            {errors.firstName?.type === 'required' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле Имя не должно быть пустое</div>}
                        </li>
                        <li className='register__item'>
                            {errors.middleName?.type ?
                                <>
                                    <input {...register('middleName', { required: true })} onChange={e => setMiddleName(e.target.value)} value={middleName} className='register__input register__input--error' type="text" />
                                    <label className='register__label'>Отчество *</label>
                                </>

                                :
                                <>
                                    <input {...register('middleName', { required: true })} onChange={e => setMiddleName(e.target.value)} value={middleName} className='register__input' type="text" />
                                    <label className='register__label'>Отчество *</label>
                                </>
                            }
                            {errors.firstName?.type === 'required' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле Отчество не должно быть пустое</div>}
                        </li>
                        <li className='register__item'>
                            <input onChange={e => setPreviousSurname(e.target.value)} value={previousSurname} className='register__input' type="text" />
                            <label className='register__label'>Предыдущая фамилия (если менялась)</label>
                        </li>
                        <li className='register__item'>
                            <input onChange={e => setDataOfBirth(e.target.value)} value={dataOfBirth} className='register__input' type="date" />
                            <label className='register__label'>Дата рождения</label>
                        </li>
                        <li className='register__item'>
                            {errors.email?.type ?
                                <>
                                    <input {...register('email', { required: true, pattern: /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i })} onChange={e => setEmail(e.target.value)} value={email} className='register__input register__input--error' type="text" />
                                    <label className='register__label'>E-mail *</label>
                                </>

                                :
                                <>
                                    <input {...register('email', { required: true, pattern: /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i })} onChange={e => setEmail(e.target.value)} value={email} className='register__input' type="text" />
                                    <label className='register__label'>E-mail *</label>
                                </>
                            }
                            {errors.email?.type === 'required' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле E-mail не должно быть пустое</div>}
                            {errors.email?.type === 'pattern' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле E-mail не правильной формы</div>}
                        </li>
                        <li className='register__item'>
                            {errors.phone?.type ?
                                <>
                                    <InputMask {...register('phone', { required: true, pattern: /^[\d]{1} \([\d]{2,3}\) [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/ })} onChange={e => setPhone(e.target.value)} value={phone} mask="8 (999) 999-99-99" className='register__input register__input--error' type="text" />
                                    <label className='register__label'>Мобильный *</label>
                                </>

                                :
                                <>
                                    <InputMask {...register('phone', { required: true, pattern: /^[\d]{1} \([\d]{2,3}\) [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/ })} onChange={e => setPhone(e.target.value)} value={phone} mask="8 (999) 999-99-99" className='register__input' type="text" />
                                    <label className='register__label'>Мобильный *</label>
                                </>
                            }
                            {errors.phone?.type === 'required' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле Мобильный не должно быть пустое</div>}
                            {errors.phone?.type === 'pattern' && <div style={{ color: 'red', marginTop: '5px', position: 'relative', top: '-45px' }}>Поле Мобильный не правильной формы</div>}
                        </li>
                        <li className='register__item'>
                            <InputMask onChange={e => setPhoneSecond(e.target.value)} value={phoneSecond} mask="+7(999)999-99-99" className='register__input' type="text" />
                            <label className='register__label'>Доп Телефон</label>
                        </li>
                    </ul>
                    <div className='register__info'>
                        <div className='register__desc'>Для снижения суммы залога или возможности арендовать технику без залога укажите ваши паспортные данные</div>
                        <div className='register__attention'>Внимание</div>
                    </div>
                    <div className='register__btn'>
                        <button onClick={handleSubmit(addUser)} className={disabled ? 'register__link register__link--disabled' : 'register__link'}>Продолжить регистрацию</button>
                        <button onClick={handleSubmit(addActive)} className='register__complete'>Завершить регистрацию</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        status: state.authPage.status,
        user: state.authPage.user
    }
}

export default connect(mapStateToProps, { registerUser })(RegisterPageContainer)