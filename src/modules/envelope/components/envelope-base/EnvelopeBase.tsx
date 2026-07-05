import React from 'react'
import './_envelope-base.scss'
import { EnvelopeFlap } from '@/modules/envelope/components/envelope-flap/EnvelopeFlap'
import { EnvelopeSeal } from '@/modules/envelope/components/envelope-seal/EnvelopeSeal'

export interface EnvelopeBaseProps {
    isOpening: boolean;
    onOpen: () => void;
    sealImage: string;
    children: React.ReactNode;
    exclusiveText?: string;
    onSkip?: () => void;
    showSkip?: boolean;
    envelopeClass?: string;
}

export const EnvelopeBase: React.FC<EnvelopeBaseProps> = ({
    isOpening,
    onOpen,
    sealImage,
    children,
    onSkip,
    showSkip = true,
    envelopeClass = ''
}) => {
    return (
        <div className="envelop-container">
            <div className="cosmic-bg">
                <div className="cosmic-star star-1" />
                <div className="cosmic-star star-2" />
                <div className="cosmic-star star-3" />
                <div className="cosmic-star star-4" />
                <div className="cosmic-star star-5" />
            </div>

            <div className={`envelop ${isOpening ? 'envelop--opening' : ''} ${envelopeClass}`}>

                <div className={`envelop__hero-container ${isOpening ? 'envelop__hero-container--visible' : ''}`}>
                    {children}
                </div>

                <EnvelopeFlap direction="left" isOpening={isOpening} />
                <EnvelopeFlap direction="right" isOpening={isOpening} />
                <EnvelopeFlap direction="bottom" isOpening={isOpening} />
                <EnvelopeFlap direction="top" isOpening={isOpening} />

                <EnvelopeSeal
                    image={sealImage}
                    isClicked={isOpening}
                    onClick={onOpen}
                />

                {!isOpening && (
                    <div className="envelop__tap-to-open">
                        TOCA PARA ABRIR
                    </div>
                )}

                {showSkip && onSkip && (
                    <button className="envelop__skip" onClick={onSkip}>
                        SALTAR →
                    </button>
                )}
            </div>
        </div>
    )
}
