import React from 'react';
import { SearchInput } from '../../../../components/search-input';
import { ArrowsDownUp, FunnelSimple, Plus } from 'phosphor-react';

interface OrderListHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const OrderListHeader: React.FC<OrderListHeaderProps> = ({
  searchTerm,
  onSearchChange
}) => {
  return (
    <div className="bg-[#F7F9FB] rounded-[8px] p-2 gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <div className='p-1'>
            <Plus size={16} className='cursor-pointer font-semibold' />
          </div>
          <div className='p-1'>
            <FunnelSimple size={16} className='cursor-pointer' />
          </div>
          <div className='p-1'>
            <ArrowsDownUp size={16} className='cursor-pointer' />
          </div>
        </div>
        <div className="relative">
          <SearchInput
            value={searchTerm}
            onChange={onSearchChange}
            showIcon={false}
            backgroundColor="bg-white"
            borderColor='border border-neutral-300'
          />
        </div>
      </div>
    </div>
  );
}; 