import { DataContainer } from "../../components/data-container"
import { RevenueMap } from "./revenue-map"
import { RevenueList } from "./revenue-list"

const headingChild = <p className='text-sm font-semibold'>Revenue by Location</p>
const graphChild = (
    <div className="flex flex-col gap-4 h-fit">
        <RevenueMap />
        <RevenueList />
    </div>
)

export const RevenueByLocationMap = () => {
    return(
        <DataContainer headingChild={headingChild} graphChild={graphChild} />
    )
}