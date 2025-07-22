import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { StackedGraphData } from '../data/stacked-graph-data';
import { GraphXAxis } from '../../../../../components/graph/x-axis';
import { GraphYAxis } from '../../../../../components/graph/y-axis';
import { GraphCartesianGrid } from '../../../../../components/graph/cartesian-grid';
import { DataContainer } from '../../components/data-container';
import { useTheme } from '../../../../contexts/theme-context';
import { motion } from 'framer-motion';

const headingChild = <p className='text-sm font-semibold'>Projections vs Actuals</p>

const graphChild = ({theme}:{theme: string}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
    >
        <ResponsiveContainer width="100%" height={150} className="sm:h-[168px] -ml-6">
            <BarChart data={StackedGraphData} barCategoryGap={-20} barGap={-20}>
                <GraphCartesianGrid />
                <GraphXAxis dataKeyName="month" />
                <GraphYAxis />
                {/* <Tooltip />  will add tooltip later */}
                {/* <Legend /> will add legend later */}
                <Bar dataKey="projection" fill="#CFDFEB" barSize={20} radius={[4,4,0,0]} opacity={0.85} className={`${theme === 'dark' ? 'fill-[#CFDFEB]/50' : 'fill-[#CFDFEB]'}`} />
                <Bar dataKey="actual" fill="#A8C5DA" barSize={20} className={`${theme === 'dark' ? 'fill-[#A8C5DA]/80' : 'fill-[#A8C5DA]'}`} />
            </BarChart>
        </ResponsiveContainer>
    </motion.div>
)

export const ProjectionsVsActualsGraph = () => {
    const {theme} = useTheme()
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <DataContainer headingChild={headingChild} graphChild={graphChild({theme})} justifyCenter={true} />
        </motion.div>
    );
}