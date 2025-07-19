import { Bell, Moon, Sidebar, Star, Sun, ClockCounterClockwise } from "phosphor-react"
import { SearchInput } from "../../../components/search-input"
import { useTheme } from "../../contexts/theme-context"
import { useLeftSidebar } from "../../contexts/left-sidebar-context"
import { useRightSidebar } from "../../contexts/right-sidebar-context"

export const Navbar = () => {
    const {theme,toggleTheme} = useTheme();
    const {toggleLeftSidebar} = useLeftSidebar();
    const {toggleRightSidebar} = useRightSidebar();

    return (
        <nav className="h-[68px] sticky border-b border-black/10 py-5 px-7 flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
                <Sidebar size={20} weight="duotone" className="cursor-pointer text-neutral-700" onClick={toggleLeftSidebar} />
                <Star size={20} weight="duotone" className="cursor-pointer text-neutral-700" />
                <p className="text-neutral-500">Dashboards</p>
                <p className="text-neutral-500">/</p>
                <p>Default</p>
            </div>
            <div className="flex items-center gap-4 text-md">
                <SearchInput />
                {theme === "light" ? (
                    <Moon size={20} weight="duotone" className="cursor-pointer text-neutral-700" onClick={toggleTheme} />
                ) : (
                    <Sun size={20} weight="duotone" className="cursor-pointer text-neutral-700" onClick={toggleTheme} />
                )}
                <ClockCounterClockwise size={20} weight="duotone" className="cursor-pointer text-neutral-700" />
                <Bell size={20} weight="duotone" className="cursor-pointer text-neutral-700" />
                <Sidebar size={20} weight="duotone" className="cursor-pointer text-neutral-700" onClick={toggleRightSidebar} />
            </div>
        </nav>
    )
}