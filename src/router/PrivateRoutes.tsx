import React, { Suspense, lazy } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useMusicPlay } from '@/common/hooks/useMusicPlay'
import { Menu } from '@/common/components/Menu/Menu'
import { MenuButton } from '@/common/components/Menu/MenuButton'
import { MusicButton } from '@/common/components/Menu/MusicButton'

const Invitation = lazy(() => import('@/modules/invitation').then(m => ({ default: m.Invitation })))
const Envelope = lazy(() => import('@/modules/envelope').then(m => ({ default: m.Envelope })))
const Ticket = lazy(() => import('@/modules/ticket').then(m => ({ default: m.Ticket })))

export const PrivateRoutes: React.FC = () => {
    const { pathname } = useLocation()
    const showMenu = !['/envelope', '/ticket'].includes(pathname)

    useMusicPlay()

    return (
        <Suspense fallback={<div className='loading-spinner'></div>}>
            <Routes>
                <Route path='/' element={<Invitation />} />
                <Route path='envelope' element={<Envelope />} />
                <Route path='ticket' element={<Ticket />} />
                <Route path='*' element={<Navigate to={'/envelope'} replace />} />
            </Routes>
            {showMenu && (
                <>
                    <Menu />
                    <MenuButton />
                    <MusicButton />
                </>
            )}
        </Suspense>
    )
}

