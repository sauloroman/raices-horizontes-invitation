import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { useTicket } from '@/modules/ticket/hooks/useTicket'
import { useEffect } from 'react'

export const RouterApp: React.FC = () => {
    const { ticket, onCheckInitialData } = useTicket()

    useEffect(() => {
        onCheckInitialData()
    }, [onCheckInitialData])

    return (
        <BrowserRouter>
            {ticket ? <PrivateRoutes /> : <PublicRoutes />}
        </BrowserRouter>
    )
}
