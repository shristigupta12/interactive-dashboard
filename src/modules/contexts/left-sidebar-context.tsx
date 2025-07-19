import { createContext, useCallback, useContext, useState } from "react";

const LeftSidebarContext = createContext<LeftSidebarContextType | null>(null)

export const useLeftSidebar = () => {
    const context = useContext(LeftSidebarContext)
    if(context === null){
        throw new Error("useLeftSidebar must be used within a LeftSidebarProvider")
    }
    return context;
}

type LeftSidebarContextType = {
    isLeftSidebarOpen: boolean;
    toggleLeftSidebar: () => void;
}

export const LeftSidebarProvider = ({children}: {children: React.ReactNode}) => {
    const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);

    const toggleLeftSidebar = useCallback(() => {
        setIsLeftSidebarOpen(prev => !prev)
    }, [])

    const value = {
        isLeftSidebarOpen,
        toggleLeftSidebar
    }

    return (
        <LeftSidebarContext.Provider value={value}>
            {children}
        </LeftSidebarContext.Provider>
    )
}