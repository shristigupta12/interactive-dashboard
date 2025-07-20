import { Heading } from "../heading"
import { NotificationsData } from "../../data/notifications-data"
import { NotificationItem } from "./notification-item"

export const Notifications = () => {
    return(
        <div className="flex flex-col gap-2 w-full">
            <Heading title="Notifications" />
            <div className="flex flex-col gap-2 w-full">
                {NotificationsData.map((item) => (
                    <NotificationItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}