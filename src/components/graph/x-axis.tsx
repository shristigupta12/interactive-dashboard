import { XAxis } from "recharts"

export const GraphXAxis = ({dataKeyName}:{dataKeyName:string}) => {
    return(
        <XAxis dataKey={dataKeyName} tickLine={false} tick={{ fontSize: 12, fill: '#a0a1a2', dy: 8, fontWeight: 400 }} />
    )
}