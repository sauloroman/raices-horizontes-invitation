import React from 'react'
import './_itinerary.scss'
import frame from '@/assets/images/itinerary-frame.png'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import bolaDisco from '@/assets/images/bola-disco-2.png'

const itineraryItems = [
    {
        time: '09:00 PM',
        title: 'Recepción',
    },
    {
        time: '09:00 a 10:00 PM',
        title: 'Coctél de Bienvenida',
    },
    {
        time: '10:30 PM',
        title: 'Cena',
    },
    {
        time: '11:00 PM',
        title: 'Pase de lista. Palabras para los graduados',
    },
    {
        time: '11:15 PM',
        title: 'Brindis y apertura de pista',
    },
    {
        time: '12:00 AM',
        title: 'Cabina de fotos',
    },
    {
        time: '01:00 a 02:00 AM',
        title: 'Música Banda',
    },
    {
        time: '02:00 AM',
        title: 'Fin del evento',
    }
]

export const Itinerary: React.FC = () => {

    return (
        <section className='itinerary'>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 97.04306220095694,171.444976076555 194.08612440191388,192.88995215311004 286,187 C 377.9138755980861,181.11004784688996 464.6985645933015,147.8851674641148 567,153 C 669.3014354066985,158.1148325358852 787.1196172248802,201.56937799043067 881,204 C 974.8803827751198,206.43062200956933 1044.8229665071772,167.83732057416267 1134,152 C 1223.1770334928228,136.16267942583733 1331.5885167464114,143.08133971291866 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#d9d4cc" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,350 C 93.10047846889952,357.1004784688995 186.20095693779905,364.20095693779905 285,362 C 383.79904306220095,359.79904306220095 488.2966507177034,348.2966507177033 580,340 C 671.7033492822966,331.7033492822967 750.6124401913876,326.6124401913875 850,338 C 949.3875598086124,349.3875598086125 1069.2535885167463,377.25358851674645 1171,382 C 1272.7464114832537,386.74641148325355 1356.3732057416269,368.37320574162675 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#d9d4cc" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
            <div className="itinerary__container">

                <div className="itinerary__header">
                    <SectionHeader
                        subtitle='Itinerario'
                        title='Programa del Evento'
                    />
                </div>

                <div className="itinerary__content">
                    <img src={frame} alt="frame" className='itinerary__frame' />

                    <ul className="itinerary__list">
                        {
                            itineraryItems.map((item, index) => (
                                <li key={index} className="itinerary__item">
                                    <div className="itinerary__time">{item.time}</div>
                                    <div className="itinerary__title">{item.title}</div>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="itinerary__bola itinerary__bola--plateada">
                        <img src={bolaDisco} alt="Bola Disco Plateada" />
                    </div>
                </div>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 78.10526315789474,116.95693779904306 156.21052631578948,83.91387559808614 244,98 C 331.7894736842105,112.08612440191386 429.2631578947369,173.30143540669854 535,204 C 640.7368421052631,234.69856459330146 754.7368421052631,234.8803827751196 862,209 C 969.2631578947369,183.1196172248804 1069.7894736842106,131.17703349282297 1165,117 C 1260.2105263157894,102.82296650717703 1350.1052631578946,126.41148325358851 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#d9d4cc" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><path d="M 0,600 L 0,350 C 99.57894736842107,319.33014354066984 199.15789473684214,288.66028708133973 296,277 C 392.84210526315786,265.33971291866027 486.9473684210526,272.688995215311 586,301 C 685.0526315789474,329.311004784689 789.0526315789473,378.5837320574163 880,400 C 970.9473684210527,421.4162679425837 1048.842105263158,414.97607655502395 1140,402 C 1231.157894736842,389.02392344497605 1335.578947368421,369.511961722488 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#d9d4cc" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>
            </div>
        </section>
    )
}
