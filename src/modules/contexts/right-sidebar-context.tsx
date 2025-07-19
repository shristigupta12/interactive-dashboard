import { createContext, useCallback, useContext, useState } from "react";

const RightSidebarContext = createContext<RightSidebarContextType | null>(null)

export const useRightSidebar = () => {
    const context = useContext(RightSidebarContext)
    if(context === null){
        throw new Error("useLeftSidebar must be used within a LeftSidebarProvider")
    }
    return context;
}

type RightSidebarContextType = {
    isRightSidebarOpen: boolean;
    toggleRightSidebar: () => void;
}

export const RightSidebarProvider = ({children}: {children: React.ReactNode}) => {
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

    const toggleRightSidebar = useCallback(() => {
        setIsRightSidebarOpen(prev => !prev)
    }, [])

    const value = {
        isRightSidebarOpen,
        toggleRightSidebar
    }

    return (
        <RightSidebarContext.Provider value={value}>
            {children}
        </RightSidebarContext.Provider>
    )
}