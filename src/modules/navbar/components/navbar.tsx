import { Bell, Moon, Sidebar, Star, Sun, ClockCounterClockwise } from "phosphor-react"
import { SearchInput } from "../../../components/search-input"
import { useTheme } from "../../contexts/theme-context"
import { useLeftSidebar } from "../../contexts/left-sidebar-context"
import { useRightSidebar } from "../../contexts/right-sidebar-context"
import { useState } from "react";
import { useLocation } from "react-router-dom"

export const Navbar = () => {
    const {theme,toggleTheme} = useTheme();
    const {toggleLeftSidebar} = useLeftSidebar();
    const {toggleRightSidebar} = useRightSidebar();
    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation();
    const currentPath = location.pathname;
    
    const getCurrentPageName = () => {
        if (currentPath === '/dashboard/default' || currentPath === '/') {
            return 'Default';
        } else if (currentPath === '/dashboard/order-list') {
            return 'Order List';
        }
        return 'Default';
    }
    return (
        <nav className={`h-[68px] sticky border-b py-5 px-4 sm:px-6 lg:px-7 flex items-center justify-between ${theme === 'dark' ? ' border-neutral-600 text-white' : 'bg-white border-black/10 text-black'} transition-all duration-500`}>
            <div className="flex items-center gap-2 sm:gap-4 text-sm">
                <Sidebar size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} onClick={toggleLeftSidebar} />
                <Star size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} />
                <p className="text-neutral-500 hidden sm:block">Dashboards</p>
                <p className="text-neutral-500 hidden sm:block">/</p>
                <p className="truncate">{getCurrentPageName()}</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-md">
                <div className="hidden sm:block">
                    <SearchInput
                        value={searchTerm}
                        onChange={setSearchTerm}
                        backgroundColor={theme === 'dark' ? 'bg-[#FFFFFF1A]' : 'bg-black/5'}
                    />
                </div>
                {theme === "light" ? (
                    <Moon size={20} weight="duotone" className={`cursor-pointer ${theme === "light" ? 'text-neutral-700' : 'text-white'}`} onClick={toggleTheme} />
                ) : (
                    <Sun size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} onClick={toggleTheme} />
                )}
                <ClockCounterClockwise size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'} hidden sm:block`} />
                <Bell size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} />
                <Sidebar size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} onClick={toggleRightSidebar} />
            </div>
        </nav>
    )
}