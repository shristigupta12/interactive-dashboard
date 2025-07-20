import { NotificationType } from "../../types/notification-type"
import { NotificationIconColor } from "../../constants/notification-icon-color"

export const NotificationItem = ({item}:{item:NotificationType}) => {
    return(
        <div className="p-1 rounded-[8px] flex gap-2 w-full ">
            <div className={`p-1 rounded-[8px] h-fit ${NotificationIconColor[item.type]}`}>
                <item.icon className="w-4 h-4" />
            </div>
            <div className="flex flex-col w-full rounded-[8px] min-w-0">
                <p className="truncate">{item.title}</p>
                <p className="text-xs text-neutral-500">{item.time}</p>
            </div>
        </div>
    )
}