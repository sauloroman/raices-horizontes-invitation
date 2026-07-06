import React from 'react'
import './_menu.scss'
import { useMenu } from '@/common/hooks/useMenu'
import { List } from '@phosphor-icons/react'

export const MenuButton: React.FC = () => {
    const { handleOpenMenu, isOpen } = useMenu()

    return (
        <button 
            className={`menu-button ${isOpen ? 'menu-button--hidden' : ''}`} 
            onClick={handleOpenMenu}
        >
            <List className="menu-button__icon" size={24} weight="bold" />
        </button>
    )
}
