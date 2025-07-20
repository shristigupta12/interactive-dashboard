import { OverallDetailsData } from "../data/overall-details-data"
import { DetailCard } from "./detail-card"

export const OverallDetails = () => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7">
            {OverallDetailsData?.map((detail) => (
                <DetailCard
                    key={detail.id}
                    detail={detail}
                />
            ))}
        </div>
    )
}