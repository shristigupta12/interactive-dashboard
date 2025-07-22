import { NotificationType } from "../../types/notification-type"
import { NotificationIconColor } from "../../constants/notification-icon-color"
import { useTheme } from "../../../contexts/theme-context"

export const NotificationItem = ({item}:{item:NotificationType}) => {
    const {theme} = useTheme();
    return(
        <div className="p-1 rounded-[8px] flex gap-2 w-full ">
            <div className={`p-1 rounded-[8px] h-fit ${NotificationIconColor[item.type]}`}>
                <item.icon className="w-4 h-4 text-black" />
            </div>
            <div className="flex flex-col w-full rounded-[8px] min-w-0">
                <p className="truncate">{item.title}</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>{item.time}</p>
            </div>
        </div>
    )
}