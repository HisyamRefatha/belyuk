import { useEffect, useState } from 'react'

interface UseScrollPositionOptions {
    threshold?: number
    throttle?: number
}

/**
 * Custom hook to track scroll position and determine if user has scrolled
 * 
 * @param options Configuration options
 * @param options.threshold Scroll threshold in pixels (default: 0)
 * @param options.throttle Throttle delay in milliseconds (default: 16ms for 60fps)
 * @returns Object containing scroll state and position
 */
export function useScrollPosition({ 
    threshold = 0, 
    throttle = 16 
}: UseScrollPositionOptions = {}) {
    const [scrollY, setScrollY] = useState(0)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null

        const handleScroll = () => {
            // Clear existing timeout
            if (timeoutId) {
                clearTimeout(timeoutId)
            }

            // Throttle scroll events for better performance
            timeoutId = setTimeout(() => {
                const currentScrollY = window.scrollY || document.documentElement.scrollTop
                
                setScrollY(currentScrollY)
                setIsScrolled(currentScrollY > threshold)
            }, throttle)
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true })

        // Get initial scroll position
        handleScroll()

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [threshold, throttle])

    return {
        scrollY,
        isScrolled,
        isAtTop: scrollY === 0,
        isScrollingDown: scrollY > threshold
    }
}

/**
 * Simplified hook for basic scroll detection
 * Returns true when user has scrolled past the threshold
 */
export function useScrolled(threshold: number = 0): boolean {
    const { isScrolled } = useScrollPosition({ threshold })
    return isScrolled
}