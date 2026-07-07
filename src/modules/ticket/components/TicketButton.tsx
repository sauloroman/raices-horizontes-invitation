import React from 'react'
import { StoolIcon } from '@phosphor-icons/react'
import { useModal } from '@/common/hooks/useModal'
import { MODAL_NAMES } from '@/store/ui/modal.slice'

export const TicketButton: React.FC = () => {
    const { actions: { openModal } } = useModal()
    return (
        <div className="ticket__button">
            <button onClick={() => openModal('Mesas', MODAL_NAMES.tables)}>
                <StoolIcon />
                Ver Mesas
            </button>
        </div>
    )
}
