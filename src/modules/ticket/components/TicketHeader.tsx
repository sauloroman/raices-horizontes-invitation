import React from 'react'

export const TicketHeader: React.FC = () => {
    return (
        <header className="ticket__header">
            <div className="ticket__event-title">
                <span className="ticket__event-subtitle">Enlace Graduación</span>
                <h2 className="ticket__couple-names">
                    Enfermería &mdash; Cecati #173
                </h2>
            </div>

            <div className="ticket__event-details">
                <div className="ticket__detail-item">
                    <i className="bx bx-calendar-event ticket__detail-icon" />
                    <div className="ticket__detail-text">
                        <span className="ticket__detail-label">Fecha</span>
                        <span className="ticket__detail-value">10 de Julio de 2026 &mdash; 08:00 P.M.</span>
                    </div>
                </div>

                <div className="ticket__detail-item">
                    <i className="bx bx-map ticket__detail-icon" />
                    <div className="ticket__detail-text">
                        <span className="ticket__detail-label">Recepción</span>
                        <span className="ticket__detail-value">Salón Terraza Acacia</span>
                        <span className="ticket__detail-subvalue">Av. Guadalupe Gonzalez 1180, 20326 Aguascalientes, Ags.</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
