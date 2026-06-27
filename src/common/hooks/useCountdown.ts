import { useState, useEffect } from 'react'

export interface CountdownTime {
    days: number
    hours: number
    minutes: number
    seconds: number
    isCompleted: boolean
}

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const parseDate = (dateStr: string): Date => {
    const [day, month, year, hour, minute] = dateStr.split(/[/\s:]/).map(Number)
    return new Date(year, month - 1, day, hour, minute)
}

const calculateRemaining = (targetDate: Date): CountdownTime => {
    const difference = targetDate.getTime() - Date.now()

    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true }
    }

    return {
        days: Math.floor(difference / DAY),
        hours: Math.floor((difference % DAY) / HOUR),
        minutes: Math.floor((difference % HOUR) / MINUTE),
        seconds: Math.floor((difference % MINUTE) / SECOND),
        isCompleted: false,
    }
}

export const useCountdown = (targetDateString: string): CountdownTime => {
    const [prevTargetDateString, setPrevTargetDateString] = useState(targetDateString)
    const [timeLeft, setTimeLeft] = useState(() => calculateRemaining(parseDate(targetDateString)))

    if (targetDateString !== prevTargetDateString) {
        setPrevTargetDateString(targetDateString)
        setTimeLeft(calculateRemaining(parseDate(targetDateString)))
    }

    useEffect(() => {
        const targetDate = parseDate(targetDateString)

        const timer = setInterval(() => {
            const remaining = calculateRemaining(targetDate)
            setTimeLeft(remaining)
            if (remaining.isCompleted) clearInterval(timer)
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDateString])

    return timeLeft
}
