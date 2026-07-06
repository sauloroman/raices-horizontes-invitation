import React from 'react'
import './_dress-code.scss'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'

import frame from '@/assets/images/dress-code-frame.png'
import humans from '@/assets/images/dress-code-humans.png'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'

export const DressCode: React.FC = () => {
    return (
        <section className="dress-code">
            <ScrollReveal direction="up" duration={1.6} delay={0.2} blur={8} scale={0.97}>
                <div className="dress-code__container">
                    <img className='dress-code__frame' src={frame} />

                    <div className="dress-code__content">
                        <SectionHeader
                            subtitle=''
                            title='Codigo Vestimenta'
                        />

                        <p className='dress-code__message'>Te invitamos a vestir elegante y formal para celebrar juntos</p>
                        <p className='dress-code__men'>Hombres: <span className='dress-code__men__description'>Smoking o Traje</span></p>
                        <p className='dress-code__women'>Mujeres: <span className='dress-code__women__description'>Vestido largo</span></p>

                    </div>
                </div>
            </ScrollReveal>
            <img className='dress-code__humans' src={humans} />
        </section>
    )
}
