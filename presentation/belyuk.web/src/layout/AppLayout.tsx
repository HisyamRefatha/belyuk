import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/navbar/navbar";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
    return (
        <ThemeProvider>
            <div className="min-h-screen">
                <Navbar />
                <div className="pt-[72px] md:pt-[96px] p-3 md:p-6">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    )
}


export default AppLayout;