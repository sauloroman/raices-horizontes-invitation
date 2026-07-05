import React from 'react'
import './_guest.scss'
import frame from '@/assets/images/guest-frame.png'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'

export const Guest: React.FC = () => {
    return (
        <section className='guest'>
            <div className="guest__container">
                <ScrollReveal direction="none" scale={0.95} duration={1.8} delay={0.1} blur={10}>
                    <img className='guest__frame' src={frame} alt="frame" />
                </ScrollReveal>

                <ScrollReveal direction="up" duration={1.6} delay={0.4} blur={5}>
                    <div className="guest__content">

                        <div className="guest__header">
                            <SectionHeader
                                subtitle='Para tí'
                                title='Invitación'
                            />
                        </div>

                        <div className="guest__name">
                            <p>Invitado Especial</p>
                            <span>Saulo Román Santillán Nava</span>
                        </div>

                        <p className="guest__message">
                            Eres el graduado mas esperado de esta generacion, este es tu gran día. Vívelo al máximo.
                        </p>

                        <div className='guest__button'>
                            <button>Ver Boletos</button>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
