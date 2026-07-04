import React from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    distance?: number;
    scale?: number;
    blur?: number;
    rotate?: number;
    rotateX?: number;
    rotateY?: number;
    skewX?: number;
    skewY?: number;
    className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 1.2,
    distance = 30,
    scale = 1,
    blur = 0,
    rotate = 0,
    rotateX = 0,
    rotateY = 0,
    skewX = 0,
    skewY = 0,
    className = ''
}) => {
    const directions = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
        none: { x: 0, y: 0 }
    }

    const initialOffset = directions[direction] || { y: distance, x: 0 }

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                scale,
                filter: blur > 0 ? `blur(${blur}px)` : 'none',
                rotate,
                rotateX,
                rotateY,
                skewX,
                skewY,
                ...initialOffset
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                rotate: 0,
                rotateX: 0,
                rotateY: 0,
                skewX: 0,
                skewY: 0,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
        >
            {children}
        </motion.div>
    )
}

