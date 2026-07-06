import React from 'react'
import './_menu.scss'
import { useMusicPlay } from '@/common/hooks/useMusicPlay'
import { useMenu } from '@/common/hooks/useMenu'
import { SpeakerHigh, SpeakerSlash } from '@phosphor-icons/react'

export const MusicButton: React.FC = () => {
    const { isPlaying, setIsPlaying } = useMusicPlay()
    const { isOpen } = useMenu()

    const handleToggleMusic = () => {
        setIsPlaying(prev => !prev)
    }

    return (
        <button 
            className={`music-button ${isOpen ? 'music-button--hidden' : ''}`} 
            onClick={handleToggleMusic}
            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
            {isPlaying ? (
                <SpeakerHigh className="music-button__icon" size={24} weight="bold" />
            ) : (
                <SpeakerSlash className="music-button__icon" size={24} weight="bold" />
            )}
        </button>
    )
}
