import { LeftSidebarProvider } from "../contexts/left-sidebar-context"
import { RightSidebarProvider } from "../contexts/right-sidebar-context"
import { ThemeProvider } from "../contexts/theme-context"
import { LeftSidebar } from "../left-sidebar/components/left-sidebar"
import { Main } from "../main/components/main"
import { Home } from "../main/home/components/home"
import { Navbar } from "../navbar/components/navbar"
import { RightSidebar } from "../right-sidebar/components/right-sidebar"

export const LayoutContainer = () => {
    return (
        <div className="flex">
            <ThemeProvider>
                <LeftSidebarProvider>
                    <RightSidebarProvider>
                        <LeftSidebar />
                        <div className="flex-1 h-screen overflow-hidden">
                            <Navbar />
                            <div className="h-full overflow-y-auto pb-7">
                                <Main>
                                    <Home />
                                </Main>
                            </div>
                        </div>
                        <RightSidebar />
                    </RightSidebarProvider>
                </LeftSidebarProvider>
            </ThemeProvider>
        </div>
    )
}