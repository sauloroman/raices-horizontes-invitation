import React from 'react'
import './_itinerary.scss'
import { getEnvVariables } from '../../../../common/helpers/get-env-variables'
import {
    Church,
    Wine,
    ForkKnife,
    Disc,
    MusicNotes,
    Moon,
    Heart
} from '@phosphor-icons/react'
import { GraduationCapIcon } from '@phosphor-icons/react'
import icon from '@/assets/images/itinerary-icon.png'

export const Itinerary: React.FC = () => {
    const {
        VITE_CURCH_HOUR,
        VITE_AUDIENCE_HOUR,
        VITE_RECEPTION_HOUR
    } = getEnvVariables()

    const items = [
        {
            title: 'Ceremonia Religiosa',
            time: VITE_CURCH_HOUR || '01:00 p.m.',
            icon: <Church className="itinerary__event-icon" />
        },
        {
            title: 'Entrega Papeles',
            time: VITE_AUDIENCE_HOUR || '03:00 p.m.',
            icon: <GraduationCapIcon className="itinerary__event-icon" />
        },
        {
            title: 'Recepción',
            time: VITE_RECEPTION_HOUR || '08:00 p.m.',
            icon: <Wine className="itinerary__event-icon" />
        },
        {
            title: 'Cena',
            time: '09:30 p.m.',
            icon: <ForkKnife className="itinerary__event-icon" />
        },
        {
            title: 'Música DJ',
            time: '11:00 p.m.',
            icon: <Disc className="itinerary__event-icon" />
        },
        {
            title: 'Música Banda',
            time: '12:30 a.m.',
            icon: <MusicNotes className="itinerary__event-icon" />
        },
        {
            title: 'Fin del Evento',
            time: '03:00 a.m.',
            icon: <Moon className="itinerary__event-icon" />
        }
    ]

    return (
        <section className='itinerary'>
            <div className="itinerary__container">
                <header className="itinerary__header">
                    <span className='itinerary__sub'>Nuestra</span>
                    <h2 className='itinerary__title'>Graduación</h2>
                </header>

                <div className="itinerary__timeline">
                    {items.map((item, index) => (
                        <div key={index} className="itinerary__item">
                            <div className="itinerary__title-col">
                                <h4 className="itinerary__item-title">{item.title}</h4>
                            </div>

                            <div className="itinerary__marker-col">
                                <div className="itinerary__marker-heart">
                                    <Heart weight="fill" />
                                </div>
                            </div>

                            <div className="itinerary__info-col">
                                <div className="itinerary__icon-box">
                                    {item.icon}
                                </div>
                                <span className="itinerary__time">{item.time}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="itinerary__box">
                    <img src={icon} alt="Icono de hojas" className='itinerary__icon-img' />
                </div>
            </div>
        </section>
    )
}

