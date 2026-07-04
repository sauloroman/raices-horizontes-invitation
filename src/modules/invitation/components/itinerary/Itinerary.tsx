import React from 'react'
import './_itinerary.scss'
import frame from '@/assets/images/itinerary-frame.png'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'

export const Itinerary: React.FC = () => {

    return (
        <section className='itinerary'>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 97.04306220095694,171.444976076555 194.08612440191388,192.88995215311004 286,187 C 377.9138755980861,181.11004784688996 464.6985645933015,147.8851674641148 567,153 C 669.3014354066985,158.1148325358852 787.1196172248802,201.56937799043067 881,204 C 974.8803827751198,206.43062200956933 1044.8229665071772,167.83732057416267 1134,152 C 1223.1770334928228,136.16267942583733 1331.5885167464114,143.08133971291866 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#d9d4cc" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,350 C 93.10047846889952,357.1004784688995 186.20095693779905,364.20095693779905 285,362 C 383.79904306220095,359.79904306220095 488.2966507177034,348.2966507177033 580,340 C 671.7033492822966,331.7033492822967 750.6124401913876,326.6124401913875 850,338 C 949.3875598086124,349.3875598086125 1069.2535885167463,377.25358851674645 1171,382 C 1272.7464114832537,386.74641148325355 1356.3732057416269,368.37320574162675 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#d9d4cc" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
            <div className="itinerary__container">

                <div className="itinerary__header">
                    <SectionHeader
                        subtitle='Itinerary'
                        title='Programa del Evento'
                    />
                </div>

                <div className="itinerary__content">
                    <img src={frame} alt="frame" className='itinerary__frame' />
                </div>

            </div>
        </section>
    )
}

