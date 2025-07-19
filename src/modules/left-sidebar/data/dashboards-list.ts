import { ChartPieSlice, ShoppingBagOpen, Folder, BookOpen } from "phosphor-react"
import { ListType } from "../types/list-type"

export const DashboardsList: ListType[] = [
    {
        id: "default",
        name: "Default",
        icon: ChartPieSlice,
    },
    {
        id: "ecommerce",
        name: "eCommerce",
        icon: ShoppingBagOpen,
        subList: [
            {
                id: "sales-overview",
                name: "Sales Overview"
            },
            {
                id: "customer-behavior",
                name: "Customer Behavior"
            },
            {
                id: "order-management",
                name: "Order Management"
            }
        ]
    },
    {
        id: "projects",
        name: "Projects",
        icon: Folder,
        subList: [
            {
                id: "jira",
                name: "Jira"
            },
            {
                id: "github",
                name: "Github"
            },
            
        ]
    },
    {
        id: "onlineCourses",
        name: "Online Courses",
        icon: BookOpen,
        subList: [
            {
                id: "learning-management-systems",
                name: "Learning Management Systems"
            },
            {
                id: "corporate-learning-dashboard",
                name: "Corporate Learning Dashboard"
            },
            
        ]
    }
]