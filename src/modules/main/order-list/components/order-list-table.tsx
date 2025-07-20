import React from 'react';
import { OrderListTableType } from '../types/order-list-table-type';
import { OrderListTableRow } from '../components/order-list-table-row';
import { OrderListTableHeader } from '../components/order-list-table-header';

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
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <OrderListTableHeader 
          allSelected={allSelected}
          someSelected={someSelected}
          onSelectAll={onSelectAll}
        />
        <tbody className="bg-white divide-y divide-gray-200">
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