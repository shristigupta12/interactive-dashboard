import { DataContainer } from "../../components/data-container"
import { TopSellingProductsTableColumns } from "../constants/top-selling-products-table-columns"
import { TopSellingProductsTableData } from "../data/top-selling-products-table-data"
import { Table } from "../../../../../components/table"

const headingChild = <p className="font-semibold text-sm">Top Selling Products</p>

const graphChild = () => {
    return(
        <Table columns={TopSellingProductsTableColumns} data={TopSellingProductsTableData} />
    )
}

export const TopSellingProducts = () => {
    return(
        <DataContainer headingChild={headingChild} graphChild={graphChild()} />
    )
}