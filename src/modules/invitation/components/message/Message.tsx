import React from 'react'
import './_message.scss'

import table from '@/assets/images/table-icon.png'

export const Message: React.FC = () => {
    return (
        <section className="message">
            <div className="message__container">
                <p className='message__main'>Con la bendición de nuestros mentores y familia, damos el siguiente paso hacia un mundo de nuevos horizontes.</p>
                <p className='message__text'>Acompáñanos en una noche de elegancia y celebración para marcar la culminación de nuestro camino académico.</p>
            </div>
            <img className='message__table' src={table} alt="table" />
        </section>
    )
}
