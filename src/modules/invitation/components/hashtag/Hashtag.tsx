import React from 'react'
import './_hashtag.scss'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import { InstagramLogoIcon } from '@phosphor-icons/react'
import palmera from '@/assets/images/palmera.png'
import camara from '@/assets/images/camara.png'

export const Hashtag: React.FC = () => {
    return (
        <section className='hashtag'>
            <div className="hashtag__palmera">
                <img src={palmera} alt="Palmera decorativa" />
            </div>
            <div className="hashtag__camara">
                <img src={camara} alt="Camara fotográfica decorativa" />
            </div>
            <div className='hashtag__container'>
                <div className="hashtag__header">
                    <div className='hashtag__icon'>
                        <InstagramLogoIcon />
                    </div>
                    <SectionHeader
                        subtitle='Comparte tus fotos'
                    />
                </div>

                <div className="hashtag__content">
                    <p className='hashtag__text'>Comparte tus fotos con nosotros usando el hashtag </p>

                    <span className='hashtag__name'>#Cecati173Enfemeria.</span>
                </div>
            </div>
        </section>
    )
}
