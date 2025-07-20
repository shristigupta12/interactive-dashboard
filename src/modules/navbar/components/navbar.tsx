import { Bell, Moon, Sidebar, Star, Sun, ClockCounterClockwise } from "phosphor-react"
import { SearchInput } from "../../../components/search-input"
import { useTheme } from "../../contexts/theme-context"
import { useLeftSidebar } from "../../contexts/left-sidebar-context"
import { useRightSidebar } from "../../contexts/right-sidebar-context"
import { useState } from "react";
import { useLocation } from "@tanstack/react-router"

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
        <nav className={`h-[68px] sticky border-b py-5 px-7 flex items-center justify-between ${theme === 'dark' ? 'bg-black border-neutral-600 text-white' : 'bg-white border-black/10 text-black'} transition-all duration-500`}>
            <div className="flex items-center gap-4 text-sm">
                <Sidebar size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} onClick={toggleLeftSidebar} />
                <Star size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} />
                <p className="text-neutral-500">Dashboards</p>
                <p className="text-neutral-500">/</p>
                <p>{getCurrentPageName()}</p>
            </div>
            <div className="flex items-center gap-4 text-md">
                <SearchInput
                    value={searchTerm}
                    onChange={setSearchTerm}
                    backgroundColor={theme === 'dark' ? 'bg-[#FFFFFF1A]' : 'bg-black/5'}
                />
                {theme === "light" ? (
                    <Moon size={20} weight="duotone" className={`cursor-pointer ${theme === "light" ? 'text-neutral-700' : 'text-white'}`} onClick={toggleTheme} />
                ) : (
                    <Sun size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} onClick={toggleTheme} />
                )}
                <ClockCounterClockwise size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} />
                <Bell size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} />
                <Sidebar size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} onClick={toggleRightSidebar} />
            </div>
        </nav>
    )
}