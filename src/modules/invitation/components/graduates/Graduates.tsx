import React from 'react'
import './_graduates.scss'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'

import badge from '@/assets/images/badge.png'
import { List, GraduationCapIcon } from '@phosphor-icons/react'
import bulbs from '@/assets/images/tendido.png'

export const Graduates: React.FC = () => {
    return (
        <section className='graduates'>
            <div className="graduates__badge">
                <img src={badge} alt="Insignia de los graduados" />
            </div>

            <div className="graduates__main">
                <ScrollReveal direction="up" duration={1.6} delay={0.4} blur={8} scale={0.97}>
                    <div className='graduates__container'>
                        <div className="graduates__header">
                            <div className='graduates__icon'>
                                <GraduationCapIcon />
                            </div>
                        </div>

                        <div className="graduates__content">
                            <span className='graduates__subtitle'>Felicidades</span>
                            <h2 className="graduates__title">Un Logro Más</h2>
                            <div className="graduates__line"></div>
                            <p className="graduates__text">El camino hacia la excelencia es largo y lleno de desafíos,pero hoy hemos alcanzado uno de nuestros más grandes sueños.</p>

                            <div className='graduates__button'>
                                <button>
                                    <List size={24} weight="thin" />
                                    Ver Graduados
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
                <div className="graduates__image">
                    <img src={bulbs} alt="Golden Holding Light Bulbs" />
                </div>
            </div>
        </section >
    )
}
