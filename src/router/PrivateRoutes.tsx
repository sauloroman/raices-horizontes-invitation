import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Invitation } from '../modules/invitation'

export const PrivateRoutes: React.FC = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Invitation />} />
            </Routes>
        </Suspense>
    )
}
