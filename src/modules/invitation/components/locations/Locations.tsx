import React from 'react'
import './_locations.scss'
import { getEnvVariables } from '@/common/helpers/get-env-variables'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'

import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'

import icon from '@/assets/images/bola-disco.png'
import { LocationList } from './LocationList'

const {
    VITE_CURCH_NAME,
    VITE_CURCH_HOUR,
    VITE_CURCH_LOCATION,
    VITE_CURCH_URL_MAPS,
    VITE_AUDIENCE_NAME,
    VITE_AUDIENCE_HOUR,
    VITE_AUDIENCE_LOCATION,
    VITE_AUDIENCE_URL_MAPS,
    VITE_RECEPTION_NAME,
    VITE_RECEPTION_HOUR,
    VITE_RECEPTION_LOCATION,
    VITE_RECEPTION_URL_MAPS
} = getEnvVariables()

const items = [
    {
        id: 1,
        concept: 'Ceremonia Religiosa',
        name: VITE_CURCH_NAME,
        hour: VITE_CURCH_HOUR,
        location: VITE_CURCH_LOCATION,
        urlMaps: VITE_CURCH_URL_MAPS,
    },
    {
        id: 2,
        concept: 'Reconocimientos',
        name: VITE_AUDIENCE_NAME,
        hour: VITE_AUDIENCE_HOUR,
        location: VITE_AUDIENCE_LOCATION,
        urlMaps: VITE_AUDIENCE_URL_MAPS,
    },
    {
        id: 3,
        concept: 'Recepción',
        name: VITE_RECEPTION_NAME,
        hour: VITE_RECEPTION_HOUR,
        location: VITE_RECEPTION_LOCATION,
        urlMaps: VITE_RECEPTION_URL_MAPS,
    }
]

export const Locations: React.FC = () => {
    return (
        <section className='locations'>
            <div className='locations__container'>

                <ScrollReveal direction="none" scale={0.8} duration={1.8} delay={0.1} blur={8}>
                    <div className="locations__image">
                        <img src={icon} alt="Bola Disco Plateada" />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" duration={1.6} delay={0.2} blur={5}>
                    <div className="locations__header">
                        <SectionHeader
                            subtitle='Ubicaciones'
                            title="No te pierdas"
                        />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.4} duration={1.6} scale={0.98} blur={8}>
                    <div className="locations__content">
                        <LocationList items={items} />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
