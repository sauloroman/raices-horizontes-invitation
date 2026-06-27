import React from 'react'
import { StarIcon } from '@phosphor-icons/react'

import './_hero.scss'
import hero from '@/assets/images/hero.png'
import { Timer } from '../../../../common/components/Timer/Timer'

const TARGET_DATE = import.meta.env.VITE_INVITATION_DATE

export const Hero: React.FC = () => {
    return (
        <div className="hero">

            <div className="hero__background" style={{ backgroundImage: `url(${hero})` }}></div>
            <div className="hero__overlay"></div>

            <div className="hero__container">
                <div className="hero__top">
                    <div className='hero__top-star'><StarIcon size={16} weight="fill" /></div>
                    <span className='hero__top-celebration'>¡Nos Graduamos!</span>
                </div>

                <div className="hero__line"></div>

                <div className="hero__date">
                    <span className='hero__date-day'>05</span>
                    <div className="hero__date-line"></div>
                    <span className='hero__date-month'>Jul</span>
                    <div className="hero__date-line"></div>
                    <span className='hero__date-year'>26</span>
                </div>

                <div className="hero__title">
                    <span className='hero__title-first'>Licenciatura</span> <br />
                    <span className='hero__title-second'>Turismo</span>
                </div>

                <div className="hero__divider"></div>

                <div className="hero__timer">
                    <Timer targetDate={TARGET_DATE} />
                </div>
            </div>


        </div>
    )
}
