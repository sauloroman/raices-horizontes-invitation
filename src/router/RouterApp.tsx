import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'

export const RouterApp: React.FC = () => {
    return (
        <BrowserRouter>
            <PrivateRoutes />
        </BrowserRouter>
    )
}
