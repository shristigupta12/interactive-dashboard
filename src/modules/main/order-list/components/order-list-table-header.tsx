import React from 'react';

interface OrderListTableHeaderProps {
  allSelected: boolean;
  someSelected: boolean;
  onSelectAll: (checked: boolean) => void;
}

export const OrderListTableHeader: React.FC<OrderListTableHeaderProps> = ({
  allSelected,
  someSelected,
  onSelectAll
}) => {
  return (
    <thead>
      <tr>
        <th scope="col" className="px-6 py-3 text-left">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={allSelected}
              ref={(input) => {
                if (input) input.indeterminate = someSelected && !allSelected;
              }}
              onChange={(e) => onSelectAll(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>
        </th>
        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-neutral-400 tracking-wider">
          Order ID
        </th>
        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-neutral-400 tracking-wider">
          User
        </th>
        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-neutral-400 tracking-wider">
          Project
        </th>
        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-neutral-400 tracking-wider">
          Address
        </th>
        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-neutral-400 tracking-wider">
          Date
        </th>
        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-neutral-400 tracking-wider">
          Status
        </th>
      </tr>
    </thead>
  );
}; 