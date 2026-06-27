import React from 'react'
import { useCountdown } from '../../hooks/useCountdown';
import './_timer.scss'

export const TimerBox: React.FC<{ number: string; concept: string }> = ({ number, concept }) => {
    return (
        <div className="timer__box">
            <div className="timer__number">{number}</div>
            <div className="timer__concept">{concept}</div>
        </div>
    )
}

interface TimerProps {
    targetDate: string
}

export const Timer: React.FC<TimerProps> = ({ targetDate }) => {
    const { days, hours, minutes, seconds } = useCountdown(targetDate)

    const concepts = [
        { number: days, concept: 'Días' },
        { number: hours, concept: 'Hrs' },
        { number: minutes, concept: 'Min' },
        { number: seconds, concept: 'Seg' }
    ]

    return (
        <div className='timer relative-z-2'>
            {
                concepts.map(({ number, concept }) => (
                    <TimerBox key={concept} number={String(number).padStart(2, '0')} concept={concept} />
                ))
            }
        </div>
    )
}

