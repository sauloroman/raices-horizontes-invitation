import { useEffect, useRef } from 'react'

interface UseScrollZoomOptions {
    minScale?: number
    maxScale?: number
}

/**
 * Custom hook to apply a scroll-linked zoom (scale) effect to a target element
 * based on the visibility progress of its container container element in the viewport.
 * 
 * @param options Configuration options for the zoom scale limits.
 * @returns An object containing `containerRef` and `targetRef` to be attached to the respective DOM elements.
 */
export const useScrollZoom = <
    TContainer extends HTMLElement = HTMLElement,
    TTarget extends HTMLElement = HTMLElement
>({
    minScale = 1,
    maxScale = 1.25,
}: UseScrollZoomOptions = {}) => {

    const containerRef = useRef<TContainer>(null)
    const targetRef = useRef<TTarget>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !targetRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const viewportHeight = window.innerHeight

            if (rect.top < viewportHeight && rect.bottom > 0) {
                const totalDistance = viewportHeight + rect.height
                const currentDistance = viewportHeight - rect.top

                const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1)

                const scaleValue = minScale + progress * (maxScale - minScale)

                targetRef.current.style.transform = `scale(${scaleValue}) translateZ(0)`
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [minScale, maxScale])

    return { containerRef, targetRef }
}
