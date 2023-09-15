import React from 'react'
import Icons from '../../utils/icons/Icons'

const EarnItem = ({ name, text, size }) => {
    return (
        <li className='earn__item'>
            <p className='earn__text'>{text}</p>
            <div className='earn__img'>
                <Icons
                    name={name}
                    size={size} />
            </div>
        </li>
    )
}

export default EarnItem