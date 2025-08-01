import { ThemeProvider } from "@/components/theme/theme-provider"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Search, Filter, MoreHorizontal, Plus, BarChart3, Package, Home, TrendingUp, FileText, Bell, User, ChevronDown, Calendar, Zap, Mail, DollarSign, ArrowUp, ArrowDown, Check, X, Clock, Settings, Tag, ShoppingBag, Activity, Users, CreditCard, Target, TrendingDown } from 'lucide-react';
import { ProductsList } from '@/app/dashboard/components/product-list'
function App() {
    // State to track if user has scrolled
    const [isScrolled, setIsScrolled] = useState(false)

    // Effect to handle scroll events
    useEffect(() => {
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
        <ThemeProvider>
            <div className="min-h-screen">
                {/* Header/Navbar */}
                <header className="fixed top-2 md:top-5 w-full px-2 md:px-5 z-50">
                    <div className={`
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
                    `}>
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
                        <div className="grow flex justify-center" />
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
                        
                        {/* Navigation Menu */}
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
                                    }
                    
                    {/* Center Search Bar */}
                    <div className="flex-1 flex justify-center max-w-md mx-4">
                        <div className="relative w-full">
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
                    </div>
                    
                            >
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
                            <span className="w-4 h-4 border border-current rounded-full flex items-center justify-center text-xs font-bold">?</span>
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
                        
                                Share
                            </Button>
                            <div className={`
                                transition-all duration-300
                                ${isScrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'}
                            `}>
                                <ModeToggle />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Section */}
                <div className="pt-[72px] md:pt-[96px] p-3 md:p-6">
                    {/* Top Greeting Section */}
                    <div className="bg-card rounded-xl p-3 md:p-4 mb-4 md:mb-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold text-white mb-1">Hello Antoine</h1>
                                <p className="text-gray-400 text-xs md:text-sm">Displaying the data from June 2025</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 md:gap-3">
                                <button className="px-2 md:px-3 py-1.5 border border-gray-600 rounded-lg text-gray-300 hover:bg-slate-700 text-xs md:text-sm">Daily</button>
                                <button className="px-2 md:px-3 py-1.5 border border-gray-600 rounded-lg text-gray-300 hover:bg-slate-700 text-xs md:text-sm">Weekly</button>
                                <button className="px-2 md:px-3 py-1.5 bg-slate-600 text-white rounded-lg text-xs md:text-sm">Monthly</button>
                                <button className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-xs md:text-sm">
                                    <Plus className="w-3 h-3 md:w-4 md:h-4" />
                                    <span className="hidden sm:inline">Add Product Batch</span>
                                    <span className="sm:hidden">Add</span>
                                </button>
                            </div>
                        </div>

                        {/* Row 1 - Main Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6 mb-6 md:mb-8">
                            {/* Total Sales */}
                            <div className="bg-teal rounded-xl p-3 md:p-4 border">
                                <div className="flex items-center justify-between mb-2 md:mb-3">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="w-6 h-6 md:w-8 md:h-8 bg-muted rounded-lg border border-[#55979f] flex items-center justify-center">
                                            <DollarSign className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground text-xs">Total sales</p>
                                            <p className="text-lg md:text-xl font-bold text-card-foreground">$ 1,284.00</p>
                                            <p className="text-card-foreground text-xs">of $ 5,000.00</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-400">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 text-green-400 text-xs">
                                    <TrendingUp className="w-3 h-3" />
                                    <span>11%</span>
                                    <span className="text-muted-foreground hidden sm:inline">VS PREV. 30 DAYS</span>
                                    <span className="text-muted-foreground sm:hidden">VS PREV.</span>
                                </div>
                            </div>

                            {/* Total Products */}
                            <div className="bg-teal rounded-xl p-3 md:p-4 border">
                                <div className="flex items-center justify-between mb-2 md:mb-3">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="w-6 h-6 md:w-8 md:h-8 bg-muted rounded-lg border border-[#55979f] flex items-center justify-center">
                                            <Package className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground text-xs">Total Products</p>
                                            <p className="text-lg md:text-xl font-bold text-card-foreground">122</p>
                                            <p className="text-muted-foreground text-xs">items</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-400">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 text-red-400 text-xs">
                                    <TrendingDown className="w-3 h-3" />
                                    <span>0%</span>
                                    <span className="text-muted-foreground hidden sm:inline">VS PREV. 30 DAYS</span>
                                    <span className="text-muted-foreground sm:hidden">VS PREV.</span>
                                </div>
                            </div>

                            {/* Latest Churn */}
                            <div className="bg-teal rounded-xl p-3 md:p-4 border">
                                <div className="flex items-center justify-between mb-2 md:mb-3">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="w-6 h-6 md:w-8 md:h-8 bg-muted rounded-lg border border-[#55979f] flex items-center justify-center">
                                            <Users className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground text-xs">% Latest Churn</p>
                                            <p className="text-lg md:text-xl font-bold text-card-foreground">7.81</p>
                                            <p className="text-muted-foreground text-xs">lorem</p>
                                        </div>
                                    </div>
                                    <button className="text-card-foreground">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 text-red-400 text-xs">
                                    <TrendingDown className="w-3 h-3" />
                                    <span>1.7%</span>
                                    <span className="text-muted-foreground hidden sm:inline">VS PREV. 30 DAYS</span>
                                    <span className="text-muted-foreground sm:hidden">VS PREV.</span>
                                </div>
                            </div>

                            {/* AI Actions */}
                            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl p-3 md:p-4 relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Activity className="w-3 h-3 md:w-4 md:h-4 text-emerald-200" />
                                        <span className="text-emerald-200 text-xs">Actions</span>
                                    </div>
                                    <p className="text-white font-semibold text-sm mb-1">Reconnected with AI</p>
                                    <p className="text-emerald-200 text-xs mb-3">Runtime update</p>
                                    <button className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs px-2 md:px-3 py-1 rounded-lg">
                                        <span className="hidden sm:inline">See AI Actions</span>
                                        <span className="sm:hidden">Actions</span>
                                    </button>
                                </div>
                                <div className="absolute -top-2 -right-2 w-12 h-12 md:w-16 md:h-16 bg-emerald-400 opacity-20 rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* Row 2 - Analytics and Products Section */}
                    <div className="grid grid-cols-1 xl:grid-cols-14 gap-4 md:gap-6 mt-6 md:mt-8 mb-6 md:mb-8">
                        {/* Quick Analytics */}
                        <div className="xl:col-span-6 w-full">
                            <div className="bg-[#f2f5f6f2] rounded-xl p-3 md:p-4 border text-black">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                                    <h2 className="text-base md:text-lg font-semibold">Quick Analytics</h2>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-3 w-full sm:w-auto">
                                        <Select>
                                            <SelectTrigger className="w-full sm:w-[180px] border border-gray-300 shadow-sm">
                                                <SelectValue placeholder="Select a fruit" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Fruits</SelectLabel>
                                                    <SelectItem value="apple">Apple</SelectItem>
                                                    <SelectItem value="banana">Banana</SelectItem>
                                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                                    <SelectItem value="grapes">Grapes</SelectItem>
                                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <button className="w-full sm:w-auto px-3 py-1.5 border border-[#767d86] shadow-xl rounded-lg text-sm bg-white">
                                            Weekly
                                        </button>
                                    </div>
                                </div>

                                {/* Cards Section */}
                                <div className="bg-white rounded-lg shadow-md border border-gray-300 p-3 md:p-5">
                                    {/* Inner Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                                        <div className="bg-[#f2f5f6] rounded-lg p-3 md:p-4 shadow border border-gray-300">
                                            <p className="text-xs md:text-sm text-muted-foreground">Avg. Order Value</p>
                                            <p className="text-lg md:text-xl font-bold">$124.32</p>
                                        </div>
                                        <div className="bg-[#f2f5f6] rounded-lg p-3 md:p-4 shadow border border-gray-300">
                                            <p className="text-xs md:text-sm text-muted-foreground">Last Period Sales</p>
                                            <p className="text-lg md:text-xl font-bold">$901.77</p>
                                        </div>
                                        <div className="bg-[#f2f5f6] rounded-lg p-3 md:p-4 shadow border border-gray-300">
                                            <p className="text-xs md:text-sm text-muted-foreground">Low Stock Products</p>
                                            <p className="text-lg md:text-xl font-bold">7 Items</p>
                                        </div>
                                    </div>

                                    {/* Chart Placeholder */}
                                    <div className="bg-white rounded-xl h-[150px] md:h-[200px] flex items-center justify-center text-gray-400 border border-dashed">
                                        Chart goes here...
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Products Section */}
                        <div className="xl:col-span-8 w-full">
                            <div className="bg-[#f2f5f6f2] rounded-xl p-3 md:p-4 border text-black h-full">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-base md:text-lg font-semibold">Products</h2>
                                            <span className="text-xs md:text-sm text-muted-foreground px-2 py-1 rounded">122</span>
                                        </div>
                                        <div className="h-6 w-px bg-gray-300 mx-2 hidden sm:block"></div>
                                        <div className="relative w-full sm:w-auto">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                            />
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 bg-white w-full sm:w-auto">
                                        <Filter className="w-4 h-4" />
                                        Filter
                                    </button>
                                </div>
                                <ProductsList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App