import React from 'react'
import './_graduates.scss'

import badge from '@/assets/images/badge.png'

export const Graduates: React.FC = () => {
    return (
        <section className='graduates'>
            <div className="graduates__container">
                <div className="graduates__badge">
                    <img src={badge} alt="Insignia de los graduados" />
                </div>
            </div>
        </section>
    )
}
