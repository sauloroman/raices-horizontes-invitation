import React from 'react'
import './_dress-code.scss'

import icon from '@/assets/images/dress-code-icon.png'

export const DressCode: React.FC = () => {
    return (
        <section className="dress-code" id="dress-code">
            <div className="dress-code__container">
                <header className="dress-code__header">
                    <h3 className='dress-code__title'>Código de Vestimenta</h3>
                </header>
                <div className="dress-code__content">
                    <div className="dress-code__item">
                        <div className="dress-code__item-content">
                            <h3 className="dress-code__item-title">Hombres</h3>
                            <p className="dress-code__item-text">Traje formal</p>
                        </div>
                    </div>
                    <div className="dress-code__item">
                        <div className="dress-code__item-content">
                            <h3 className="dress-code__item-title">Mujeres</h3>
                            <p className="dress-code__item-text">Vestido de gala</p>
                        </div>
                    </div>
                </div>
                <div className='dress-code__icon'>
                    <img src={icon} alt="Icono" />
                </div>
            </div>
        </section>
    )
}
