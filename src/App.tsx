import { ThemeProvider } from "@/components/theme/theme-provider"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ProductsList } from '@/app/dashboard/components/product-list'

function App() {
    // State to track if user has scrolled
    const [isScrolled, setIsScrolled] = useState(false)

    // Effect to handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            // Check if user has scrolled more than 0 pixels
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            setIsScrolled(scrollTop > 0)
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true })

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <ThemeProvider>
            <div className="min-h-screen">
                {/* Header/Navbar */}
                <header className="fixed top-2 md:top-5 w-full px-2 md:px-5 z-50">
                    <div className={`
                        rounded-xl h-12 md:h-16 flex justify-between items-center gap-2 px-4
                        transition-all duration-300 ease-in-out
                        ${isScrolled 
                            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border border-gray-200/20 dark:border-gray-700/20' 
                            : 'bg-transparent'
                        }
                    `}>
                        <div className="flex-1 flex items-center">
                            <Link className="inline-flex" to="/">
                                <svg
                                    className="h-6 w-6 md:h-8 md:w-8"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m8 3 4 8 5-5v11H6V6l2-3z"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <div className="grow flex justify-center" />
                        <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
                            <Button 
                                size="sm" 
                                className={`
                                    text-xs md:text-sm rounded-lg px-2 md:px-3 transition-colors duration-300
                                    ${isScrolled 
                                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                                        : 'bg-primary/90 text-primary-foreground hover:bg-primary'
                                    }
                                `}
                            >
                                Share
                            </Button>
                            <ModeToggle />
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="pt-16 md:pt-24 px-2 md:px-5">
                    <div className="bg-card rounded-xl p-3 md:p-4 mb-4 md:mb-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold text-card-foreground mb-1">Hello Antoine</h1>
                                <p className="text-gray-400 text-xs md:text-sm">Displaying the data from June 2025</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 md:gap-3">
                                <Select defaultValue="june-2025">
                                    <SelectTrigger className="w-[140px] md:w-[180px] text-xs md:text-sm">
                                        <SelectValue placeholder="Select period" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="june-2025">June 2025</SelectItem>
                                        <SelectItem value="may-2025">May 2025</SelectItem>
                                        <SelectItem value="april-2025">April 2025</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <ProductsList />
                </main>
            </div>
        </ThemeProvider>
    )
}

export default App