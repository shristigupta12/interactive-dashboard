import { useRightSidebar } from "../../contexts/right-sidebar-context"
import { Sidebar } from "../../../components/sidebar";

export const RightSidebar = () => {
    const {isRightSidebarOpen} = useRightSidebar();
    return(
        <Sidebar direction="right" isOpen={isRightSidebarOpen} width="280">
            oihioudf
        </Sidebar>
    )
}