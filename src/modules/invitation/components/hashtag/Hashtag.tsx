import React from 'react'
import './_hashtag.scss'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import { InstagramLogoIcon } from '@phosphor-icons/react'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'
import palmera from '@/assets/images/palmera.png'
import camara from '@/assets/images/camara.png'

export const Hashtag: React.FC = () => {
    return (
        <section className='hashtag'>
            <div className="hashtag__palmera">
                <ScrollReveal direction="right" duration={1.8} delay={0.1} blur={5} rotate={10}>
                    <img src={palmera} alt="Palmera decorativa" />
                </ScrollReveal>
            </div>
            <div className="hashtag__camara">
                <ScrollReveal direction="left" duration={1.8} delay={0.3} blur={5} rotate={-10}>
                    <img src={camara} alt="Camara fotográfica decorativa" />
                </ScrollReveal>
            </div>

            <ScrollReveal direction="up" duration={1.6} delay={0.5} blur={8} scale={0.97}>
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
            </ScrollReveal>
        </section>
    )
}
