import React, { useState, useEffect, useRef } from 'react';
import { SearchInput } from '../../../../components/search-input';
import { ArrowsDownUp, FunnelSimple, Plus, X } from 'phosphor-react';
import { useTheme } from '../../../contexts/theme-context';
import { StatusType } from '../types/order-list-table-type';

type SortField = 'id' | 'username' | 'projectName' | 'address' | 'date' | 'status';
type SortDirection = 'asc' | 'desc';

interface FilterState {
  status: StatusType | 'all';
  date: string | 'all';
}

interface OrderListHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSort: (field: SortField) => void;
  sortField: SortField;
  sortDirection: SortDirection;
  onFilterToggle: () => void;
  showFilters: boolean;
  filters: FilterState;
  onFilterChange: (filterType: keyof FilterState, value: string) => void;
  onClearFilters: () => void;
}

export const OrderListHeader: React.FC<OrderListHeaderProps> = ({
  searchTerm,
  onSearchChange,
  onSort,
  sortField,
  sortDirection,
  onFilterToggle,
  showFilters,
  filters,
  onFilterChange,
  onClearFilters
}) => {
  const {theme} = useTheme()
  const filterRef = useRef<HTMLDivElement>(null);
  
  // Check if any filters are active
  const hasActiveFilters = filters.status !== 'all' || filters.date !== 'all';
  
  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        onFilterToggle();
      }
    };

    if (showFilters) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilters, onFilterToggle]);
  
  const handleSortClick = () => {
    // Cycle through sort fields: id -> username -> projectName -> address -> date -> status -> id
    const sortFields: SortField[] = ['id', 'username', 'projectName', 'address', 'date', 'status'];
    const currentIndex = sortFields.indexOf(sortField);
    const nextField = sortFields[(currentIndex + 1) % sortFields.length];
    onSort(nextField);
  };

  const statusOptions: { value: StatusType | 'all'; label: string }[] = [
    { value: 'all', label: 'All Status' },
    { value: 'complete', label: 'Complete' },
    { value: 'pending', label: 'Pending' },
    { value: 'inProgress', label: 'In Progress' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' }
  ];

  const dateOptions: { value: string | 'all'; label: string }[] = [
    { value: 'all', label: 'All Dates' },
    { value: 'Just now', label: 'Just now' },
    { value: 'A minute ago', label: 'A minute ago' },
    { value: '1 hour ago', label: '1 hour ago' },
    { value: 'Yesterday', label: 'Yesterday' },
    { value: 'Feb 2, 2023', label: 'Feb 2, 2023' }
  ];

  return (
    <div className={`${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-[#F7F9FB] text-black'} rounded-[8px] p-2 gap-4`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div className="flex items-center gap-2 font-semibold">
          <div className='p-1'>
            <Plus size={16} className='cursor-pointer font-semibold' />
          </div>
          <div className='p-1 relative' ref={filterRef}>
            <FunnelSimple 
              size={16} 
              className={`cursor-pointer ${showFilters || hasActiveFilters ? 'text-[#C6C7F8]' : ''}`}
              onClick={onFilterToggle}
            />
            {/* Active filter indicator */}
            {hasActiveFilters && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#C6C7F8] rounded-full"></div>
            )}
            {/* Filter Dropdown */}
            {showFilters && (
              <div className={`absolute top-full left-0 mt-2 z-50 min-w-64 rounded-lg shadow-xl border ${theme === 'dark' ? 'bg-black border-neutral-600' : 'bg-white border-gray-200'}`}>
                <div className="p-5 space-y-5">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h3 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Filters
                    </h3>
                    <button
                      onClick={onClearFilters}
                      className={`text-xs px-3 py-1.5 rounded-md transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-black' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                      Clear all
                    </button>
                  </div>
                  
                  {/* Status Filter */}
                  <div>
                    <label className={`block text-sm font-medium mb-2.5 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                      Status
                    </label>
                    <select
                      value={filters.status}
                      onChange={(e) => onFilterChange('status', e.target.value)}
                      className={`w-full text-sm rounded-lg border px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${theme === 'dark' ? 'bg-black border-gray-600 text-white hover:border-gray-500' : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'}`}
                    >
                      {statusOptions.map(option => (
                        <option key={option.value} value={option.value} className={theme === 'dark' ? 'bg-black' : 'bg-white'}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Filter */}
                  <div>
                    <label className={`block text-sm font-medium mb-2.5 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                      Date
                    </label>
                    <select
                      value={filters.date}
                      onChange={(e) => onFilterChange('date', e.target.value)}
                      className={`w-full text-sm rounded-lg border px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${theme === 'dark' ? 'bg-black border-gray-600 text-white hover:border-gray-500' : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'}`}
                    >
                      {dateOptions.map(option => (
                        <option key={option.value} value={option.value} className={theme === 'dark' ? 'bg-black' : 'bg-white'}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='p-1'>
            <ArrowsDownUp 
              size={16} 
              className={`cursor-pointer ${sortDirection === 'desc' ? 'rotate-180' : ''}`}
              onClick={handleSortClick}
            />
          </div>
        </div>
        <div className="relative w-full sm:w-auto">
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