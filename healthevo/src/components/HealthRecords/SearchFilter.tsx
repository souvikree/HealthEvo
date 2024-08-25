import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery, setFilters } from '@/redux/slices/healthRecordsSlice';

const SearchFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>, filterKey: string) => {
    dispatch(setFilters({ [filterKey]: event.target.value }));
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Search and Filters</h2>
      <input
        type="text"
        placeholder="Search by keyword..."
        onChange={handleSearchChange}
        className="p-3 w-full mb-6 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-2" htmlFor="date-filter">Filter by Date</label>
          <input
            id="date-filter"
            type="text"
            placeholder="Enter date"
            onChange={(e) => handleFilterChange(e, 'date')}
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-2" htmlFor="provider-filter">Filter by Provider</label>
          <input
            id="provider-filter"
            type="text"
            placeholder="Enter provider"
            onChange={(e) => handleFilterChange(e, 'provider')}
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-2" htmlFor="testtype-filter">Filter by Test Type</label>
          <input
            id="testtype-filter"
            type="text"
            placeholder="Enter test type"
            onChange={(e) => handleFilterChange(e, 'testType')}
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
