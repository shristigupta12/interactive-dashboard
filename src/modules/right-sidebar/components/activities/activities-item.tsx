import { ActivitiesType } from "../../types/activites-type"

export const ActivitesItem = ({item}:{item:ActivitiesType}) => {
    return(
        <div className="p-1 rounded-[8px] flex gap-2 w-full">
            <div className=" w-6 h-6 rounded-full bg-neutral-100">
                <img src={item.avatar} alt={item.title} className="w-6 h-6 rounded-full" />
            </div>
            <div className="flex flex-col w-full rounded-[8px] min-w-0">
                <p className="truncate w-full">{item.title}</p>
                <p className="text-xs text-black/40">{item.time}</p>
            </div>
        </div>  
    )
}