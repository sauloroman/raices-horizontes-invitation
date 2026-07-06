import React from 'react'
import { Modal } from '@/common/components/Modal/Modal'
import { useTicket } from '@/modules/ticket/hooks/useTicket'

export const GraduatesModal: React.FC = () => {
    const { allTickets } = useTicket()

    return (
        <Modal>
            <div className='graduates__modal'>
                <ul className="graduates__list">
                    {
                        allTickets?.map((ticket) => (
                            <li key={ticket.id} className="graduates__item">
                                <p>{ticket.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Modal>
    )
}
