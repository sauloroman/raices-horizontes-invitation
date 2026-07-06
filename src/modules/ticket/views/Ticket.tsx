import React from 'react'
import { TicketHeader } from '../components/TicketHeader'
import { TicketBody } from '../components/TicketBody'
import { TicketFooter } from '../components/TicketFooter'
import './_ticket.scss'
import bg from '@/assets/images/bg-graduates.jpeg'
import { useTicket } from '../hooks/useTicket'

export const Ticket: React.FC = () => {

    const { ticket } = useTicket()

    if (!ticket) return null

    return (
        <div className='ticket'>
            <div className="ticket__background" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="ticket__container">
                <div className="ticket__content">
                    <TicketHeader />

                    <div className="ticket__divider">
                        <div className="ticket__dashed-line"></div>
                    </div>

                    <TicketBody ticket={ticket} />

                    <div className="ticket__divider">
                        <div className="ticket__dashed-line"></div>
                    </div>

                    <TicketFooter ticket={ticket} />
                </div>
            </div>
        </div>
    )
}
