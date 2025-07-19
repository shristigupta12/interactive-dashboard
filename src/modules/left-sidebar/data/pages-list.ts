import { ListType } from "../types/list-type";
import { IdentificationBadge, IdentificationCard, Notebook, UsersThree, ChatsTeardrop } from "phosphor-react";

export const PagesList: ListType[] = [
    {
        id: "user-profile",
        name: "User Profile",
        icon: IdentificationBadge,
        subList: [
            {
                id: "user-overview",
                name: "Overview"
            },
            {
                id: "user-projects",
                name: "Projects"
            },
            {
                id: "user-campaigns",
                name: "Campaigns"
            },
            {
                id: "user-documents",
                name: "Documents"
            },
            {
                id: "user-followers",
                name: "Followers"
            },
            
        ]
    },
    {
        id: "account",
        name: "Account",
        icon: IdentificationCard,
        subList: [
            {
                id: "account-details",
                name: "Account Details"
            },
            {
                id: "security-privacy",
                name: "Security & Privacy"
            },
            {
                id: "billing-subscription",
                name: "Billing & Subscription"
            },
        ]
    },
    {
        id: "corporate",
        name: "Corporate",
        icon: UsersThree,
        subList: [
            {
                id: "teams",
                name: "Teams"
            },
            {
                id: "departments",
                name: "Departments"
            },
            {
                id: "performance-reports",
                name: "Performance Reports"
            },
        ]
    },
    {
        id: "blog",
        name: "Blog",
        icon: Notebook,
        subList: [
            {
                id: "all-posts",
                name: "All Posts"
            },
            {
                id: "drafts",
                name: "Drafts"
            },
            {
                id: "tags",
                name: "Tags"
            },
        ]
    },
    {
        id: "social",
        name: "Social",
        icon: ChatsTeardrop,
        subList: [
            {
                id: "linked-accounts",
                name: "Linked Accounts"
            },
            {
                id: "social-campaigns",
                name: "Social Campaigns"
            },
            {
                id: "inbox",
                name: "Inbox"
            },
        ]
    },
]