import React from 'react'
import { Modal } from '@/common/components/Modal/Modal'
import mesas from '@/assets/images/mesas.jpeg'

export const TicketTablesModal: React.FC = () => {
    return (
        <Modal>
            <div className='ticket__tables-modal'>
                <img src={mesas} alt="mesas" className='ticket__tables-modal-image' />
            </div>
        </Modal>
    )
}
