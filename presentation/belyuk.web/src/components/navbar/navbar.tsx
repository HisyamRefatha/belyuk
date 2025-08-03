import { ModeToggle } from '@/components/theme/mode-toggle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search, Bell, Settings, User, Home, Tag, BarChart3, FileText } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop
                    setIsScrolled(scrollTop > 0)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className="fixed top-2 md:top-5 w-full px-2 md:px-5 z-50">
            <div className={`rounded-xl h-12 md:h-16 flex justify-between items-center gap-2 px-4 transition-all duration-300 ease-in-out
                ${isScrolled
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/5 border border-gray-200/20 dark:border-gray-700/20 ring-1 ring-black/5 dark:ring-white/5'
                    : 'bg-transparent'
                }`}>

                <div className="flex items-center">
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

                    {/* Navigation Menu - Moved here to be next to logo */}
                    <nav className="ml-8 hidden md:flex items-center space-x-1">
                        <Link
                            to="/"
                            className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${isScrolled
                                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                    : 'bg-primary/90 text-primary-foreground hover:bg-primary'
                                }
                `}
                        >
                            <Home className="w-4 h-4" />
                            Home
                        </Link>
                        <Link
                            to="/products"
                            className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${isScrolled
                                    ? 'text-foreground hover:bg-accent hover:text-accent-foreground'
                                    : 'text-foreground/90 hover:bg-white/10'
                                }
                `}
                        >
                            <Tag className="w-4 h-4" />
                            Products
                        </Link>
                        <Link
                            to="/analytics"
                            className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${isScrolled
                                    ? 'text-foreground hover:bg-accent hover:text-accent-foreground'
                                    : 'text-foreground/90 hover:bg-white/10'
                                }
                `}
                        >
                            <BarChart3 className="w-4 h-4" />
                            Analytics
                        </Link>
                        <Link
                            to="/reports"
                            className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${isScrolled
                                    ? 'text-foreground hover:bg-accent hover:text-accent-foreground'
                                    : 'text-foreground/90 hover:bg-white/10'
                                }
                `}
                        >
                            <FileText className="w-4 h-4" />
                            Reports
                        </Link>
                    </nav>
                </div>

                {/* Right side items with search and buttons */}
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search with AI"
                            className={`
                w-full pl-10 pr-4 py-2 rounded-lg text-sm transition-all duration-300
                ${isScrolled
                                    ? 'bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring'
                                    : 'bg-white/10 border border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/40'
                                }
                focus:outline-none
            `}
                        />
                    </div>

                    {/* Notification Bell */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`
            relative p-2 transition-all duration-300
            ${isScrolled
                                ? 'hover:bg-accent'
                                : 'hover:bg-white/10'
                            }
        `}
                    >
                        <Bell className="w-4 h-4" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </Button>

                    {/* Help/Support Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`
            p-2 transition-all duration-300
            ${isScrolled
                                ? 'hover:bg-accent'
                                : 'hover:bg-white/10'
                            }
        `}
                    >
                        <ModeToggle />
                    </Button>

                    {/* Settings Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`
            p-2 transition-all duration-300
            ${isScrolled
                                ? 'hover:bg-accent'
                                : 'hover:bg-white/10'
                            }
        `}
                    >
                        <Settings className="w-4 h-4" />
                    </Button>

                    {/* User Avatar */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`
            p-1 transition-all duration-300
            ${isScrolled
                                ? 'hover:bg-accent'
                                : 'hover:bg-white/10'
                            }
        `}
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                        </div>
                    </Button>
                </div>

            </div>
        </header>
    )
}

