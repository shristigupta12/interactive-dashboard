import { useState } from "react";
import { FavoritesRecent } from "../data/favorites-recent";
import { useTheme } from "../../contexts/theme-context";

export const TabItem = ({tab, theme}:{tab:string, theme:string}) => {
    const [hovered, setHovered] = useState(false)
    return(
        <div className={`flex gap-2 items-center rounded-[8px] py-1 pr-2 w-full ${theme === 'dark' ? 'hover:bg-white/15' : 'hover:bg-neutral-100'} cursor-pointer`}  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className="flex items-center">
                <div className={`w-1 h-4 rounded-full ${hovered ? theme === 'dark' ? 'bg-white' : 'bg-black' : 'bg-transparent'}`}></div>
                <div className="size-4"></div>
            </div>
            <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
            <p>{tab}</p>
        </div>
    )
} 
export const Tabs = () => {
    const [activeTab, setActiveTab] = useState("favorites");  
    const {theme} = useTheme()
    return(
        <div className="flex flex-col gap-1 pb-3">
            <div className="flex items-center gap-4">
                <p className={`cursor-pointer ${activeTab === "favorites" ? theme === 'dark' ? "text-white" : "text-black" : theme === 'dark' ? "text-neutral-400" : "text-neutral-500"}`} onClick={() => setActiveTab("favorites")}>Favorites</p>
                <p className={`cursor-pointer ${activeTab === "recently" ? theme === 'dark' ? "text-white" : "text-black" : theme === 'dark' ? "text-neutral-400" : "text-neutral-500"}`} onClick={() => setActiveTab("recently")}>Recently</p>
            </div>
            {activeTab==='favorites' ?
                <div className="flex flex-col gap-1">
                    {FavoritesRecent.favorites.map((item) => (
                        <TabItem key={item.id} tab={item.name} theme={theme} />
                    ))}
                </div>
            :
                <div className="flex flex-col gap-1">
                    {FavoritesRecent.recent.map((item) => (
                        <TabItem key={item.id} tab={item.name} theme={theme} />
                    ))}
                </div>
            }
        </div>
    )
}