import React from 'react'
import { ArrowDownIcon } from '@phosphor-icons/react'
import video from '@/assets/videos/hero.mp4'

import './_hero.scss'

export const Hero: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero__video-container">
                <video src={video} className="hero__video" autoPlay muted loop playsInline webkit-playsinline="true" preload="auto" disablePictureInPicture controls={false}></video>
                <div className="hero__overlay"></div>
            </div>

            <div className="hero__content">
                <span className="hero__message">¡Nos Graduamos!</span>
                <h1 className="hero__title">Enfermería</h1>
                <div className="hero__divider"></div>
                <p className="hero__date">Julio 10, 2026</p>
                <p className="hero__location">Aguascalientes, Ags</p>
            </div>

            <div className="hero__scroll-container">
                <span className="hero__scroll-text">Desliza</span>
                <div className="hero__scroll-arrow">
                    <ArrowDownIcon />
                </div>
            </div>
        </div>
    )
}



