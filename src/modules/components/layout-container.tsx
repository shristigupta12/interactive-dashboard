import { LeftSidebarProvider } from "../contexts/left-sidebar-context"
import { RightSidebarProvider } from "../contexts/right-sidebar-context"
import { ThemeProvider } from "../contexts/theme-context"
import { LeftSidebar } from "../left-sidebar/components/left-sidebar"
import { Main } from "../main/components/main"
import { Navbar } from "../navbar/components/navbar"
import { RightSidebar } from "../right-sidebar/components/right-sidebar"

export const LayoutContainer = () => {
    return (
        <div className="flex ">
            <ThemeProvider>
                <LeftSidebarProvider>
                    <RightSidebarProvider>
                        <LeftSidebar />
                        <div className="flex-1">
                            <Navbar />
                            <Main />
                        </div>
                        <RightSidebar />
                    </RightSidebarProvider>
                </LeftSidebarProvider>
            </ThemeProvider>
        </div>
    )
}