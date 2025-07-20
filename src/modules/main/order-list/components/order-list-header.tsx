import React from 'react';
import { SearchInput } from '../../../../components/search-input';
import { ArrowsDownUp, FunnelSimple, Plus } from 'phosphor-react';
import { useTheme } from '../../../contexts/theme-context';

interface OrderListHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const OrderListHeader: React.FC<OrderListHeaderProps> = ({
  searchTerm,
  onSearchChange
}) => {
  const {theme} = useTheme()
  return (
    <div className={`${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-[#F7F9FB] text-black'} rounded-[8px] p-2 gap-4`}>
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
            backgroundColor={theme === 'dark' ? 'bg-black/10' : 'bg-white'}
            borderColor={theme === 'dark' ? 'border border-white/10' : 'border border-neutral-300'}
          />
        </div>
      </div>
    </div>
  );
}; 