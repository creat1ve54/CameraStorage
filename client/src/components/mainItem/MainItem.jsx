import React from 'react'
import Icons from '../../utils/icons/Icons'

const MainItem = ({ name, text, size }) => {
    return (
        <li className='info__item'>
            <div className='info__img'>
                <Icons
                    name={name}
                    size={size} />
            </div>
            <p className='info__description'>{text}</p>
        </li>
    )
}

export default MainItem