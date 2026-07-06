import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    Guest,
    Hero,
    Message,
    Locations,
    Countdown,
    DressCode,
    Galery,
    Itinerary,
    Hashtag,
    Graduates,
    Farewell
} from '..'
import { useTicket } from '@/modules/ticket/hooks/useTicket'

export const Invitation: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { onGetAllTickets } = useTicket()

    useEffect(() => {
        const hash = location.hash || location.state?.scrollTo
        if (hash) {
            const targetId = hash.replace('#', '')
            const scrollTimeout = setTimeout(() => {
                const element = document.getElementById(targetId)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })

                    const navigateTimeout = setTimeout(() => {
                        navigate(location.pathname, { replace: true, state: {} })
                    }, 1000)

                    return () => clearTimeout(navigateTimeout)
                }
            }, 500)

            return () => clearTimeout(scrollTimeout)
        }
    }, [location, navigate])

    useEffect(() => {
        onGetAllTickets()
    }, [onGetAllTickets])

    return (
        <div>
            <div id="invitation">
                <div id="hero"><Hero /></div>
                <div id="countdown"><Countdown /></div>
                <div id="message"><Message /></div>
                <div id="guest"><Guest /></div>
                <div id="locations"><Locations /></div>
                <div id="dress-code"><DressCode /></div>
                <div id="galery"><Galery /></div>
                <div id="itinerary"><Itinerary /></div>
                <div id="hashtag"><Hashtag /></div>
                <div id="graduates"><Graduates /></div>
                <div id="farewell"><Farewell /></div>
            </div>
        </div>
    )
}
