import { LeftSidebarProvider } from "../contexts/left-sidebar-context"
import { RightSidebarProvider } from "../contexts/right-sidebar-context"
import { ThemeProvider, useTheme } from "../contexts/theme-context"
import { LeftSidebar } from "../left-sidebar/components/left-sidebar"
import { Main } from "../main/components/main"
import { Home } from "../main/home/components/home"
import { OrderList } from "../main/order-list/components/order-list"
import { Navbar } from "../navbar/components/navbar"
import { RightSidebar } from "../right-sidebar/components/right-sidebar"

const Layout = () => {
    const {theme} = useTheme()
    return(
        <LeftSidebarProvider>
            <RightSidebarProvider>
                <LeftSidebar />
                <div className={`flex-1 h-screen overflow-hidden ${theme === 'dark' ? 'bg-black text-white text-black/20' : 'bg-white text-black'} transition-all duration-500`}>
                    <Navbar />
                    <div className="h-full overflow-y-auto pb-7">
                        <Main>
                            <Home />
                            <OrderList />
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
        <div className="flex">
            <ThemeProvider>
                <Layout />
            </ThemeProvider>
        </div>
    )
}
