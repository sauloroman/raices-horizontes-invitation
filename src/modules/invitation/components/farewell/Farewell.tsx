import React from 'react'
import './_farewell.scss'
import { openExternalLink } from '@/common/helpers/navigation'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'
import icon from '@/assets/images/maquina.png'

export const Farewell: React.FC = () => {
    return (
        <section className='farewell'>
            <div className="farewell__container">

                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 80.17224880382778,130.0287081339713 160.34449760765557,110.05741626794259 257,120 C 353.65550239234443,129.94258373205741 466.7942583732057,169.79904306220095 559,173 C 651.2057416267943,176.20095693779905 722.4784688995218,142.7464114832536 810,140 C 897.5215311004782,137.2535885167464 1001.291866028708,165.21531100478467 1109,172 C 1216.708133971292,178.78468899521533 1328.354066985646,164.39234449760767 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#d9d4cc" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,350 C 78.69856459330143,332.622009569378 157.39712918660285,315.244019138756 248,320 C 338.60287081339715,324.755980861244 441.11004784689,351.645933014354 537,366 C 632.88995215311,380.354066985646 722.1626794258374,382.1722488038278 823,360 C 923.8373205741626,337.8277511961722 1036.2392344497607,291.6650717703349 1141,286 C 1245.7607655502393,280.3349282296651 1342.8803827751196,315.16746411483257 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#d9d4cc" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>

                <ScrollReveal direction="up" duration={1.8} delay={0.3} blur={8} scale={0.97}>
                    <div className="farewell__content">
                        <div className="farewell__text">¡Te esperamos!</div>
                        <h2 className='farewell__career'>Enfermería</h2>
                        <p className='farewell__school'>
                            <span>10</span>
                            <span className="farewell__dot"></span>
                            <span>Julio</span>
                            <span className="farewell__dot"></span>
                            <span>2026</span>
                        </p>

                        <div className="farewell__icon">
                            <img src={icon} alt="Máquina de escribir antigua" />
                        </div>

                        <div className="farewell__disclaimer">
                            Hecho con amor por: <a onClick={() => openExternalLink('https://www.instagram.com/tuamigoinvitaciones/')}>TuAmigoInvitaciones</a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
