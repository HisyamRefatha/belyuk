import { HouseIcon, InboxIcon, SparklesIcon, ZapIcon } from "lucide-react"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { Button } from "@/components/ui/button"
function App() {
    return (
        <ThemeProvider>
            <header className="fixed top-2 md:top-5 w-full px-2 md:px-5 z-50">
                <div className="border border-border/80 rounded-xl bg-card/80 backdrop-blur-md h-12 md:h-16 flex justify-between items-center gap-2 px-4 shadow-lg/2">
                    <div className="flex-1 flex items-center">
                        
                    </div>
                    <div className="grow flex justify-center">

                    </div>
                    <div className="flex-1 flex justify-end items-center gap-4">
                        <Button size="sm" className="text-sm rounded-lg">
                            Share
                        </Button>
                        <ModeToggle/>
                    </div>
                </div>
            </header>
        </ThemeProvider>
    )
}

export default App
