import React from 'react'
import { useModal } from '@/common/hooks/useModal'
import { MODAL_NAMES } from '@/store/ui/modal.slice'
import type { Ticket } from '@/common/config/interfaces/ticket.interface'

interface Props {
    ticket: Ticket
}

export const TicketBody: React.FC<Props> = ({ ticket }) => {
    const { actions: { onSetModalContent, openModal } } = useModal()
    const { name, adultsQuantity, kidsQuantity, qrCode, table } = ticket

    const onShowQrImage = (url: string) => {
        onSetModalContent(url);
        openModal('Boleto', MODAL_NAMES.ticket);
    }

    return (
        <div className="ticket__body">
            <div className="ticket__qr-container" onClick={() => onShowQrImage(qrCode)}>
                <div className="ticket__qr-box">
                    <img src={qrCode} alt="Código QR del boleto" className="ticket__qr-image" />
                </div>
            </div>

            <div className="ticket__guest-info">
                <span className="ticket__guest-label">Boleto para:</span>
                <h3 className="ticket__guest-name">{name}</h3>
                <p>Mesa: {table ?? 'Por asignar'}</p>
            </div>

            <div className="ticket__passes-info">
                <div className="ticket__pass-card">
                    <span className="ticket__pass-count">{adultsQuantity}</span>
                    <span className="ticket__pass-label">Adultos</span>
                </div>
                <div className="ticket__pass-card">
                    <span className="ticket__pass-count">{kidsQuantity}</span>
                    <span className="ticket__pass-label">Niños</span>
                </div>
            </div>
        </div>
    )
}
