import { LeftSidebarProvider } from "../contexts/left-sidebar-context"
import { RightSidebarProvider } from "../contexts/right-sidebar-context"
import { ThemeProvider, useTheme } from "../contexts/theme-context"
import { LeftSidebar } from "../left-sidebar/components/left-sidebar"
import { Main } from "../main/components/main"
import { Navbar } from "../navbar/components/navbar"
import { RightSidebar } from "../right-sidebar/components/right-sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    const {theme} = useTheme()
    
    return(
        <LeftSidebarProvider>
            <RightSidebarProvider>
                <LeftSidebar />
                <div className={`flex-1 h-screen overflow-hidden ${theme === 'dark' ? 'bg-black text-white text-black/20' : 'bg-white text-black'} transition-all duration-500`}>
                    <Navbar />
                    <div className="h-full overflow-y-auto px-4 sm:px-6 lg:p-7">
                        <Main>
                            <Outlet />
                        </Main>
                    </div>
                </div>
                <RightSidebar />
            </RightSidebarProvider>
        </LeftSidebarProvider>
    )
}

export const LayoutContainer = () => {
    return (
        <div className="flex min-h-screen">
            <ThemeProvider>
                <Layout />
            </ThemeProvider>
        </div>
    )
}
