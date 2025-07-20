import { Separator } from "../../../../components/separator"
import { ActivitiesData } from "../../data/activities-data"
import { Heading } from "../heading"
import { ActivitesItem } from "./activities-item"

export const Activities = () => {
    return(
        <div className="flex flex-col gap-2">
            <Heading title="Activities" />
            <div className="flex flex-col">
                {ActivitiesData.map((item, index) => (
                    <div key={item.id} className="flex flex-col">
                        <ActivitesItem item={item} />
                        {index !== ActivitiesData.length - 1 && <Separator direction="vertical" color="neutral-300" length="14px" />}
                    </div>
                ))}
            </div>
        </div>
    )
}