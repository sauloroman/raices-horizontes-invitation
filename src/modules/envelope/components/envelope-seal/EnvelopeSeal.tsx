import React from 'react'
import './_envelope-seal.scss'

export interface EnvelopeSealProps {
    image: string;
    isClicked: boolean;
    onClick: () => void;
}

export const EnvelopeSeal: React.FC<EnvelopeSealProps> = ({ image, isClicked, onClick }) => {
    const containerClass = `envelop__seal-container ${isClicked ? 'envelop__seal-container--clicked' : ''}`

    return (
        <div className={containerClass} onClick={onClick}>
            <div className="envelop__seal-glow" />
            <div className="envelop__seal-half envelop__seal-half--left">
                <img 
                    src={image} 
                    alt="sello izquierdo" 
                    className="envelop__pin" 
                />
            </div>
            <div className="envelop__seal-half envelop__seal-half--right">
                <img 
                    src={image} 
                    alt="sello derecho" 
                    className="envelop__pin" 
                />
            </div>
        </div>
    )
}
