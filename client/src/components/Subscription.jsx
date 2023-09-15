import React from 'react'
import './subscription.scss'
import Icons from '../utils/icons/Icons'
import mail from '../image/subscription/mail.svg'


const Subscription = () => {
    return (
        <div className='subscription'>
            <div className='container'>
                <div className='subscription__case'>
                    <div className='subscription__sub'>
                        <img src={mail} alt="Mail" />
                        <div className='subscription__text'><span>Подпишитесь</span> на новости и акции</div>
                    </div>
                    <div className='subscription__form'>
                        <input className='subscription__input' placeholder='Введите e-mail' />
                        <button className='subscription__btn'>Подписаться</button>
                    </div>
                    <div className='subscription__phone'>
                        <Icons
                            name='phone'
                            size='20' />
                        <div className='subscription__desc'>Заказать звонок</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription