import { TrendDown, TrendUp } from "phosphor-react";
import { useTheme } from "../../../../contexts/theme-context";
import { DetailsType } from "../types/details-type";
import { useLeftSidebar } from "../../../../contexts/left-sidebar-context";
import { useRightSidebar } from "../../../../contexts/right-sidebar-context";
import { useState, useEffect } from "react";

export const DetailCard = ({detail}: {detail: DetailsType}) => {
    const {theme} = useTheme()
    

    return(
        <div className={`w-full h-full rounded-[16px] ${theme === 'dark' ? detail.darkModeColor : detail.color} p-4 sm:p-6 flex flex-col gap-2 `}>
            <p className={`text-sm font-semibold ${theme === 'dark' ? detail.darkModeTextColor : detail.textColor}`}>{detail.title}</p>
            <div className="flex items-center justify-between">
                <p className={`xl:text-[24px] text-[20px] font-semibold  ${theme === 'dark' ? detail.darkModeTextColor : detail.textColor}`}>{detail.value}</p>
                <div className="flex items-center gap-1 rounded-[8px]">
                    <p className={`text-xs font-[400] ${theme === 'dark' ? detail.darkModeTextColor : detail.textColor}`}>{detail.changeType==="positive" ? "+" : detail.changeType==="negative" ? "-" : ""} {detail.percentageChange}%</p>
                    {detail.changeType==="positive" ? <TrendUp weight="fill" size={16} className={`${theme === 'dark' ? detail.darkModeTextColor : detail.textColor}`} /> : detail.changeType==="negative" ? <TrendDown weight="fill" size={16} className={`${theme === 'dark' ? detail.darkModeTextColor : detail.textColor} rotate-90`} />: <></>}
                </div>
            </div>
        </div>
    )
}