import { YAxis } from "recharts"

export const GraphYAxis = () => {
    return(
        <YAxis
            tickFormatter={(value) => `${value===0 ? '0' : value / 1000000 + 'M'}`}
            ticks={[0, 10000000, 20000000, 30000000]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#a0a1a2', dy: -4, dx: -8, fontWeight: 400 }}
        />
    )
}