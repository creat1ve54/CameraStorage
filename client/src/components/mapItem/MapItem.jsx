import React from 'react'

const MapItem = ({ title, desc, href }) => {
    return (
        <li className='map__item'>
            <p className='map__title'>{title}</p>
            <div className='map__desc'>{desc}</div>
            <a className='map__link' href={href}>{href}</a>
        </li>
    )
}

export default MapItem