import React, { useEffect, useRef, useState } from 'react';
import './_particle-rain.scss';
import confetti from 'canvas-confetti';

interface ParticleRainProps {
  colors?: string[];
  intervalMs?: number;
  isActive?: boolean;
  gravity?: number;
  particleCount?: number;
  shapes?: ('square' | 'circle')[];
}

export const ParticleRain: React.FC<ParticleRainProps> = ({
  colors = ['#ffffff'],
  intervalMs = 200,
  isActive = true,
  gravity = 0.6,
  particleCount = 50,
  shapes = ['circle'],
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiInstanceRef = useRef<confetti.CreateTypes | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    confettiInstanceRef.current = confetti.create(canvas, {
      resize: false,
      useWorker: false,
    });

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;
      }
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    intersectionObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (confettiInstanceRef.current) {
        confettiInstanceRef.current.reset();
      }
    };
  }, []);

  useEffect(() => {
    if (!isActive || !isVisible || !confettiInstanceRef.current) return;

    const interval = setInterval(() => {
      if (!confettiInstanceRef.current) return;

      confettiInstanceRef.current({
        particleCount: particleCount,
        angle: 110,
        gravity: gravity,
        ticks: 350,
        colors: colors,
        shapes: shapes,
        scalar: Math.random() * 0.6 + 0.3,
        drift: Math.random() * 0.4 - 0.2,
        origin: {
          x: Math.random(),
          y: -0.05,
        },
      });
    }, intervalMs);

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isVisible, colors, intervalMs, gravity, particleCount, shapes]);

  return <canvas ref={canvasRef} className="particle-rain-canvas" />;
};
