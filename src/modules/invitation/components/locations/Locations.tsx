import React from 'react'
import './_locations.scss'
import icon from '@/assets/images/locations-icon.png'
import icon2 from '@/assets/images/locations-icon-2.png'
import { getEnvVariables } from '../../../../common/helpers/get-env-variables'
import { openExternalLink } from '../../../../common/helpers/navigation'

const {
    VITE_CURCH_NAME,
    VITE_CURCH_HOUR,
    VITE_CURCH_LOCATION,
    VITE_CURCH_URL_MAPS,
    VITE_AUDIENCE_NAME,
    VITE_AUDIENCE_HOUR,
    VITE_AUDIENCE_LOCATION,
    VITE_AUDIENCE_URL_MAPS,
    VITE_RECEPTION_NAME,
    VITE_RECEPTION_HOUR,
    VITE_RECEPTION_LOCATION,
    VITE_RECEPTION_URL_MAPS
} = getEnvVariables()

export const Locations: React.FC = () => {
    return (
        <section className='locations'>
            <div className='locations__container'>
                <div className="locations__line"></div>
                <header className="locations__header">
                    <div className="locations__header-icon">
                        <img src={icon} alt="Green leafs" />
                    </div>
                    <p className="locations__celebration">
                        <span>Aguascalientes</span>
                        <span className='locations__celebration--dot'></span>
                        <span>Ags</span>
                    </p>
                    <h3 className='locations__title'>ubicaciones</h3>
                </header>

                <ul className='locations__list'>
                    <li className='locations__item'>
                        <div className='locations__item-meta'>
                            <p className='locations__concept'>Ceremonia Religiosa</p>
                            <p className='locations__hour'>{VITE_CURCH_HOUR}</p>
                        </div>
                        <div className='locations__item-info'>
                            <p className='locations__name'>{VITE_CURCH_NAME}</p>
                            <p className='locations__location'>{VITE_CURCH_LOCATION}</p>
                        </div>
                        <div className="locations__item-button">
                            <button onClick={() => openExternalLink(VITE_CURCH_URL_MAPS)}>Ver Ubicación</button>
                        </div>
                    </li>
                    <li className='locations__item locations__item--left'>
                        <div className="locations__item-icon-2">
                            <img src={icon2} alt="Green leafs" />
                        </div>
                        <div className='locations__item-meta'>
                            <p className='locations__concept'>Auditorio</p>
                            <p className='locations__hour'>{VITE_AUDIENCE_HOUR}</p>
                        </div>
                        <div className='locations__item-info'>
                            <p className='locations__name'>{VITE_AUDIENCE_NAME}</p>
                            <p className='locations__location'>{VITE_AUDIENCE_LOCATION}</p>
                        </div>
                        <div className="locations__item-button">
                            <button onClick={() => openExternalLink(VITE_AUDIENCE_URL_MAPS)}>Ver Ubicación</button>
                        </div>
                    </li>
                    <li className='locations__item'>
                        <div className='locations__item-meta'>
                            <p className='locations__concept'>Recepción</p>
                            <p className='locations__hour'>{VITE_RECEPTION_HOUR}</p>
                        </div>
                        <div className='locations__item-info'>
                            <p className='locations__name'>{VITE_RECEPTION_NAME}</p>
                            <p className='locations__location'>{VITE_RECEPTION_LOCATION}</p>
                        </div>
                        <div className="locations__item-button">
                            <button onClick={() => openExternalLink(VITE_RECEPTION_URL_MAPS)}>Ver Ubicación</button>
                        </div>
                    </li>
                </ul>

                <div className="locations__line-bottom"></div>
            </div>
        </section>
    )
}
