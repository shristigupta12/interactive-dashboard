// src/modules/main/order-list/components/order-list-table.tsx
import React from 'react';
import { OrderListTableType } from '../types/order-list-table-type';
import { Table } from '../../../../components/table';
import { useTheme } from '../../../contexts/theme-context';
import { orderListColumns } from '../constants/order-list-columns';

interface OrderListTableProps {
  data: OrderListTableType[];
  selectedRows: string[];
  onSelectAll: (checked: boolean) => void;
  onSelectRow: (id: string, checked: boolean) => void;
  allSelected: boolean;
  someSelected: boolean;
}

export const OrderListTable: React.FC<OrderListTableProps> = ({
  data,
  selectedRows,
  onSelectAll,
  onSelectRow,
  allSelected,
  someSelected
}) => {
  const {theme} = useTheme();

  const columns = orderListColumns(theme, selectedRows, onSelectRow, onSelectAll, allSelected, someSelected);

  // Define the getRowClassName function for row styling
  const getRowClassName = (row: OrderListTableType, isSelected: boolean, currentTheme: string): string => {
    return isSelected
      ? (currentTheme === 'dark' ? 'bg-white/10' : 'bg-blue-50')
      : (currentTheme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-50');
  };

  return (
    <Table
      columns={columns}
      data={data}
      getRowClassName={getRowClassName} // Pass the row class name function
      selectedRows={selectedRows} // Pass selected rows to Table for row styling
    />
  );
};