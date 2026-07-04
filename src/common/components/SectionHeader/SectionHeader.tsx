import React from 'react'
import './_section-header.scss'

interface Props {
    subtitle?: string,
    title?: string,
}

export const SectionHeader: React.FC<Props> = ({ subtitle, title }) => {
    return (
        <header className='section-header'>
            <div className="section-header__container">
                <span className='section-header__subtitle'>{subtitle}</span>
                <h2 className='section-header__title'>{title}</h2>
            </div>
        </header>
    )
}
