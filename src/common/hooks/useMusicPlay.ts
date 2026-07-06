import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/store"
import { pauseMusic, playMusic } from "@/store/ui/music.slice"
import song from '@/assets/music/song.mp3'

const audioInstance = new Audio(song)
audioInstance.loop = true

export const useMusicPlay = () => {
    const dispatch = useDispatch()
    const { isPlaying } = useSelector((state: RootState) => state.music)
    const [currentTime, setCurrentTime] = useState(() => audioInstance.currentTime)
    const [duration, setDuration] = useState(() => audioInstance.duration || 0)

    useEffect(() => {
        if (isPlaying) {
            audioInstance.play().catch(err => {
                console.log('Playback prevented by browser autoplay policy:', err)
                dispatch(pauseMusic())
            })
        } else {
            audioInstance.pause()
        }
    }, [isPlaying, dispatch])

    useEffect(() => {
        const handleTimeUpdate = () => {
            setCurrentTime(audioInstance.currentTime)
        }
        const handleLoadedMetadata = () => {
            setDuration(audioInstance.duration || 0)
        }

        audioInstance.addEventListener('timeupdate', handleTimeUpdate)
        audioInstance.addEventListener('loadedmetadata', handleLoadedMetadata)

        return () => {
            audioInstance.removeEventListener('timeupdate', handleTimeUpdate)
            audioInstance.removeEventListener('loadedmetadata', handleLoadedMetadata)
        }
    }, [])

    const seek = (time: number) => {
        audioInstance.currentTime = time
        setCurrentTime(time)
    }

    const setIsPlaying = (value: boolean | ((prev: boolean) => boolean)) => {
        const nextValue = typeof value === 'function' ? value(isPlaying) : value
        if (nextValue) {
            dispatch(playMusic())
        } else {
            dispatch(pauseMusic())
        }
    }

    return {
        isPlaying,
        setIsPlaying,
        currentTime,
        duration,
        seek
    }
}