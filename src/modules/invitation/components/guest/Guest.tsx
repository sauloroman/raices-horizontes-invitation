import React from 'react'
import './_guest.scss'
import { GraduationCapIcon } from '@phosphor-icons/react'
import icon from '@/assets/images/guest-icon.png'

export const Guest: React.FC = () => {
    return (
        <section className='guest'>
            <div className="guest__container">
                <div className="guest__content">

                    <GraduationCapIcon className='guest__icon' />
                    <div className="guest__title">Esta Invitación es para tí</div>
                    <div className="guest__divider"></div>

                    <span className='guest__honor'>Invitado de honor</span>
                    <p className="guest__name">Saulo Román Santillán Nava</p>

                    <p className="guest__message">Es un honor para nosotros invitarte a ser parte de este momento tan especial en nuestras vidas</p>
                    <div className="guest__button">
                        <button>Ver Boletos</button>
                    </div>

                    <div className="guest__icon-box">
                        <img src={icon} alt="Icono de ramo de flores" />
                    </div>
                </div>
            </div>
        </section>
    )
}
