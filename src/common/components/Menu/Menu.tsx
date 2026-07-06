import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useNavigation } from '@/common/hooks/useNavigate'
import { useMenu } from '@/common/hooks/useMenu'
import './_menu.scss'
import { useTicket } from '@/modules/ticket/hooks/useTicket'
import {
    X,
    EnvelopeSimple,
    Barcode,
    House,
    Clock,
    Ticket,
    MapPin,
    TShirt,
    Image,
    CalendarBlank,
    Hash,
    GraduationCap,
    SignOut
} from '@phosphor-icons/react'

export const Menu: React.FC = () => {
    const { isOpen, handleCloseMenu } = useMenu()
    const { navigateTo } = useNavigation()
    const navigate = useNavigate()
    const location = useLocation()
    const { onRemoveTicket } = useTicket()

    const handleNavigate = (path: string, hash?: string) => {
        handleCloseMenu()
        if (hash) {
            if (location.pathname === '/') {
                setTimeout(() => {
                    const element = document.getElementById(hash)
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                    }
                }, 150)
            } else {
                navigate('/', { state: { scrollTo: hash } })
            }
        } else {
            navigateTo(path)
        }
    }

    const getHref = (hash: string) => {
        return location.pathname === '/' ? `#${hash}` : `/#${hash}`
    }

    const onLogout = () => {
        onRemoveTicket()
        navigateTo('/search')
    }

    return (
        <>
            <div
                className={`menu-overlay ${isOpen ? 'menu-overlay--open' : 'menu-overlay--close'}`}
                onClick={handleCloseMenu}
            />

            <aside className={`menu ${isOpen ? 'menu--open' : 'menu--close'}`}>
                <div className="menu__container">
                    <header className="menu__header">
                        <p className='menu__title'>Menú</p>
                        <X className="menu__icon" onClick={handleCloseMenu} size={28} />
                    </header>

                    <nav className="menu__nav">
                        <div className="menu__routes">
                            <button className="menu__btn menu__btn--envelope" onClick={() => handleNavigate('/envelope')}>
                                <EnvelopeSimple size={20} />
                                <span>Sobre</span>
                            </button>
                            <button className="menu__btn menu__btn--ticket" onClick={() => handleNavigate('/ticket')}>
                                <Barcode size={20} />
                                <span>Mis Boletos</span>
                            </button>
                        </div>

                        <div className="menu__divider-horizontal" />

                        <div className="menu__list">
                            <a className="menu__item" href={getHref('hero')} onClick={handleCloseMenu}>
                                <House className="menu__item-icon" size={20} />
                                <span>Inicio</span>
                            </a>
                            <a className="menu__item" href={getHref('countdown')} onClick={handleCloseMenu}>
                                <Clock className="menu__item-icon" size={20} />
                                <span>Cuenta Atrás</span>
                            </a>
                            <a className="menu__item" href={getHref('guest')} onClick={handleCloseMenu}>
                                <Ticket className="menu__item-icon" size={20} />
                                <span>Pases</span>
                            </a>
                            <a className="menu__item" href={getHref('locations')} onClick={handleCloseMenu}>
                                <MapPin className="menu__item-icon" size={20} />
                                <span>Ubicaciones</span>
                            </a>
                            <a className="menu__item" href={getHref('galery')} onClick={handleCloseMenu}>
                                <Image className="menu__item-icon" size={20} />
                                <span>Galería</span>
                            </a>
                            <a className="menu__item" href={getHref('itinerary')} onClick={handleCloseMenu}>
                                <CalendarBlank className="menu__item-icon" size={20} />
                                <span>Itinerario</span>
                            </a>
                            <a className="menu__item" href={getHref('graduates')} onClick={handleCloseMenu}>
                                <GraduationCap className="menu__item-icon" size={20} />
                                <span>Graduados</span>
                            </a>
                        </div>

                        <button className="menu__btn menu__btn--exit" onClick={onLogout}>
                            <SignOut size={20} />
                            <span>Salir</span>
                        </button>
                    </nav>
                </div>
            </aside>
        </>
    )
}
