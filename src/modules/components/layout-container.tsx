import { LeftSidebarProvider } from "../contexts/left-sidebar-context"
import { RightSidebarProvider } from "../contexts/right-sidebar-context"
import { ThemeProvider, useTheme } from "../contexts/theme-context"
import { LeftSidebar } from "../left-sidebar/components/left-sidebar"
import { Main } from "../main/components/main"
import { Navbar } from "../navbar/components/navbar"
import { RightSidebar } from "../right-sidebar/components/right-sidebar"
import { Outlet } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Layout = () => {
    const {theme} = useTheme()
    
    return(
        <LeftSidebarProvider>
            <RightSidebarProvider>
                <LeftSidebar />
                <motion.div 
                    className={`flex-1 h-screen overflow-hidden ${theme === 'dark' ? 'bg-black/90 text-white text-black/20' : 'bg-white text-black'} transition-all duration-500`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Navbar />
                    <motion.div 
                        className="h-[92vh] overflow-y-auto p-4 sm:px-6 lg:p-7"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <Main>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={window.location.pathname}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Outlet />
                                </motion.div>
                            </AnimatePresence>
                        </Main>
                    </motion.div>
                </motion.div>
                <RightSidebar />
            </RightSidebarProvider>
        </LeftSidebarProvider>
    )
}

export const LayoutContainer = () => {
    return (
        <motion.div 
            className="flex min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ThemeProvider>
                <Layout />
            </ThemeProvider>
        </motion.div>
    )
}
