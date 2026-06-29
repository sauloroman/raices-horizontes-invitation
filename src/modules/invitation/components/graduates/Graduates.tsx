import React from 'react'
import './_graduates.scss'
import icon from '@/assets/images/icon-graduates.png'

export const Graduates: React.FC = () => {
    return (
        <section className='graduates'>
            <div className="graduates__overlay"></div>

            <div className="graduates__card graduates__card--1">
                <div className="graduates__card-content">
                    <div className="graduates__card-icon">
                        <img src={icon} alt="Icono de ramo de flores" />
                    </div>
                    <div className="graduates__card-date">
                        <span className="graduates__card-number">10</span>
                        <span className="graduates__card-name">Julio</span>
                        <span className="graduates__card-year">2026</span>
                    </div>
                    <div className="graduates__card-title">
                        <p>Nuestros</p>
                        <p>Graduados</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
