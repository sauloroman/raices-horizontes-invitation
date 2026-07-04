import React from 'react'
import './_galery.scss'

import line from '@/assets/images/line-balls.png'

import photo1 from '@/assets/images/foto-1.jpeg'
import photo2 from '@/assets/images/foto-2.jpeg'
import photo3 from '@/assets/images/foto-3.jpeg'
import photo4 from '@/assets/images/foto-4.jpeg'

export const Galery: React.FC = () => {
    return (
        <section className='galery'>
            <div className="galery__wave">
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 88.8133971291866,174.04784688995215 177.6267942583732,198.09569377990434 260,199 C 342.3732057416268,199.90430622009566 418.3062200956938,177.66507177033492 530,147 C 641.6937799043062,116.33492822966508 789.1483253588517,77.244019138756 891,85 C 992.8516746411483,92.755980861244 1049.1004784688996,147.35885167464113 1133,166 C 1216.8995215311004,184.64114832535887 1328.4497607655503,167.32057416267943 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#afc6b2" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,350 C 87.24401913875596,380.7081339712919 174.48803827751192,411.4162679425837 279,420 C 383.5119617224881,428.5837320574163 505.2918660287081,415.04306220095697 601,392 C 696.7081339712919,368.95693779904303 766.3444976076556,336.4114832535885 857,325 C 947.6555023923444,313.5885167464115 1059.3301435406697,323.31100478468903 1160,331 C 1260.6698564593303,338.68899521531097 1350.3349282296651,344.3444976076555 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#afc6b2" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
            </div>

            <div className="galery__container">

                <div className="galery__line">
                    <img src={line} alt="Line Disk Balls" />
                </div>

                <div className="galery__item">
                    <img src={photo1} alt="Foto 1 de generación" />
                </div>
                <div className="galery__item">
                    <img src={photo2} alt="Foto 1 de generación" />
                </div>
                <div className="galery__item">
                    <img src={photo3} alt="Foto 1 de generación" />
                </div>
                <div className="galery__item">
                    <img src={photo4} alt="Foto 1 de generación" />
                </div>

            </div>
        </section >
    )
}
