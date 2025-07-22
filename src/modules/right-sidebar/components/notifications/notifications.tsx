import { Heading } from "../heading"
import { NotificationsData } from "../../data/notifications-data"
import { NotificationItem } from "./notification-item"
import { useRightSidebar } from "../../../contexts/right-sidebar-context"
import { X } from "phosphor-react"
import { useTheme } from "../../../contexts/theme-context"

export const Notifications = () => {
    const {toggleRightSidebar} = useRightSidebar();
    const {theme} = useTheme();
    return(
        <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
                <Heading title="Notifications" />
                <X size={16} className={`text-black/40 lg:hidden block ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`} onClick={()=>{toggleRightSidebar()}} />
            </div>
            <div className="flex flex-col gap-2 w-full">
                {NotificationsData.map((item) => (
                    <NotificationItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}