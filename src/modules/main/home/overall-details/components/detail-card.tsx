import { TrendDown, TrendUp } from "phosphor-react";
import { DetailsType } from "../types/details-type";

export const DetailCard = ({detail}: {detail: DetailsType}) => {
    return(
        <div className={`w-full h-full rounded-[16px] ${detail.color} p-6 flex flex-col gap-2 `}>
            <p className="text-sm font-semibold">{detail.title}</p>
            <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">{detail.value}</p>
                <div className="flex items-center gap-1 rounded-[8px]">
                    <p className="text-sm font-medium">{detail.changeType==="positive" ? "+" : detail.changeType==="negative" ? "-" : ""} {detail.percentageChange}</p>
                    {detail.changeType==="positive" ? <TrendUp weight="fill" size={16} /> : detail.changeType==="negative" ? <TrendDown weight="fill" size={16} />: <></>}
                </div>
            </div>
        </div>
    )
}