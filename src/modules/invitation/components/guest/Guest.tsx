import React from 'react'
import './_guest.scss'
import frame from '@/assets/images/guest-frame.png'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import { useTicket } from '@/modules/ticket/hooks/useTicket'
import { useNavigation } from '@/common/hooks/useNavigate'

export const Guest: React.FC = () => {
    const { ticket } = useTicket()
    const { navigateTo } = useNavigation()
    const name = ticket?.name || 'Invitado Especial'
    return (
        <section className='guest'>
            <div className="guest__container">
                <img className='guest__frame' src={frame} alt="frame" />

                <div className="guest__content">

                    <div className="guest__header">
                        <SectionHeader
                            subtitle='Para tí'
                            title='Invitación'
                        />
                    </div>

                    <div className="guest__name">
                        <p>Invitado Especial</p>
                        <span>{name}</span>
                    </div>

                    <p className="guest__message">
                        Eres el graduado mas esperado de esta generacion, este es tu gran día. Vívelo al máximo.
                    </p>

                    <div className='guest__button'>
                        <button
                            onClick={() => navigateTo('/ticket')}
                        >
                            Ver mis boletos
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
