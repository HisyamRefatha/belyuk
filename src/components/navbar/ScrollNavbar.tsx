import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/theme/mode-toggle'

interface ScrollNavbarProps {
    className?: string
    children?: React.ReactNode
}

/**
 * ScrollNavbar Component
 * 
 * A dynamic navbar that changes its background based on scroll position:
 * - Transparent when at the top of the page (scroll position = 0)
 * - Solid background with blur effect when scrolled down
 * - Smooth transitions using Tailwind CSS classes
 */
export function ScrollNavbar({ className = '', children }: ScrollNavbarProps) {
    // State to track scroll position
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        /**
         * Handle scroll events to determine navbar background state
         * Uses requestAnimationFrame for better performance
         */
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Get current scroll position
                    const scrollTop = window.scrollY || document.documentElement.scrollTop
                    
                    // Update state based on scroll position
                    // Any scroll amount > 0 triggers the background change
                    setIsScrolled(scrollTop > 0)
                    
                    ticking = false
                })
                ticking = true
            }
        }

        // Add scroll event listener with passive option for better performance
        window.addEventListener('scroll', handleScroll, { passive: true })

        // Check initial scroll position on mount
        handleScroll()

        // Cleanup: remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`fixed top-2 md:top-5 w-full px-2 md:px-5 z-50 ${className}`}>
            <nav 
                className={`
                    rounded-xl h-12 md:h-16 flex justify-between items-center gap-2 px-4
                    transition-all duration-300 ease-in-out
                    ${isScrolled 
                        ? `
                            bg-white/95 dark:bg-gray-900/95 
                            backdrop-blur-md 
                            shadow-lg shadow-black/5
                            border border-gray-200/20 dark:border-gray-700/20
                            ring-1 ring-black/5 dark:ring-white/5
                        ` 
                        : 'bg-transparent'
                    }
                `}
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Logo Section */}
                <div className="flex-1 flex items-center">
                    <Link 
                        className={`
                            inline-flex transition-opacity duration-300
                            ${isScrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'}
                        `} 
                        to="/"
                        aria-label="Home"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="32"
                            aria-label="Schema Visualizer"
                            className={`
                                transition-colors duration-300
                                ${isScrolled 
                                    ? 'text-foreground' 
                                    : 'text-foreground/90'
                                }
                            `}
                        >
                            <path
                                fill="currentColor"
                                d="M0 12v12.8h4.028a3.242 3.242 0 0 1 2.278.937A3.199 3.199 0 0 1 7.25 28v4h9.667L29 20V7.2h-4.028a3.242 3.242 0 0 1-2.278-.937A3.2 3.2 0 0 1 21.75 4V0h-9.667L0 12Zm13.694 12H8.056v-8.8l7.25-7.2h5.638v8.8l-7.25 7.2Z"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Center Spacer */}
                <div className="grow flex justify-center">
                    {children}
                </div>

                {/* Action Buttons */}
                <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
                    <Button 
                        size="sm" 
                        className={`
                            text-xs md:text-sm rounded-lg px-2 md:px-3 
                            transition-all duration-300 ease-in-out
                            ${isScrolled 
                                ? `
                                    bg-primary text-primary-foreground 
                                    hover:bg-primary/90 
                                    shadow-sm hover:shadow-md
                                    transform hover:scale-105
                                ` 
                                : `
                                    bg-primary/90 text-primary-foreground 
                                    hover:bg-primary
                                    backdrop-blur-sm
                                `
                            }
                        `}
                    >
                        Share
                    </Button>
                    <div className={`
                        transition-all duration-300
                        ${isScrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'}
                    `}>
                        <ModeToggle />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default ScrollNavbar