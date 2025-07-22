// src/modules/main/order-list/constants/order-list-columns.tsx
import { ColumnDef } from "@tanstack/react-table";
import { OrderListTableType } from "../types/order-list-table-type";
import { OrderStatusBadge } from "../components/order-status-badge";
import { UserAvatar } from "../components/user-avatar";
import { CalendarBlank } from "phosphor-react";
import React from "react";

export const orderListColumns = (
  theme: string,
  selectedRows: string[],
  onSelectRow: (id: string, checked: boolean) => void,
  onSelectAll?: (checked: boolean) => void,
  allSelected?: boolean,
  someSelected?: boolean
): ColumnDef<OrderListTableType>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={allSelected}
        ref={(input) => {
            if (input) input.indeterminate = Boolean(someSelected && !allSelected);
        }}
        onChange={(e) => onSelectAll?.(e.target.checked)}
        className="h-4 w-4 text-white border-gray-300 rounded checked:bg-black checked:border-black focus:ring-black focus:ring-offset-0 [&:checked]:bg-black [&:checked]:border-black [&:checked]:text-white dark:bg-black dark:border-black dark:[&:checked]:bg-[#C6C7F8] dark:[&:checked]:border-[#C6C7F8]"
        style={{ accentColor: theme === 'dark' ? '#C6C7F8' : 'black' }}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={selectedRows.includes(row.original.id)}
        onChange={(e) => onSelectRow(row.original.id, e.target.checked)}
        className="h-4 w-4 text-white border-gray-300 rounded checked:bg-black checked:border-black focus:ring-black focus:ring-offset-0 [&:checked]:bg-black [&:checked]:border-black [&:checked]:text-white dark:bg-black dark:border-black dark:[&:checked]:bg-[#C6C7F8] dark:[&:checked]:border-[#C6C7F8]"
        style={{ accentColor: theme === 'dark' ? '#C6C7F8' : 'black' }}
      />
    ),
  },
  {
    accessorKey: 'id',
    header: 'Order ID',
    cell: ({ row }) => (
      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-neutral-800'}`}>
        #{row.original.id}
      </span>
    ),
  },
  {
    accessorKey: 'username',
    header: 'User',
    cell: ({ row }) => (
      <div className="flex items-center">
        <UserAvatar username={row.original.username} />
        <div className="ml-4">
          <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-neutral-800'}`}>
            {row.original.username}
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'projectName',
    header: 'Project',
    cell: ({ row }) => (
      <span className={`text-sm ${theme === 'dark' ? 'text-white/90' : 'text-neutral-800'}`}>
        {row.original.projectName}
      </span>
    ),
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => (
      <div className="flex items-center">
        <span className={`text-sm ${theme === 'dark' ? 'text-white/90' : 'text-neutral-800'}`}>
          {row.original.address}
        </span>
        {row.original.address.includes('Nest Lane') && (
          <svg
            className="ml-2 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => (
      <div className="flex items-center text-sm gap-1">
        <CalendarBlank size={16} />
        {row.original.date}
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <OrderStatusBadge status={row.original.status} />,
  },
];