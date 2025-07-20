import { LineChart, ResponsiveContainer, Line } from "recharts"
import { DataContainer } from "../../components/data-container"
import { RevenueData } from "../data/revenue-data"
import { GraphCartesianGrid } from "../../../../../components/graph/cartesian-grid"
import { GraphXAxis } from "../../../../../components/graph/x-axis"
import { GraphYAxis } from "../../../../../components/graph/y-axis"

const headingChild = <p className='text-sm font-semibold'>Revenue</p>

const processedData = RevenueData.map((d, idx) => ({
    month: d.month,
    previous: d.previous,
    currentSolid: idx <= 3 ? d.current : null,
    currentDashed: idx >= 3 ? d.current : null
  }));
  

const graphChild = (
    <ResponsiveContainer width="100%" height={318}>
  <LineChart data={processedData}>
    <GraphCartesianGrid />
    <GraphXAxis dataKeyName="month" />
    <GraphYAxis />

    {/* Previous Week */}
    <Line
      type="monotone"
      dataKey="previous"
      stroke="#93C5FD"
      strokeWidth={3}
      dot={false}
    />

    {/* Current Week solid */}
    <Line
      type="monotone"
      dataKey="currentSolid"
      stroke="#000000"
      strokeWidth={3}
      dot={false}
      connectNulls
    />

    {/* Current Week dashed */}
    <Line
      type="monotone"
      dataKey="currentDashed"
      stroke="#000000"
      strokeWidth={3}
      dot={false}
      strokeDasharray="5 5"
      connectNulls
    />
  </LineChart>
</ResponsiveContainer>

)

export const RevenueGraph = () => {
    return(
        <DataContainer headingChild={headingChild} graphChild={graphChild} />
    )
}