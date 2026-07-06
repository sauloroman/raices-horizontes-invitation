import React from 'react'
import { openExternalLink } from '@/common/helpers/navigation'
import { MapPin } from '@phosphor-icons/react'

import cupOfWine from '@/assets/images/cup-of-wine.png'
import chair from '@/assets/images/chair.png'
import champage from '@/assets/images/champage.png'

interface Props {
    items: any[]
}

export const LocationList: React.FC<Props> = ({ items }) => {
    return (
        <ul className='locations__list'>
            {items.map((item, index) => (
                <li className="locations__item" key={item.id}>
                    {index === 0 && (
                        <img
                            src={cupOfWine}
                            alt="ceremonia brindis"
                            className='locations__item-image locations__item-image--1'
                        />
                    )}
                    {index === 1 && (
                        <img
                            src={chair}
                            alt="ceremonia brindis"
                            className='locations__item-image locations__item-image--2'
                        />
                    )}
                    {index === 2 && (
                        <img
                            src={champage}
                            alt="ceremonia brindis"
                            className='locations__item-image locations__item-image--3'
                        />
                    )}
                    <span className='locations__item-concept'>{item.concept}</span>
                    <h3 className='locations__item-title'>{item.name}</h3>
                    <div className='locations__item-container'>
                        <p>{item.location}</p>
                        <p className='locations__item-hour'>{item.hour}</p>
                    </div>
                    <div className='locations__item-button'>
                        <button onClick={() => openExternalLink(item.urlMaps)}>
                            Ver Ubicación
                        </button>
                    </div>
                </li>


            ))}
        </ul>
    )
}
