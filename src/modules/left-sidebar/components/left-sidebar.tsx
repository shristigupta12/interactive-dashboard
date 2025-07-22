import { useLeftSidebar } from "../../contexts/left-sidebar-context"
import { UserData } from "../data/user-data"
import { Sidebar } from "../../../components/sidebar";
import { Tabs } from "./tabs";
import { DashboardsList } from "../data/dashboards-list";
import { PagesList } from "../data/pages-list";
import { CollapsibleListItem } from "./collapsible-list-item";
import { useTheme } from "../../contexts/theme-context";
import { X } from "phosphor-react";

export const LeftSidebar = () => {
    const {isLeftSidebarOpen, toggleLeftSidebar} = useLeftSidebar();
    const {theme} = useTheme();
    return (
        <Sidebar direction="left" isOpen={isLeftSidebarOpen} width="w-[100vw] custom-md:w-[50vw] md:w-[212px]">
            <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src={UserData.avatar} alt="user-avatar" className="w-6 h-6 rounded-full" />
                        <p className="truncate">{UserData.name}</p>
                    </div>
                    <X size={16} className={`text-black/40 lg:hidden block ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`} onClick={()=>{toggleLeftSidebar()}} />
                </div>

                <Tabs />

                <div className="flex flex-col gap-1 pb-3">
                    <p className={`px-3 py-1 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Dashboards</p>
                    {DashboardsList.map((item, index) => (
                        <CollapsibleListItem key={index} list={item} />
                    ))}
                </div>

                <div className="flex flex-col gap-1 pb-3">
                    <p className={`px-3 py-1 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Pages</p>
                    {PagesList.map((item, index) => (
                        <CollapsibleListItem key={index} list={item} />
                    ))}
                </div>
            </div>
        </Sidebar>
    )
}