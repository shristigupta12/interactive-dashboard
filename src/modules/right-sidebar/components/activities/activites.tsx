import { Separator } from "../../../../components/separator"
import { ActivitiesData } from "../../data/activities-data"
import { Heading } from "../heading"
import { ActivitesItem } from "./activities-item"
import { useTheme } from "../../../contexts/theme-context"

export const Activities = () => {
    const {theme} = useTheme();
    return(
        <div className="flex flex-col gap-2">
            <Heading title="Activities" />
            <div className="flex flex-col">
                {ActivitiesData.map((item, index) => (
                    <div key={item.id} className="flex flex-col">
                        <ActivitesItem item={item} />
                        {index !== ActivitiesData.length - 1 && (
                            <div className="pl-[14px] -mt-2 mb-1">
                                <Separator direction="vertical" color={theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} length="h-[14px]" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}