import React from 'react'
import { Modal } from '@/common/components/Modal/Modal'
import { useModal } from '@/common/hooks/useModal'

export const TicketModal: React.FC = () => {
    const { attributes: { modalContent } } = useModal()

    return (
        <Modal>
            <div className='ticket__modal'>
                <img src={modalContent} alt="ticket" className='ticket__modal-image' />
            </div>
        </Modal>
    )
}
