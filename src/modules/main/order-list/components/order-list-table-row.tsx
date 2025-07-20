import React from 'react';
import { OrderListTableType } from '../types/order-list-table-type';
import { OrderStatusBadge } from '../components/order-status-badge';
import { UserAvatar } from './user-avatar';
import { CalendarBlank } from 'phosphor-react';
import { useTheme } from '../../../contexts/theme-context';

interface OrderListTableRowProps {
  order: OrderListTableType;
  isSelected: boolean;
  onSelect: (checked: boolean) => void;
}

export const OrderListTableRow: React.FC<OrderListTableRowProps> = ({
  order,
  isSelected,
  onSelect
}) => {
  const {theme} = useTheme()
    return (
    <tr className={isSelected ? theme === 'dark' ? 'bg-white/10' : 'bg-blue-50' : theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-50'}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => onSelect(e.target.checked)}
            className="h-4 w-4 text-black data-[state=checked]:bg-black data-[state=checked]:text-white border-gray-300 rounded"
          />
        </div>
      </td>
      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-neutral-800'}`}>
        #{order.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <UserAvatar username={order.username} />
          <div className="ml-4">
            <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-neutral-800'}`}>{order.username}</div>
          </div>
        </div>
      </td>
      <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-white/90' : 'text-neutral-800'}`}>
        {order.projectName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <span className={`text-sm ${theme === 'dark' ? 'text-white/90' : 'text-neutral-800'}`}>{order.address}</span>
          {order.address.includes('Nest Lane') && (
            <svg className="ml-2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center text-sm gap-1">
          <CalendarBlank size={16} />
          {order.date}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <OrderStatusBadge status={order.status} />
      </td>
    </tr>
  );
}; 