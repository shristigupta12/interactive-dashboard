import React, { useState } from 'react';
import { OrderListTableType } from '../types/order-list-table-type';
import { orderListTableData } from '../data/order-list-table-data';
import { OrderListHeader } from '../components/order-list-header';
import { OrderListTable } from '../components/order-list-table';
import { OrderListPagination } from '../components/order-list-pagination';

export const OrderList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const itemsPerPage = 5;

  const filteredData = orderListTableData.filter(order =>
    order.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(currentData.map(item => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRows(prev => [...prev, id]);
    } else {
      setSelectedRows(prev => prev.filter(rowId => rowId !== id));
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedRows([]);
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-7">
        <h1 className="text-md font-semibold">Order List</h1>
        <div className="flex flex-col gap-3">
            <OrderListHeader 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />
            <OrderListTable 
                data={currentData}
                selectedRows={selectedRows}
                onSelectAll={handleSelectAll}
                onSelectRow={handleSelectRow}
                allSelected={selectedRows.length === currentData.length && currentData.length > 0}
                someSelected={selectedRows.length > 0 && selectedRows.length < currentData.length}
            />
            <OrderListPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    </div>
  );
}; 