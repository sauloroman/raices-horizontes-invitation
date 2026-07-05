import React from 'react'
import './_message.scss'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'

import table from '@/assets/images/table-icon.png'

export const Message: React.FC = () => {
    return (
        <section className="message">
            <ScrollReveal direction="up" duration={1.2}>
                <div className="message__container">
                    <p className='message__main'>Con la bendición de nuestros mentores y familia, damos el siguiente paso hacia un mundo de nuevos horizontes.</p>
                    <p className='message__text'>Acompáñanos en una noche de elegancia y celebración para marcar la culminación de nuestro camino académico.</p>
                </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} duration={1.2}>
                <img className='message__table' src={table} alt="table" />
            </ScrollReveal>
        </section>
    )
}
