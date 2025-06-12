import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import { cn, themeClasses } from '../../utils/cn';

interface Column<T> {
  key: string;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
}

interface TableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  columns: Column<T>[];
  data: T[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  itemsPerPage?: number;
  showPagination?: boolean;
}

function Table<T extends Record<string, any>>({ 
  columns, 
  data, 
  onEdit, 
  onDelete,
  itemsPerPage = 10,
  showPagination = true,
  className,
  ...props
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    if (!showPagination) return data;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage, showPagination]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div 
      className={cn(
        themeClasses.bg.card,
        'rounded-lg overflow-hidden',
        themeClasses.shadow.card,
        themeClasses.border.default,
        className
      )}
      {...props}
    >
      <table className={cn('min-w-full', themeClasses.border.divider, 'divide-y')}>
        <thead className={themeClasses.bg.secondary}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  'px-6 py-3 text-left text-xs font-medium uppercase tracking-wider',
                  themeClasses.text.muted
                )}
              >
                {column.label}
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th className={cn(
                'px-6 py-3 text-left text-xs font-medium uppercase tracking-wider',
                themeClasses.text.muted
              )}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className={cn(themeClasses.bg.primary, themeClasses.border.divider, 'divide-y')}>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {column.render ? column.render(row[column.key], row) : (
                    <div className={cn('text-sm', themeClasses.text.primary)}>{row[column.key]}</div>
                  )}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {onEdit && (
                    <button
                      onClick={() => onEdit(row)}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 mr-3"
                    >
                      Edit
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(row)}
                      className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300"
                    >
                      Delete
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {showPagination && totalPages > 1 && (
        <div className={cn('border-t', themeClasses.border.default)}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default Table;