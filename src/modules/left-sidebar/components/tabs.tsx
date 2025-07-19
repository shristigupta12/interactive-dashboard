import { useState } from "react";
import { FavoritesRecent } from "../data/favorites-recent";

export const TabItem = ({tab}:{tab:string}) => {
    return(
        <div className="w-full px-2 py-1 flex gap-2 rounded-2 items-center">
            <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
            <p>{tab}</p>
        </div>
    )
} 
export const Tabs = () => {
    const [activeTab, setActiveTab] = useState("favorites");    
    return(
        <div className="flex flex-col gap-1 pb-3">
            <div className="flex items-center gap-2">
                <p className={`cursor-pointer ${activeTab === "favorites" ? "text-neutral-500" : "text-neutral-400"}`} onClick={() => setActiveTab("favorites")}>Favorites</p>
                <p className={`cursor-pointer ${activeTab === "recently" ? "text-neutral-500" : "text-neutral-400"}`} onClick={() => setActiveTab("recently")}>Recently</p>
            </div>
            {activeTab=='favorites' ?
                <div className="flex flex-col gap-1">
                    {FavoritesRecent.favorites.map((item) => (
                        <TabItem key={item.id} tab={item.name} />
                    ))}
                </div>
            :
                <div className="flex flex-col gap-1">
                    {FavoritesRecent.recent.map((item) => (
                        <TabItem key={item.id} tab={item.name} />
                    ))}
                </div>
            }
        </div>
    )
}