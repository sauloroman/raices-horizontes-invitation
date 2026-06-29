import React from 'react'
import './_message.scss'
import divider from '@/assets/images/divider-1.png'

export const Message: React.FC = () => {
    return (
        <section className="message">
            <div className="message__container container">
                <div className="message__line"></div>
                <p className='message__main'>Con la bendición de nuestros mentores y familia, damos el siguiente paso hacia un mundo de nuevos horizontes.</p>
                <p className='message__text'>Acompáñanos en una noche de elegancia y celebración para marcar la culminación de nuestro camino académico.</p>
                <img className='message__divider' src={divider} alt="Divider" />
            </div>
        </section>
    )
}
