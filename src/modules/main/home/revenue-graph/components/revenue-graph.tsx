import { LineChart, ResponsiveContainer, Line } from "recharts"
import { DataContainer } from "../../components/data-container"
import { RevenueData } from "../data/revenue-data"
import { GraphCartesianGrid } from "../../../../../components/graph/cartesian-grid"
import { GraphXAxis } from "../../../../../components/graph/x-axis"
import { GraphYAxis } from "../../../../../components/graph/y-axis"
import { useTheme } from "../../../../contexts/theme-context"
import { Separator } from "../../../../../components/separator"
import { motion } from "framer-motion"

const headingChild = <p className='text-sm font-semibold'>Revenue</p>

const processedData = RevenueData.map((d, idx) => ({
    month: d.month,
    previous: d.previous,
    currentSolid: idx <= 3 ? d.current : null,
    currentDashed: idx >= 3 ? d.current : null
  }));
  

const graphChild = ({theme}:{theme: string}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <ResponsiveContainer width="100%" height={250} className="sm:h-[318px] -ml-6">
    <LineChart data={processedData}>
      <GraphCartesianGrid />
      <GraphXAxis dataKeyName="month" />
      <GraphYAxis />

      {/* Previous Week */}
      <Line
        type="natural"
        dataKey="previous"
        stroke="#A8C5DA"
        strokeWidth={3}
        dot={false}
      />

      {/* Current Week solid */}
      <Line
        type="natural"
        dataKey="currentSolid"
        stroke={theme === 'dark' ? "#C6C7F8" : "#000000"}
        strokeWidth={3}
        dot={false}
        connectNulls
      />

      {/* Current Week dashed */}
      <Line
        type="natural"
        dataKey="currentDashed"
        stroke={theme === 'dark' ? "#C6C7F8" : "#000000"}
        strokeWidth={3}
        dot={false}
        strokeDasharray="5 5"
        connectNulls
      />
    </LineChart>
  </ResponsiveContainer>
  </motion.div>
)

const legendChild = ({theme}:{theme: string}) => {
  // Calculate totals for the legend
  const currentTotal = processedData.reduce((sum, item) => {
    const current = item.currentSolid !== null ? item.currentSolid : item.currentDashed;
    return sum + (current || 0);
  }, 0);
  
  const previousTotal = processedData.reduce((sum, item) => sum + (item.previous || 0), 0);

  return (
    <motion.div 
      className="flex items-center gap-4 text-xs"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.8 }}
    >
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        <Separator direction="vertical" color={theme === 'dark' ? '#C6C7F8' : '#000000'} length="100%" />
        <div className={`w-2 h-2 rounded-full  ${theme === 'dark' ? 'bg-[#C6C7F8]' : 'bg-[#000000]'}`}></div>
        <p className="font-thin">Current Week <span className="font-semibold">${currentTotal.toLocaleString()}</span></p>
      </motion.div>
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        <div className={`w-2 h-2 rounded-full bg-[#A8C5DA]`}></div>
        <p className="font-thin">Previous Week <span className="font-semibold">${previousTotal.toLocaleString()}</span></p>
      </motion.div>
    </motion.div>
  );
};

export const RevenueGraph = () => {
    const {theme} = useTheme()
    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <DataContainer 
                headingChild={headingChild} 
                graphChild={graphChild({theme})} 
                legendChild={legendChild({theme})}
                justifyCenter={true}
            />
        </motion.div>
    )
}