import React from 'react'
import './_galery.scss'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'

import line from '@/assets/images/line-balls.png'
import baseflower from '@/assets/images/base-flower-2.png'

import photo1 from '@/assets/images/foto-1.jpeg'
import photo2 from '@/assets/images/foto-2.jpeg'
import photo3 from '@/assets/images/foto-3.jpeg'
import photo4 from '@/assets/images/foto-4.jpeg'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'

export const Galery: React.FC = () => {
    return (
        <section className='galery'>
            <div className="galery__container">

                <ScrollReveal direction="none" scale={0.9} duration={1.2}>
                    <div className="galery__line">
                        <img src={line} alt="Line Disk Balls" />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" duration={1.2}>
                    <div className="galery__header">
                        <SectionHeader
                            subtitle="Cecati #173"
                            title='Los Graduados'
                        />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.1} duration={1.2}>
                    <div className="galery__message">
                        Una historia que caminamos juntos. Ahora los horizontes nos llaman.
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="left" duration={1.2}>
                    <div className="galery__item galery__item--1">
                        <div className="galery__item-cover"></div>
                        <img src={photo1} alt="Foto 1 de generación" />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" duration={1.2}>
                    <div className="galery__item galery__item--2">
                        <img src={photo2} alt="Foto 1 de generación" />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="left" duration={1.2}>
                    <div className="galery__item galery__item--3">
                        <img src={photo3} alt="Foto 1 de generación" />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" duration={1.2}>
                    <div className="galery__item galery__item--4">
                        <img src={photo4} alt="Foto 1 de generación" />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" duration={1.2}>
                    <footer className="galery__footer">
                        <div className="galery__footer-img">
                            <img src={baseflower} alt="Base Flower" />
                        </div>

                        <div className="galery__footer-content">
                            <p>Queremos compartir un momento para celebrar por todo lo alto</p>
                            <span className='galery__footer-career'>Enfermería</span>
                        </div>
                    </footer>
                </ScrollReveal>

            </div>
        </section >
    )
}
