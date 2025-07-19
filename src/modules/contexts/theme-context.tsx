import { createContext, useCallback, useContext, useState } from "react";

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(context === null){
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context;
    }

type ThemeContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }, [])

    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}