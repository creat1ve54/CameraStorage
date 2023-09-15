import React, { useState } from 'react'
import './header.scss'
import Icons from '../utils/icons/Icons'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkIsAuth, loginUser, logout } from '../redux/auth-reducer'

const HeaderContainer = (props) => {
  return (
    <Header loginUser={props.loginUser} logout={props.logout} />
  )
}



const Header = (props) => {
  const [name, setName] = useState('')
  const [menu, setMenu] = useState('')
  const [isActive, setIsActive] = useState(false)



  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  let isAuth = checkIsAuth(localStorage.token);

  const addActive = (e) => {
    const a = document.querySelector('body')
    a.className = 'body__active'
    setName('header__popup header__popup--active')
  }
  const close = (e) => {
    const a = document.querySelector('body')
    a.className = ''
    setName('')
  }

  const popupMenu = (e) => {
    setIsActive(!isActive)
    const active = !isActive;
    setMenu('')
    if (active) {
      setMenu('header__menu header__menu--active')
    }
  }

  const onExit = (e) => {
    props.logout()
    window.localStorage.removeItem('token')
    window.location.reload();
  }


  const authorized = (e) => {
    props.loginUser(login, password)
  }

  return (
    <div id='header' className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <Link to={'/'}>
            <svg width="151" height="26" viewBox="0 0 151 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M137.18 16.598V20H125.798L125.777 17.207L131.027 11.789C131.405 11.411 131.706 11.033 131.93 10.655C132.168 10.263 132.287 9.927 132.287 9.647C132.287 9.311 132.168 9.059 131.93 8.891C131.706 8.709 131.384 8.618 130.964 8.618C130.39 8.618 129.746 8.786 129.032 9.122C128.332 9.444 127.625 9.899 126.911 10.487L125.273 7.337C127.457 5.839 129.571 5.09 131.615 5.09C132.623 5.09 133.519 5.258 134.303 5.594C135.101 5.916 135.724 6.371 136.172 6.959C136.634 7.547 136.865 8.226 136.865 8.996C136.865 9.766 136.613 10.557 136.109 11.369C135.619 12.167 134.912 13.028 133.988 13.952L131.342 16.598H137.18ZM149.996 13.805V16.997H148.211V20H144.221V16.997H137.753V14.12L141.638 5.279H145.754L142.142 13.805H144.221V10.823H148.211V13.805H149.996Z" fill="url(#paint0_linear_812_1321)" />
              <path d="M7.455 7.526C7.091 7.526 6.797 7.624 6.573 7.82C6.363 8.016 6.258 8.282 6.258 8.618V9.164H8.631V11.873H6.258V20H2.058V11.873H0.504V9.164H2.058V8.114C2.058 6.924 2.471 5.979 3.297 5.279C4.123 4.579 5.208 4.229 6.552 4.229C7.406 4.229 8.267 4.369 9.135 4.649L8.673 7.799C8.127 7.617 7.721 7.526 7.455 7.526ZM15.1907 8.429C16.4647 8.429 17.5777 8.674 18.5297 9.164C19.4817 9.64 20.2167 10.319 20.7347 11.201C21.2667 12.083 21.5327 13.112 21.5327 14.288C21.5327 15.45 21.2667 16.479 20.7347 17.375C20.2167 18.257 19.4817 18.943 18.5297 19.433C17.5777 19.909 16.4647 20.147 15.1907 20.147C13.9167 20.147 12.7967 19.909 11.8307 19.433C10.8787 18.943 10.1367 18.257 9.60471 17.375C9.08671 16.479 8.82771 15.45 8.82771 14.288C8.82771 13.112 9.08671 12.083 9.60471 11.201C10.1367 10.319 10.8787 9.64 11.8307 9.164C12.7967 8.674 13.9167 8.429 15.1907 8.429ZM15.1907 11.789C14.5607 11.789 14.0567 12.027 13.6787 12.503C13.3007 12.965 13.1117 13.574 13.1117 14.33C13.1117 15.1 13.3007 15.716 13.6787 16.178C14.0567 16.64 14.5607 16.871 15.1907 16.871C15.8067 16.871 16.3037 16.64 16.6817 16.178C17.0597 15.716 17.2487 15.1 17.2487 14.33C17.2487 13.574 17.0597 12.965 16.6817 12.503C16.3037 12.027 15.8067 11.789 15.1907 11.789ZM31.0159 19.454C30.6099 19.678 30.1129 19.86 29.5249 20C28.9509 20.126 28.3699 20.189 27.7819 20.189C26.5639 20.189 25.5909 19.853 24.8629 19.181C24.1349 18.509 23.7709 17.592 23.7709 16.43V11.873H22.1959V9.164H23.7709V5.993H27.9919V9.164H30.8059V11.873H27.9919V15.779C27.9919 16.143 28.0759 16.416 28.2439 16.598C28.4119 16.78 28.6499 16.871 28.9579 16.871C29.2239 16.871 29.6579 16.759 30.2599 16.535L31.0159 19.454ZM38.0979 8.429C39.3719 8.429 40.4849 8.674 41.4369 9.164C42.3889 9.64 43.1239 10.319 43.6419 11.201C44.1739 12.083 44.4399 13.112 44.4399 14.288C44.4399 15.45 44.1739 16.479 43.6419 17.375C43.1239 18.257 42.3889 18.943 41.4369 19.433C40.4849 19.909 39.3719 20.147 38.0979 20.147C36.8239 20.147 35.7039 19.909 34.7379 19.433C33.7859 18.943 33.0439 18.257 32.5119 17.375C31.9939 16.479 31.7349 15.45 31.7349 14.288C31.7349 13.112 31.9939 12.083 32.5119 11.201C33.0439 10.319 33.7859 9.64 34.7379 9.164C35.7039 8.674 36.8239 8.429 38.0979 8.429ZM38.0979 11.789C37.4679 11.789 36.9639 12.027 36.5859 12.503C36.2079 12.965 36.0189 13.574 36.0189 14.33C36.0189 15.1 36.2079 15.716 36.5859 16.178C36.9639 16.64 37.4679 16.871 38.0979 16.871C38.7139 16.871 39.2109 16.64 39.5889 16.178C39.9669 15.716 40.1559 15.1 40.1559 14.33C40.1559 13.574 39.9669 12.965 39.5889 12.503C39.2109 12.027 38.7139 11.789 38.0979 11.789ZM53.5871 8.429C54.6371 8.429 55.5611 8.674 56.3591 9.164C57.1571 9.654 57.7731 10.347 58.2071 11.243C58.6551 12.139 58.8791 13.175 58.8791 14.351C58.8791 15.513 58.6621 16.535 58.2281 17.417C57.8081 18.285 57.2061 18.957 56.4221 19.433C55.6381 19.909 54.7281 20.147 53.6921 20.147C53.0201 20.147 52.4111 20.021 51.8651 19.769C51.3191 19.517 50.8501 19.153 50.4581 18.677V24.074H46.2161V8.576H50.4581V9.899C50.8361 9.423 51.2911 9.059 51.8231 8.807C52.3551 8.555 52.9431 8.429 53.5871 8.429ZM52.5161 16.787C53.1461 16.787 53.6501 16.556 54.0281 16.094C54.4061 15.618 54.5951 15.002 54.5951 14.246C54.5951 13.49 54.4061 12.881 54.0281 12.419C53.6501 11.943 53.1461 11.705 52.5161 11.705C51.9001 11.705 51.4031 11.943 51.0251 12.419C50.6471 12.881 50.4581 13.49 50.4581 14.246C50.4581 15.002 50.6471 15.618 51.0251 16.094C51.4031 16.556 51.9001 16.787 52.5161 16.787ZM64.8111 10.382C65.2171 9.752 65.7211 9.269 66.3231 8.933C66.9391 8.583 67.6321 8.408 68.4021 8.408V12.23C68.2341 12.202 67.9891 12.188 67.6671 12.188C66.7851 12.188 66.0851 12.398 65.5671 12.818C65.0631 13.238 64.8111 13.812 64.8111 14.54V20H60.5691V8.576H64.8111V10.382ZM75.3811 8.429C76.6551 8.429 77.7681 8.674 78.7201 9.164C79.6721 9.64 80.4071 10.319 80.9251 11.201C81.4571 12.083 81.7231 13.112 81.7231 14.288C81.7231 15.45 81.4571 16.479 80.9251 17.375C80.4071 18.257 79.6721 18.943 78.7201 19.433C77.7681 19.909 76.6551 20.147 75.3811 20.147C74.1071 20.147 72.9871 19.909 72.0211 19.433C71.0691 18.943 70.3271 18.257 69.7951 17.375C69.2771 16.479 69.0181 15.45 69.0181 14.288C69.0181 13.112 69.2771 12.083 69.7951 11.201C70.3271 10.319 71.0691 9.64 72.0211 9.164C72.9871 8.674 74.1071 8.429 75.3811 8.429ZM75.3811 11.789C74.7511 11.789 74.2471 12.027 73.8691 12.503C73.4911 12.965 73.3021 13.574 73.3021 14.33C73.3021 15.1 73.4911 15.716 73.8691 16.178C74.2471 16.64 74.7511 16.871 75.3811 16.871C75.9971 16.871 76.4941 16.64 76.8721 16.178C77.2501 15.716 77.4391 15.1 77.4391 14.33C77.4391 13.574 77.2501 12.965 76.8721 12.503C76.4941 12.027 75.9971 11.789 75.3811 11.789ZM90.6813 20L88.6023 16.031L87.7413 16.934V20H83.4993V4.418H87.7413V11.999L90.8913 8.576H95.6793L91.5003 12.986L95.7003 20H90.6813ZM101.936 8.408C103.546 8.408 104.799 8.779 105.695 9.521C106.605 10.249 107.06 11.271 107.06 12.587V20H102.902V18.74C102.552 19.202 102.09 19.559 101.516 19.811C100.956 20.063 100.305 20.189 99.5633 20.189C98.3593 20.189 97.4143 19.867 96.7283 19.223C96.0423 18.565 95.6993 17.69 95.6993 16.598C95.6993 15.492 96.0703 14.645 96.8123 14.057C97.5683 13.455 98.6673 13.147 100.109 13.133H102.902V13.091C102.902 12.615 102.734 12.244 102.398 11.978C102.062 11.712 101.572 11.579 100.928 11.579C100.466 11.579 99.9273 11.649 99.3113 11.789C98.7093 11.929 98.1003 12.132 97.4843 12.398L96.4343 9.584C98.3663 8.8 100.2 8.408 101.936 8.408ZM100.97 17.417C101.404 17.417 101.796 17.312 102.146 17.102C102.496 16.892 102.748 16.605 102.902 16.241V15.212H100.97C100.116 15.212 99.6893 15.569 99.6893 16.283C99.6893 16.647 99.8013 16.927 100.025 17.123C100.249 17.319 100.564 17.417 100.97 17.417ZM117.128 19.454C116.722 19.678 116.225 19.86 115.637 20C115.063 20.126 114.482 20.189 113.894 20.189C112.676 20.189 111.703 19.853 110.975 19.181C110.247 18.509 109.883 17.592 109.883 16.43V11.873H108.308V9.164H109.883V5.993H114.104V9.164H116.918V11.873H114.104V15.779C114.104 16.143 114.188 16.416 114.356 16.598C114.524 16.78 114.762 16.871 115.07 16.871C115.336 16.871 115.77 16.759 116.372 16.535L117.128 19.454Z" fill="black" />
              <defs>
                <linearGradient id="paint0_linear_812_1321" x1="151" y1="26" x2="125.245" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8EE901" />
                  <stop offset="1" stopColor="#4F9C2C" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>
        <div className='header__link link'>
          <ul className='link__list'>
            <NavLink to={'/catalog'} className={({ isActive }) => isActive ? 'link__item link__item--catalog link__item--active' : 'link__item'}>Каталог</NavLink>
            <NavLink to={'/about'} className={({ isActive }) => isActive ? 'link__item link__item--about link__item--active' : 'link__item'}>О компании</NavLink>
            <NavLink to={'/rules'} className={({ isActive }) => isActive ? 'link__item link__item--rules link__item--active' : 'link__item'}>Правила</NavLink>
            <NavLink to={'/news'} className={({ isActive }) => isActive ? 'link__item link__item--news link__item--active' : 'link__item'}>Новости</NavLink>
            <NavLink to={'/contacts'} className={({ isActive }) => isActive ? 'link__item link__item--contacts link__item--active' : 'link__item'}>Контакты</NavLink>
          </ul>
        </div>
        <div className='header__btn btn'>
          <div className='btn__left'>
            <div className='btn__item'>
              <NavLink to={'/favourites'} className={({ isActive }) => isActive ? 'btn__link btn__link--active' : 'btn__link'}>
                <Icons
                  name='star'
                  size='20' />
              </NavLink>
            </div>
            <div className='btn__item'>
              <NavLink to={'/compare'} className={({ isActive }) => isActive ? 'btn__link btn__link--active' : 'btn__link'}>
                <Icons
                  name='compare'
                  size='20' />
              </NavLink>
            </div>
            <div className='btn__item'>
              <NavLink to={'/basket'} className={({ isActive }) => isActive ? 'btn__link btn__link--active' : 'btn__link'}>
                <Icons
                  name='shopping-cart'
                  size='20' />
              </NavLink>
            </div>
          </div>
          <div className='btn__right'>
            <button className='btn__search btn__search--active'>
              <Icons
                name='search'
                color='#000000'
                size='20' />
            </button>
            {
              isAuth ?
                <button onClick={popupMenu} className={!isActive ? 'btn__user' : 'btn__user btn__user--active'}>
                  <Icons
                    name='user'
                    color='#000000'
                    size='24' />
                </button> :
                <button onClick={addActive} className={`btn__user`}>
                  <Icons
                    name='locked'
                    color='#000000'
                    size='24' />
                </button>
            }
          </div>
        </div>
      </div>
      <div className={name === '' ? 'header__popup' : name}>
        <div className='header__popup popup'>
          <div onClick={close} className='popup__close'></div>
          <h2 className='popup__title'>Войдите в свой аккаунт</h2>
          <input type="text" className='popup__input' placeholder='Логин' value={login} onChange={e => setLogin(e.target.value)} />
          <input type="password" className='popup__input' placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)} />
          <div className='popup__link'>Вспомнить логин или пароль?</div>
          <label className='popup__text'><input type="checkbox" />Запомнить пароль для последующего входа</label>
          <button onClick={authorized} className='popup__login'>Войти</button>
          <Link onClick={close} to={'/register'} className='popup__reg'>Регистрация</Link>
        </div>
      </div>
      <div className={menu === '' ? 'header__menu' : menu}>
        <div className="header__menu menu">
          <Link className="menu__link" to={'/my'}>Профиль</Link>
          <Link className="menu__link" to={'/my'}>Мои заказы</Link>
          <Link className="menu__link" to={'/my'}>Мои бонусы</Link>
          <button onClick={onExit} className="menu__btn">Выйти</button>
        </div>
      </div>
    </div >
  )
}

// const mapStateToProps = (state) => {
//   return {

//   }
// }



export default connect(null, { loginUser, logout })(HeaderContainer)