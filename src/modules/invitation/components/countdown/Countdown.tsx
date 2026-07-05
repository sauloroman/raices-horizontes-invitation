import React from 'react'
import { Timer } from '@/common/components/Timer/Timer'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import { getEnvVariables } from '@/common/helpers/get-env-variables'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'

import './_countdown.scss'
import bulbs from '@/assets/images/bulbs-icons.png'

const { VITE_INVITATION_DATE } = getEnvVariables()

export const Countdown: React.FC = () => {
    return (
        <section className='countdown'>
            <ScrollReveal direction="up" duration={1.2}>
                <div className="countdown__container">
                    <SectionHeader subtitle="Save the Date" title="Cuenta Regresiva" />
                    <Timer targetDate={VITE_INVITATION_DATE} />
                    <div className="countdown__image">
                        <img src={bulbs} alt="Golden Holding Light Bulbs" />
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}
