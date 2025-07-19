import { useLeftSidebar } from "../../contexts/left-sidebar-context"

export const LeftSidebar = () => {
    const {isLeftSidebarOpen} = useLeftSidebar();
    return (
        <div className={` border-r border-black/10 min-h-screen transition-all duration-300 ${isLeftSidebarOpen ? "w-[212px] opacity-100" : "w-0 opacity-0" }`}>
            jhghb
        </div>
    )
}