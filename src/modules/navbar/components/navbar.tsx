import { Bell, Moon, Sidebar, Star, Sun, ClockCounterClockwise, MagnifyingGlass } from "phosphor-react"
import { SearchInput } from "../../../components/search-input"
import { useTheme } from "../../contexts/theme-context"
import { useLeftSidebar } from "../../contexts/left-sidebar-context"
import { useRightSidebar } from "../../contexts/right-sidebar-context"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"

export const Navbar = () => {
    const {theme,toggleTheme} = useTheme();
    const {toggleLeftSidebar, isLeftSidebarOpen} = useLeftSidebar();
    const {toggleRightSidebar, isRightSidebarOpen} = useRightSidebar();
    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation();
    const currentPath = location.pathname;
    const [searchInputVisible, setSearchInputVisible] = useState(false)

    useEffect(() => {
        if(isLeftSidebarOpen || isRightSidebarOpen){
            setSearchInputVisible(false)
        }else{
            setSearchInputVisible(true)
        }
    }, [isLeftSidebarOpen, isRightSidebarOpen])

    const handleSearchIconClick = () => {
        if(isLeftSidebarOpen) toggleLeftSidebar()
        if(isRightSidebarOpen) toggleRightSidebar()
        setSearchInputVisible(true)
    }
    
    const getCurrentPageName = () => {
        if (currentPath === '/dashboard/default' || currentPath === '/') {
            return 'Default';
        } else if (currentPath === '/dashboard/order-list') {
            return 'Order List';
        }
        return 'Default';
    }
    return (
        <nav className={`h-[68px] sticky border-b py-5 px-2 lg:px-7 flex items-center justify-between gap-2 ${theme === 'dark' ? ' border-neutral-600 text-white' : 'bg-white border-black/10 text-black'} transition-all duration-500`}>
            <div className="flex items-center gap-2 lg:gap-4 text-sm">
                <Sidebar size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} onClick={toggleLeftSidebar} />
                <Star size={20} weight="duotone" className={`cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-700'}`} />
                <p className={`${theme === 'dark' ? 'text-white/40' : 'text-black/40'} hidden lg:block`}>Dashboards</p>
                <p className={`${theme === 'dark' ? 'text-white/40' : 'text-black/40'} hidden lg:block`}>/</p>
                <p className="truncate">{getCurrentPageName()}</p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4 text-md">
                <div className={`w-[160px] hidden lg:block `}>
                    <SearchInput
                        value={searchTerm}
                        onChange={setSearchTerm}
                        backgroundColor={theme === 'dark' ? 'bg-white/10' : 'bg-black/5'}
                    />
                </div>
                <div className={`w-[160px] lg:hidden visible w-fit`}>
                    {!searchInputVisible ?
                        <MagnifyingGlass size={20} onClick={handleSearchIconClick}/>
                        :
                        <SearchInput
                            value={searchTerm}
                            onChange={setSearchTerm}
                            backgroundColor={theme === 'dark' ? 'bg-white/10' : 'bg-black/5'}
                        />
                    }
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