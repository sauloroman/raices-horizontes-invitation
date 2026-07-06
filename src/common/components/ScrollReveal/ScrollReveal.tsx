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

    const initial: any = { opacity: 0 }
    const animate: any = { opacity: 1 }

    if (scale !== 1) {
        initial.scale = scale
        animate.scale = 1
    }
    if (blur > 0) {
        initial.filter = `blur(${blur}px)`
        animate.filter = 'blur(0px)'
    }
    if (rotate !== 0) {
        initial.rotate = rotate
        animate.rotate = 0
    }
    if (rotateX !== 0) {
        initial.rotateX = rotateX
        animate.rotateX = 0
    }
    if (rotateY !== 0) {
        initial.rotateY = rotateY
        animate.rotateY = 0
    }
    if (skewX !== 0) {
        initial.skewX = skewX
        animate.skewX = 0
    }
    if (skewY !== 0) {
        initial.skewY = skewY
        animate.skewY = 0
    }
    if (initialOffset.x !== 0) {
        initial.x = initialOffset.x
        animate.x = 0
    }
    if (initialOffset.y !== 0) {
        initial.y = initialOffset.y
        animate.y = 0
    }

    return (
        <motion.div
            className={className}
            style={{ willChange: 'transform, opacity' }}
            initial={initial}
            whileInView={animate}
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

