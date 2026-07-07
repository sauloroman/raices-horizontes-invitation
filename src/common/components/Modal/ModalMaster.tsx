import React from 'react'

import { useModal } from '@/common/hooks/useModal'

import { MODAL_NAMES } from '@/store/ui/modal.slice'

import { TicketModal } from '@/modules/ticket/components/TicketModal'
import { GraduatesModal } from '@/modules/invitation/components/graduates/GraduatesModal'
import { TicketTablesModal } from '@/modules/ticket/components/TickeTablesModal'

export const ModalMaster: React.FC = () => {
    const { attributes: modal } = useModal()

    return (
        <>
            {modal.isOpen && modal.modalName === MODAL_NAMES.ticket && <TicketModal />}
            {modal.isOpen && modal.modalName === MODAL_NAMES.graduates && <GraduatesModal />}
            {modal.isOpen && modal.modalName === MODAL_NAMES.tables && <TicketTablesModal />}
        </>
    )
}