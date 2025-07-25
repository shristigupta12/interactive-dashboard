import { useTheme } from "../../../contexts/theme-context"
import { OverallDetails } from "../overall-details/components/overall-details"
import { ProjectionsVsActualsGraph } from "../projections-vs-actuals-graph/components/projections-vs-actual-graph"
import { RevenueByLocationMap } from "../revenue-by-location-map/components/revenue-by-location-map"
import { RevenueGraph } from "../revenue-graph/components/revenue-graph"
import { TopSellingProducts } from "../top-selling-products-table/components/top-selling-products"
import { TotalSalesPieChart } from "../total-sales-pie-chart/components/total-sales-pie-chart"

export const Home = () => {
    const {theme} = useTheme()
    return(
        <div className="flex flex-col gap-4 sm:gap-7 font-semibold">
            <p className={`px-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>eCommerce</p>
            <div className="flex flex-col gap-4 sm:gap-7">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-7">
                    <OverallDetails />
                    <ProjectionsVsActualsGraph />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-7">
                    <div className="xl:col-span-3">
                        <RevenueGraph />
                    </div>
                    <RevenueByLocationMap />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-7">
                    <div className="xl:col-span-3">
                        <TopSellingProducts />
                    </div>
                    <TotalSalesPieChart />
                </div>
            </div>
        </div>
    )
}