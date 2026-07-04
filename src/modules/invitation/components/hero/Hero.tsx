import React from 'react'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'

import './_hero.scss'
import hero from '@/assets/videos/hero-2.mp4'
import { ArrowDownIcon } from '@phosphor-icons/react'

export const Hero: React.FC = () => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Try playing immediately
        video.play().catch((err) => {
            console.log("Autoplay blocked or video not ready, waiting for interaction:", err);
        });

        // Event listener to trigger play on first interaction (click/touch/scroll)
        const playVideo = () => {
            if (video && video.paused) {
                video.play().catch((err) => console.log("Play failed on interaction:", err));
            }
            // Clean up listeners after first interaction
            window.removeEventListener('touchstart', playVideo);
            window.removeEventListener('click', playVideo);
            window.removeEventListener('scroll', playVideo);
        };

        window.addEventListener('touchstart', playVideo, { passive: true });
        window.addEventListener('click', playVideo);
        window.addEventListener('scroll', playVideo, { passive: true });

        return () => {
            window.removeEventListener('touchstart', playVideo);
            window.removeEventListener('click', playVideo);
            window.removeEventListener('scroll', playVideo);
        };
    }, []);

    return (
        <div className="hero">
            <div className="hero__video-container">
                <video ref={videoRef} className="hero__video" src={hero} autoPlay muted loop playsInline webkit-playsinline="true" preload="auto" disablePictureInPicture controls={false}></video>
                <div className="hero__overlay"></div>
            </div>

            <div className="hero__content">
                <ScrollReveal delay={0.8} direction="up" distance={30} duration={2}>
                    <span className="hero__message">¡Nos Graduamos!</span>
                </ScrollReveal>

                <ScrollReveal delay={1.2} direction="up" distance={30} duration={2}>
                    <h1 className="hero__title">Enfermería</h1>
                </ScrollReveal>

                <ScrollReveal delay={1.4} direction="up" distance={30} duration={2}>
                    <div className="hero__divider"></div>
                </ScrollReveal>

                <ScrollReveal delay={1.6} direction="up" distance={30} duration={2}>
                    <p className="hero__date">Julio 10, 2026</p>
                </ScrollReveal>

                <ScrollReveal delay={1.8} direction="up" distance={30} duration={2}>
                    <p className="hero__location">Aguascalientes, Ags</p>
                </ScrollReveal>
            </div>

            <ScrollReveal delay={2.0} direction="up" distance={20} duration={2} className="hero__scroll-container">
                <span className="hero__scroll-text">Desliza</span>
                <div className="hero__scroll-arrow">
                    <ArrowDownIcon />
                </div>
            </ScrollReveal>
        </div>
    )
}



