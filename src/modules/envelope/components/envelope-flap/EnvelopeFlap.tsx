import React from 'react'
import './_envelope-flap.scss'

export interface EnvelopeFlapProps {
    direction: 'top' | 'bottom' | 'left' | 'right';
    isOpening: boolean;
}

const SvgDefs: React.FC = () => (
    <defs>
        {/* Premium silver gradient for borders */}
        <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="25%" stopColor="#f9fafb" />
            <stop offset="50%" stopColor="#9ca3af" />
            <stop offset="75%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#4b5563" />
        </linearGradient>

        {/* Academic laurel watermark pattern (light white-on-green overlay) */}
        <pattern id="laurel-pattern" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
            <path d="M 10 30 Q 30 30, 50 10" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.5" fill="none" />
            <path d="M 25 28 C 22 20, 32 15, 35 23 C 38 30, 28 35, 25 28 Z" fill="rgba(255, 255, 255, 0.04)" />
            <path d="M 38 20 C 35 12, 45 7, 48 15 C 51 22, 41 27, 38 20 Z" fill="rgba(255, 255, 255, 0.04)" />
        </pattern>
    </defs>
)

export const EnvelopeFlap: React.FC<EnvelopeFlapProps> = ({ direction, isOpening }) => {
    const openClass = isOpening ? `envelop__flap-wrapper--open-${direction}` : ''

    const renderFlapSvg = () => {
        switch (direction) {
            case 'top':
                return (
                    <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ display: 'block' }}>
                        <SvgDefs />
                        <path
                            d="M 0 0 L 400 0 L 400 220 C 340 220, 300 320, 200 400 C 100 320, 60 220, 0 220 Z"
                            fill="#2b4e32"
                        />
                        <path
                            d="M 0 0 L 400 0 L 400 220 C 340 220, 300 320, 200 400 C 100 320, 60 220, 0 220 Z"
                            fill="url(#laurel-pattern)"
                        />
                        <path
                            d="M 400 220 C 340 220, 300 320, 200 400 C 100 320, 60 220, 0 220"
                            fill="none"
                            stroke="url(#silver-grad)"
                            strokeWidth="3.5"
                        />
                    </svg>
                )
            case 'bottom':
                return (
                    <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ display: 'block' }}>
                        <SvgDefs />
                        <path
                            d="M 0 400 L 0 150 C 60 150, 100 80, 200 0 C 300 80, 340 150, 400 150 L 400 400 Z"
                            fill="#2b4e32"
                        />
                        <path
                            d="M 0 400 L 0 150 C 60 150, 100 80, 200 0 C 300 80, 340 150, 400 150 L 400 400 Z"
                            fill="url(#laurel-pattern)"
                        />
                        <path
                            d="M 0 150 C 60 150, 100 80, 200 0 C 300 80, 340 150, 400 150"
                            fill="none"
                            stroke="url(#silver-grad)"
                            strokeWidth="3.5"
                        />
                    </svg>
                )
            case 'left':
                return (
                    <svg viewBox="0 0 400 800" width="100%" height="100%" style={{ display: 'block' }}>
                        <SvgDefs />
                        <path
                            d="M 0 0 C 60 100, 100 300, 200 400 C 100 500, 60 700, 0 800 Z"
                            fill="#2b4e32"
                        />
                        <path
                            d="M 0 0 C 60 100, 100 300, 200 400 C 100 500, 60 700, 0 800 Z"
                            fill="url(#laurel-pattern)"
                        />
                        <path
                            d="M 0 0 C 60 100, 100 300, 200 400 C 100 500, 60 700, 0 800"
                            fill="none"
                            stroke="url(#silver-grad)"
                            strokeWidth="3.5"
                        />
                    </svg>
                )
            case 'right':
                return (
                    <svg viewBox="0 0 400 800" width="100%" height="100%" style={{ display: 'block' }}>
                        <SvgDefs />
                        <path
                            d="M 400 0 C 340 100, 300 300, 200 400 C 300 500, 340 700, 400 800 Z"
                            fill="#2b4e32"
                        />
                        <path
                            d="M 400 0 C 340 100, 300 300, 200 400 C 300 500, 340 700, 400 800 Z"
                            fill="url(#laurel-pattern)"
                        />
                        <path
                            d="M 400 0 C 340 100, 300 300, 200 400 C 300 500, 340 700, 400 800"
                            fill="none"
                            stroke="url(#silver-grad)"
                            strokeWidth="3.5"
                        />
                    </svg>
                )
            default:
                return null
        }
    }

    return (
        <div className={`envelop__flap-wrapper envelop__flap-wrapper--${direction} ${openClass}`}>
            {renderFlapSvg()}
        </div>
    )
}
