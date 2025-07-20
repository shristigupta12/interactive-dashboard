import { OverallDetails } from "../overall-details/components/overall-details"
import { ProjectionsVsActualsGraph } from "../projections-vs-actuals-graph/components/projections-vs-actual-graph"
import { RevenueByLocationMap } from "../revenue-by-location-map/components/revenue-by-location-map"
import { RevenueGraph } from "../revenue-graph/components/revenue-graph"
import { TopSellingProducts } from "../top-selling-products/components/top-selling-products"
import { TotalSalesPieChart } from "../total-sales-pie-chart/components/total-sales-pie-chart"

export const Home = () => {
    return(
        <div className="flex flex-col gap-7 font-semibold">
            <p className="px-2 py-1">eCommerce</p>
            <div className="flex flex-col gap-7">
                <div className="grid grid-cols-2 gap-7">
                    <OverallDetails />
                    <ProjectionsVsActualsGraph />
                </div>
                <div className="grid grid-cols-4 gap-7">
                    <div className="col-span-3">
                        <RevenueGraph />
                    </div>
                    <RevenueByLocationMap />
                </div>
                <div className="grid grid-cols-4 gap-7">
                    <div className="col-span-3">
                        <TopSellingProducts />
                    </div>
                    <TotalSalesPieChart />
                </div>
            </div>
        </div>
    )
}