import React from 'react'
import './_dress-code.scss'

import frame from '@/assets/images/dress-code-frame.png'
import humans from '@/assets/images/dress-code-humans.png'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'

export const DressCode: React.FC = () => {
    return (
        <section className="dress-code">
            <div className="dress-code__container">
                <img className='dress-code__frame' src={frame} />

                <div className="dress-code__content">
                    <SectionHeader
                        subtitle=''
                        title='Codigo Vestimenta'
                    />

                    <p>Te invitamos a vestir elegante y formal para celebrar juntos</p>
                    <p className='dress-code__men'>Hombres: <span className='dress-code__men__description'>Smoking o Traje</span></p>
                    <p className='dress-code__women'>Mujeres: <span className='dress-code__women__description'>Vestido largo</span></p>

                </div>
            </div>
            <img className='dress-code__humans' src={humans} />
        </section>
    )
}
