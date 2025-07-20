import { useLeftSidebar } from "../../contexts/left-sidebar-context"
import { UserData } from "../data/user-data"
import { Sidebar } from "../../../components/sidebar";
import { Tabs } from "./tabs";
import { DashboardsList } from "../data/dashboards-list";
import { PagesList } from "../data/pages-list";
import { CollapsibleListItem } from "./collapsible-list-item";

export const LeftSidebar = () => {
    const {isLeftSidebarOpen} = useLeftSidebar();
    return (
        <Sidebar direction="left" isOpen={isLeftSidebarOpen} width="w-[212px]">
            <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <img src={UserData.avatar} alt="user-avatar" className="w-6 h-6 rounded-full" />
                    <p>{UserData.name}</p>
                </div>

                <Tabs />

                <div className="flex flex-col gap-1">
                    <p>Dashboards</p>
                    {DashboardsList.map((item, index) => (
                        <CollapsibleListItem key={index} list={item} />
                    ))}
                </div>

                <div className="flex flex-col gap-1">
                    <p>Pages</p>
                    {PagesList.map((item, index) => (
                        <CollapsibleListItem key={index} list={item} />
                    ))}
                </div>
            </div>
        </Sidebar>
    )
}