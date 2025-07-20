import React from 'react';
import { OrderListTableType } from '../types/order-list-table-type';
import { OrderListTableRow } from '../components/order-list-table-row';
import { OrderListTableHeader } from '../components/order-list-table-header';
import { useTheme } from '../../../contexts/theme-context';

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
  const {theme} = useTheme()
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
        <OrderListTableHeader 
          allSelected={allSelected}
          someSelected={someSelected}
          onSelectAll={onSelectAll}
        />
        <tbody className={`${theme === 'dark' ? 'bg-black/10 text-white' : 'bg-white text-black'} divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
          {data.map((order) => (
            <OrderListTableRow
              key={order.id}
              order={order}
              isSelected={selectedRows.includes(order.id)}
              onSelect={(checked) => onSelectRow(order.id, checked)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}; 