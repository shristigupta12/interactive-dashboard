import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StackedGraphData } from '../data/stacked-graph-data';

export const ProjectionsVsActualsGraph = () => {
    return (
        <div className='bg-[#F7F9FB] p-6 rounded-[16px] flex flex-col gap-4'>
            <p className='text-sm font-semibold'>Projections vs Actuals</p>
            <ResponsiveContainer width="100%" height={168}>
                <BarChart data={StackedGraphData} barCategoryGap={-20} barGap={-20}>
                    <CartesianGrid strokeDasharray="3 0" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="month" tickLine={false} tick={{ fontSize: 12, fill: '#a0a1a2', dy: 8, fontWeight: 400 }} />
                    <YAxis
                        tickFormatter={(value) => `${value / 1000000}M`}
                        ticks={[0, 10000000, 20000000, 30000000]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#a0a1a2', dy: -4, dx: -8, fontWeight: 400 }}
                    />
                    {/* <Tooltip />  will add tooltip later */}
                    <Bar dataKey="projection" fill="#CFDFEB" barSize={20} radius={[4,4,0,0]} opacity={0.85} />
                    <Bar dataKey="actual" fill="#A8C5DA" barSize={20}  />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}