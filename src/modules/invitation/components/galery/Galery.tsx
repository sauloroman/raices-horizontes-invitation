import React from 'react'
import './_galery.scss'

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

                <div className="galery__line">
                    <img src={line} alt="Line Disk Balls" />
                </div>

                <div className="galery__header">
                    <SectionHeader
                        subtitle="Cecati #173"
                        title='Los Graduados'
                    />
                </div>

                <div className="galery__message">
                    Una historia que caminamos juntos. Ahora los horizontes nos llaman.
                </div>

                <div className="galery__item galery__item--1">
                    <div className="galery__item-cover"></div>
                    <img src={photo1} alt="Foto 1 de generación" />
                </div>
                <div className="galery__item galery__item--2">
                    <img src={photo2} alt="Foto 1 de generación" />
                </div>
                <div className="galery__item galery__item--3">
                    <img src={photo3} alt="Foto 1 de generación" />
                </div>
                <div className="galery__item galery__item--4">
                    <img src={photo4} alt="Foto 1 de generación" />
                </div>

                <footer className="galery__footer">
                    <div className="galery__footer-img">
                        <img src={baseflower} alt="Base Flower" />
                    </div>

                    <div className="galery__footer-content">
                        <p>Queremos compartir un momento para celebrar por todo lo alto</p>
                    </div>
                </footer>

            </div>
        </section >
    )
}
