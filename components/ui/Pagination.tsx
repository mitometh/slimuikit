import React from 'react';
import { cn, themeClasses } from '../../utils/cn';

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPageNumbers?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showPageNumbers = 5,
  className,
  ...props
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= showPageNumbers + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      let startPage = Math.max(2, currentPage - Math.floor(showPageNumbers / 2));
      let endPage = Math.min(totalPages - 1, startPage + showPageNumbers - 1);
      
      if (endPage === totalPages - 1) {
        startPage = Math.max(2, endPage - showPageNumbers + 1);
      }
      
      if (startPage > 2) {
        pages.push('...');
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const buttonClass = cn(
    'relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md',
    themeClasses.text.secondary,
    themeClasses.bg.primary,
    'border',
    themeClasses.border.default,
    themeClasses.hover.bg,
    'disabled:opacity-50 disabled:cursor-not-allowed'
  );

  const iconButtonClass = cn(
    'relative inline-flex items-center px-2 py-2',
    'border',
    themeClasses.border.default,
    themeClasses.bg.primary,
    'text-sm font-medium',
    themeClasses.text.muted,
    themeClasses.hover.bg,
    'disabled:opacity-50 disabled:cursor-not-allowed'
  );

  return (
    <div className={cn('flex items-center justify-between px-4 py-3 sm:px-6', className)} {...props}>
      {/* Mobile view */}
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={buttonClass}
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(buttonClass, 'ml-3')}
        >
          Next
        </button>
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className={cn('text-sm', themeClasses.text.secondary)}>
            Showing page <span className="font-medium">{currentPage}</span> of{' '}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={cn(iconButtonClass, 'rounded-l-md')}
            >
              <span className="sr-only">Previous</span>
              <i className="fas fa-chevron-left h-5 w-5" aria-hidden="true" />
            </button>
            
            {pageNumbers.map((page, index) => (
              <React.Fragment key={index}>
                {page === '...' ? (
                  <span className={cn(
                    'relative inline-flex items-center px-4 py-2',
                    'border',
                    themeClasses.border.default,
                    themeClasses.bg.primary,
                    'text-sm font-medium',
                    themeClasses.text.secondary
                  )}>
                    ...
                  </span>
                ) : (
                  <button
                    onClick={() => onPageChange(page as number)}
                    className={cn(
                      'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                      currentPage === page
                        ? 'z-10 bg-primary-50 dark:bg-primary-900/20 border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400'
                        : cn(
                            themeClasses.bg.primary,
                            themeClasses.border.default,
                            themeClasses.text.secondary,
                            themeClasses.hover.bg
                          )
                    )}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
            
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={cn(iconButtonClass, 'rounded-r-md')}
            >
              <span className="sr-only">Next</span>
              <i className="fas fa-chevron-right h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;