import { useRightSidebar } from "../../contexts/right-sidebar-context"
import { Sidebar } from "../../../components/sidebar";
import { Notifications } from "./notifications/notifications";
import { Activities } from "./activities/activites";
import { Contacts } from "./contacts/contacts";


export const RightSidebar = () => {
    const {isRightSidebarOpen} = useRightSidebar();
    return(
        <Sidebar direction="right" isOpen={isRightSidebarOpen} width="w-[280px]">
            <div className="flex flex-col gap-6 text-sm w-full">

                {/* Notifications */}
                <Notifications />

                {/* Activities */}
                <Activities />

                {/* Contacts */}
                <Contacts />

            </div>
        </Sidebar>
    )
}