import { ThemeProvider } from "@/components/theme/theme-provider"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
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
import { cn } from "@/lib/utils"
function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen">
                {/* Header/Navbar */}
                <header className="fixed top-2 md:top-5 w-full px-2 md:px-5 z-50">
                    <div className="rounded-xl h-12 md:h-16 flex justify-between items-center gap-2 px-4">
                        <div className="flex-1 flex items-center">
                            <Link className="inline-flex" to="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29"
                                    height="32"
                                    aria-label="Schema Visualizer"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M0 12v12.8h4.028a3.242 3.242 0 0 1 2.278.937A3.199 3.199 0 0 1 7.25 28v4h9.667L29 20V7.2h-4.028a3.242 3.242 0 0 1-2.278-.937A3.2 3.2 0 0 1 21.75 4V0h-9.667L0 12Zm13.694 12H8.056v-8.8l7.25-7.2h5.638v8.8l-7.25 7.2Z"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <div className="grow flex justify-center" />
                        <div className="flex-1 flex justify-end items-center gap-4">
                            <Button size="sm" className="text-sm rounded-lg">
                                Share
                            </Button>
                            <ModeToggle />
                        </div>
                    </div>
                </header>

                {/* Content Section */}
                <div className="pt-[72px] md:pt-[96px] p-6">
                    {/* Top Greeting Section */}
                    <div className="bg-card rounded-xl p-4 mb-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-white mb-1">Hello Antoine</h1>
                                <p className="text-gray-400 text-sm">Displaying the data from June 2025</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <button className="px-3 py-1.5 border border-gray-600 rounded-lg text-gray-300 hover:bg-slate-700 text-sm">Daily</button>
                                <button className="px-3 py-1.5 border border-gray-600 rounded-lg text-gray-300 hover:bg-slate-700 text-sm">Weekly</button>
                                <button className="px-3 py-1.5 bg-slate-600 text-white rounded-lg text-sm">Monthly</button>
                                <button className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm">
                                    <Plus className="w-4 h-4" />
                                    Add Product Batch
                                </button>
                            </div>
                        </div>

                        {/* Row 1 - Main Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-8">
                            {/* Total Sales */}
                            <div className="bg-teal rounded-xl p-4 border">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-muted rounded-lg border border-[#55979f] flex items-center justify-center">
                                            <DollarSign className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground text-xs">Total sales</p>
                                            <p className="text-xl font-bold text-card-foreground">$ 1,284.00</p>
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
                                    <span className="text-muted-foreground">VS PREV. 30 DAYS</span>
                                </div>
                            </div>

                            {/* Total Products */}
                            <div className="bg-teal rounded-xl p-4 border">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-muted rounded-lg border border-[#55979f] flex items-center justify-center">
                                            <Package className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground text-xs">Total Products</p>
                                            <p className="text-xl font-bold text-card-foreground">122</p>
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
                                    <span className="text-muted-foreground">VS PREV. 30 DAYS</span>
                                </div>
                            </div>

                            {/* Latest Churn */}
                            <div className="bg-teal rounded-xl p-4 border">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-muted rounded-lg border border-[#55979f] flex items-center justify-center">
                                            <Users className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground text-xs">% Latest Churn</p>
                                            <p className="text-xl font-bold text-card-foreground">7.81</p>
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
                                    <span className="text-muted-foreground">VS PREV. 30 DAYS</span>
                                </div>
                            </div>

                            {/* AI Actions */}
                            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl p-4 relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Activity className="w-4 h-4 text-emerald-200" />
                                        <span className="text-emerald-200 text-xs">Actions</span>
                                    </div>
                                    <p className="text-white font-semibold text-sm mb-1">Reconnected with AI</p>
                                    <p className="text-emerald-200 text-xs mb-3">Runtime update</p>
                                    <button className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs px-3 py-1 rounded-lg">
                                        See AI Actions
                                    </button>
                                </div>
                                <div className="absolute -top-2 -right-2 w-16 h-16 bg-emerald-400 opacity-20 rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* Row 2 - Example Row for Additional Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-14 gap-4  mt-8 mb-8">
                        <div className="lg:col-span-6 w-full">
                            <div className="bg-[#f2f5f6f2] rounded-xl p-4 border text-black">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <h1 className="text-2md font-bold text-black mb-1">Quick Analytics</h1>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Select>
                                            <SelectTrigger className="w-[180px] border border-gray-300 shadow-sm">
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
                                        <button className="px-3 py-1.5 border border-[#767d86] shadow-xl rounded-lg text-sm bg-white">
                                            Weekly
                                        </button>
                                    </div>
                                </div>

                                {/* Cards Section */}
                                <div className="bg-white rounded-lg shadow-md border border-gray-300 p-5">
                                    {/* Tambahkan padding di sini (p-6) agar isi tidak menempel ke tepi */}

                                    {/* Card bagian dalam */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-[#f2f5f6] rounded-lg p-4 shadow border border-gray-300">
                                            <p className="text-sm text-muted-foreground">Avg. Order Value</p>
                                            <p className="text-xl font-bold">$124.32</p>
                                        </div>
                                        <div className="bg-[#f2f5f6] rounded-lg p-4 shadow border border-gray-300">
                                            <p className="text-sm text-muted-foreground">Last Period Sales</p>
                                            <p className="text-xl font-bold">$901.77</p>
                                        </div>
                                        <div className="bg-[#f2f5f6] rounded-lg p-4 shadow border border-gray-300">
                                            <p className="text-sm text-muted-foreground">Low Stock Products</p>
                                            <p className="text-xl font-bold">7 Items</p>
                                        </div>
                                    </div>

                                    {/* Chart Placeholder */}
                                    <div className="bg-white rounded-xl h-[200px] flex items-center justify-center text-gray-400 border border-dashed">
                                        Chart goes here...
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-8 w-full">
                            <div className="bg-[#f2f5f6f2] rounded-xl p-4 border text-black h-full">
                                <h2 className="text-lg font-semibold mb-2">Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
