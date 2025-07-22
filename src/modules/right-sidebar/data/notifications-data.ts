import { BugBeetle, Globe, User } from "phosphor-react";
import { NotificationType } from "../types/notification-type";

export const NotificationsData : NotificationType[] = [
    {
        id: 'bug1',
        title: 'You have a bug that needs to be fixed',
        icon: BugBeetle,
        time: 'Just Now', // TODO iso format of date
        type: 'bug'
    },
    {
        id: 'user1',
        title: 'New user registered',
        icon: User,
        time: '12:00 AM', // TODO iso format of date
        type: 'user'
    },
    {
        id: 'bug2',
        title: 'You have a bug that needs to be fixed',
        icon: BugBeetle,
        time: '10:00 AM', // TODO iso format of date
        type: 'bug'
    },
    {
        id: 'subscribe1',
        title: 'Andi Lane subscribed to you',
        icon: Globe,
        time: 'Today, 4:00 AM', // TODO iso format of date
        type: 'subscribe'
    },
]