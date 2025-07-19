import { useRightSidebar } from "../../contexts/right-sidebar-context"

export const RightSidebar = () => {
    const {isRightSidebarOpen} = useRightSidebar();
    return(
        <div className={`w-[280px] min-h-screen border-l border-black/10 transition-all duration-300 ${isRightSidebarOpen ? "w-[280px] opacity-100" : "w-0 opacity-0" }`}>
            jhvhv
        </div>
    )
}