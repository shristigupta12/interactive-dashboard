import { useTheme } from "../modules/contexts/theme-context"

export const Sidebar = ({direction, isOpen, children, width}:{direction: string; isOpen: boolean; children: React.ReactNode, width: string}) => {
    const {theme} = useTheme()
    return (
        <div className={`relative  min-h-screen ${direction==='right'? 'border-l': 'border-r'} ${theme === 'dark' ? 'bg-black border-neutral-600 text-white' : 'bg-white border-black/10 text-black'} transition-all duration-500 ${isOpen ?`${width} `: "w-0" }`}>
            <div className={`fixed h-screen py-5 overflow-y-auto overflow-x-hidden transition-all duration-500 ease-in-out ${isOpen ? `${width} ${direction==="right"? "px-5":"px-4"}`: "w-0"}`}>
                {children}
            </div>
        </div>
    )
}