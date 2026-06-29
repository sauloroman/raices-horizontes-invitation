import React from 'react'

import './_hero.scss'
import hero from '@/assets/videos/hero-1.mp4'

export const Hero: React.FC = () => {
    return (
        <div className="hero">
            <video className='hero__video' src={hero} autoPlay muted loop ></video>
            <div className="hero__content">
                <span className='hero__message'>¡Nos Graduamos!</span>
                <h1 className='hero__title'>Enfermería</h1>
                <p className='hero__date'>Julio 10, 2026</p>
                <div className="hero__divider"></div>
            </div>
        </div>
    )
}
