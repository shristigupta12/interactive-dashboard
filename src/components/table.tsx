import { ColumnDef, useReactTable, getCoreRowModel } from "@tanstack/react-table"
import { useTheme } from "../modules/contexts/theme-context"

export const Table = ({columns, data}: {columns: ColumnDef<any>[], data: any[]}) => {
    const {theme} = useTheme()
    const table = useReactTable({
        columns, 
        data,
        getCoreRowModel: getCoreRowModel()
    })
    
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg">
                <thead >
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th 
                                    key={header.id}
                                    className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : typeof header.column.columnDef.header === 'string'
                                        ? header.column.columnDef.header
                                        : header.column.columnDef.header?.({ column: header.column, header, table })}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/10' : 'divide-gray-200'}`}>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td 
                                    key={cell.id}
                                    className={`px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white/80' : 'text-black'}`}
                                >
                                    {cell.getValue() as React.ReactNode}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}